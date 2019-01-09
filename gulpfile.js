const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const livereload = require('gulp-livereload');

gulp.task('eslint', function(){
  //validate
  gulp.src(['src/*.js'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

gulp.task('babel', function(){
  //transfer es6 to es5 js
   gulp.src('src/*.js')
   .pipe(babel({
     presets: ['@babel/env']
   }))
   .pipe(gulp.dest('dist'));
});

gulp.task('default', ['eslint', 'babel']);

// gulp.task('default', function(){
//   //validate
//   gulp.src(['src/*.js'])
//   .pipe(eslint())
//   .pipe(eslint.format())
//   .pipe(eslint.failAfterError());
//
//    //transfer es6 to es5 js
//     gulp.src('src/*.js')
//     .pipe(babel({
//       presets: ['@babel/env']
//     }))
//     .pipe(gulp.dest('dist'));
// });
