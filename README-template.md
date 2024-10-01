# Frontend Mentor - Skilled e-learning landing page solution

This is a solution to the [Skilled e-learning landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/skilled-elearning-landing-page-S1ObDrZ8q). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![](./MacBook%20Pro-1727784921496.jpeg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

### Links

- live URL: [URL](https://skilled-e-learning-landing-page-zeta.vercel.app/)
- Solution URL: [Solution URL](https://github.com/FrancisoRocha/Skilled-e-learning-landing-page)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

During the development of this project, I have had the opportunity to reinforce and put into practice several key concepts. Below are some of the main learnings and areas that I would like to highlight:

1 Flexbox for responsive design
Used Flexbox to create a responsive layout efficiently. It helped me handle the alignment of elements and ensure they fit correctly on different screen sizes without issues.

```css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```
2. Grid for more complex layouts
Grid has been key to structuring more complex sections of the site, allowing me more detailed control of the arrangement of elements. In this project, I used Grid for a gallery that adapts well to different devices.

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}
```
3. Sass for style optimization
Sass allowed me to better structure styles through variables, mixins, and nesting. This made it easier to reuse code and manage colors and fonts throughout the project.

```scss
$primary-color: #6c5ce7;

.btn {
  background-color: $primary-color;
  padding: 1rem 2rem;
  border-radius: 5px;
}
```
4. Automation with Gulp.j
I learned how to automate repetitive tasks with Gulp.js, such as minifying CSS and JS files, and converting images, improving overall site performance.

```js
const gulp = require('gulp');
const cssnano = require('gulp-cssnano');

gulp.task('minify-css', () => {
  return gulp.src('src/css/*.css')
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css'));
});
```
5. Image Optimization with Shar
I used Sharp to convert images to more efficient formats, such as WebP, thereby improving site loading times without sacrificing visual quality

```js
sharp('input.jpg')
  .resize(300)
  .toFormat('webp')
  .toFile('output.webp', (err, info) => {
    if (err) throw err;
    console.log(info);
  });
```
6. Mobile Firs
Implemented the Mobile First methodology to ensure the site works on mobile devices first, then optimizing for larger screens. This helped me improve the user experience across all devices.

```css
@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}
```

### Continued development

So far I have managed to acquire skills in Flexbox, CSS Grid, Sass, Gulp.js, Sharp, and the Mobile First strategy. However, there are areas that I would like to continue to refine in future projects:

1 Flexbox and Grid: Although I feel comfortable using these layout systems, I want to continue exploring advanced and more dynamic combinations between Flexbox and Grid to achieve more complex and efficient layouts at different resolutions.
2 .Sass: I would like to delve into using Sass mixins, functions and more complex structures to make my code more modular and maintainable.
3 Gulp.js and automation: Although I already use Gulp.js for basic tasks such as file compilation and minification, I want to optimize my workflow by automating even more processes, such as asset management and improving site performance.
4 .Sharp and image optimization: Although I have already implemented image conversion to formats such as WebP and AVIF, I want to improve my skills in advanced image optimization to achieve even faster loading times in future projects.
5 Mobile First: Although I already apply the Mobile First methodology, I would like to refine it further, creating experiences that work exceptionally well on mobile devices without sacrificing usability on larger screens.

### Useful resources

- [CSS Grid Layout Guide](https://css-tricks.com/snippets/css/complete-guide-grid/) - This is CSS Grid, it is a support guide to understand CSS Grid and Flexbox
- [Documentation the Gulp.js](https://gulpjs.com/docs/en/getting-started/creating-tasks) - This was a guide to better understand gulp

## Author

- Frontend Mentor - [@FrancisoRocha](https://www.frontendmentor.io/profile/FrancisoRocha)
- Instagram - [@franciscorocha9_](https://www.instagram.com/franciscorocha9_/)

