const gulp = require('gulp')
const babel = require('gulp-babel')
const del = require('del')
// import gulp from 'gulp'
// import babel from 'gulp-babel'

gulp.task('build', function(){
  gulp.src('./src/index.js')
  .pipe(babel({
    presets: ['@babel/env']
  }))
  .pipe(gulp.dest('./dist/js'))
})

gulp.task('clear', function(){
  del('./dist')
})


