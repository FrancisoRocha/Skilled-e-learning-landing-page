import { src, dest, watch, series } from 'gulp'

// DEPENDECIAS DE SASS 

import * as dartSass from 'sass'
import gulpSass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';

const sass = gulpSass(dartSass);


// FUNCION DE CSS
export const css = (done) =>{

    src('src/scss/app.scss')
        .pipe(sass( { outputStyle: 'expanded' } ) )
        .pipe(postcss( [ autoprefixer() ]))
        .pipe(dest('build/css') )

    done();

};

// FUNCION PARA OBSERVAR TODOS LOS CAMBIOS
export const dev = () => {

    watch('src/scss/**/*.scss', css);
}

// EXPORTACIONES

export default series(css, dev);