import path from 'path'
import fs from 'fs'
import { glob } from 'glob'


import { src, dest, watch, series } from 'gulp';
import sharp from 'sharp'

// DEPENDECIAS DE SASS 

import sass from 'gulp-dart-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import sourcemaps from 'gulp-sourcemaps';

// Tarea para compilar SCSS a CSS
export const css = () => {
    return src('src/scss/app.scss')
        .pipe(sourcemaps.init())  // Inicia el sourcemap
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError)) // Compila SCSS
        .pipe(postcss([autoprefixer()])) // Aplica autoprefixer
        .pipe(sourcemaps.write('.')) // Escribe el sourcemap
        .pipe(dest('build/css')); // Guarda el resultado en build/css
};

export async function imagenes(done) {
    const srcDir = './src/img';
    const buildDir = './build/img';
    const images = await glob('./src/img/**/*.{jpg,png}')

    images.forEach(file => {
        const relativePath = path.relative(srcDir, path.dirname(file));
        const outputSubDir = path.join(buildDir, relativePath);
        procesarImagenes(file, outputSubDir);
    });
    done();
}

function procesarImagenes(file, outputSubDir) {
    if (!fs.existsSync(outputSubDir)) {
        fs.mkdirSync(outputSubDir, { recursive: true })
    }
    const baseName = path.basename(file, path.extname(file))
    const extName = path.extname(file)
    const outputFile = path.join(outputSubDir, `${baseName}${extName}`)
    const outputFileWebp = path.join(outputSubDir, `${baseName}.webp`)
    const outputFileAvif = path.join(outputSubDir, `${baseName}.avif`)

    const options = { quality: 80 }
    sharp(file).jpeg(options).toFile(outputFile)
    sharp(file).webp(options).toFile(outputFileWebp)
    sharp(file).avif().toFile(outputFileAvif) 
}

// FUNCION PARA OBSERVAR TODOS LOS CAMBIOS
export const dev = () => {

    watch('src/scss/**/*.scss', css);
    watch('src/img/**/*', imagenes);

};

// EXPORTACIONES

export default series(imagenes, css, dev);