const gulp = require('gulp');
const fileInclude = require('gulp-file-include');
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');
const sourceMaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const server = require('gulp-server-livereload');
const clean = require('gulp-clean');
const fs = require('fs');
const webpack = require('webpack-stream');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const changed = require('gulp-changed');

const getPlumberConfig = (title) => {
  return {
    errorHandler: notify.onError({
      title,
      message: 'Error <%= error.message %>',
      sound: false,
    }),
  };
};

const fileIncludeConfig = {
  prefix: '@@',
  basepath: '@file',
};

gulp.task('html:dev', function () {
  return gulp
    .src(['./src/html/**/*.html', '!./src/html/blocks/*.html'])
    .pipe(changed('./build/', { hasChanged: changed.compareContents }))
    .pipe(plumber(getPlumberConfig('HTML')))
    .pipe(fileInclude(fileIncludeConfig))
    .pipe(gulp.dest('./build/'));
});

gulp.task('sass:dev', function () {
  return gulp
    .src('./src/scss/*.scss')
    .pipe(changed('./build/css/'))
    .pipe(plumber(getPlumberConfig('SCSS')))
    .pipe(sourceMaps.init())
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(sourceMaps.write())
    .pipe(gulp.dest('./build/css/'));
});

gulp.task('img:dev', function () {
  return gulp
    .src('./src/img/**/*', { encoding: false })
    .pipe(changed('./build/img/'))
    .pipe(imagemin({ verbose: true }))
    .pipe(gulp.dest('./build/img/'));
});

gulp.task('js:dev', function () {
  return gulp
    .src('./src/js/*.js')
    .pipe(changed('./build/js/'))
    .pipe(plumber(getPlumberConfig('JS')))
    .pipe(babel())
    .pipe(webpack(require('./../webpack.config')))
    .pipe(gulp.dest('./build/js/'));
})

gulp.task('clean:dev', function (done) {
  if (fs.existsSync('./build/')) {
    return gulp
      .src('./build', { read: false })
      .pipe(clean());
  }
  done();
});

gulp.task('server:dev', function () {
  return gulp
    .src('./build')
    .pipe(server({
      livereload: true,
      open: true,
    }));
});

gulp.task('watch:dev', function () {
  gulp.watch('./src/scss/**/*.scss', gulp.series('sass:dev'));
  gulp.watch('./src/**/*.html', gulp.series('html:dev'));
  gulp.watch('./src/img/**/*', gulp.series('img:dev'));
  gulp.watch('./src/js/**/*', gulp.series('js:dev'));
});