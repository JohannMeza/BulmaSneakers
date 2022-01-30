const gulp = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const autoprefixer = require('gulp-autoprefixer');
sass.compiler = require('node-sass');

gulp.task('sass', () => {
  return gulp.src('./src/sass/**/*.scss')
  .pipe(sass({ outputStyle: 'expanded' }))
  .pipe(autoprefixer())
  .pipe(gulp.dest('./public/css'))
})

gulp.task('default', () => {
  gulp.watch('./src/sass/**/*.scss', gulp.series('sass'));
})

