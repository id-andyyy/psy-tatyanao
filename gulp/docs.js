const gulp = require('gulp');

// HTML
const fileInclude = require('gulp-file-include');
const htmlclean = require('gulp-htmlclean');
const webpHtml = require('gulp-webp-html');

// SASS
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');
const csso = require('gulp-csso');
const autoprefixer = require('gulp-autoprefixer');
const groupMedia = require('gulp-group-css-media-queries');
const webpCss = require('gulp-webp-css');

// Images
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

// Other
const server = require('gulp-server-livereload');
const clean = require('gulp-clean');
const fs = require('fs');

// JS
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

gulp.task('html:docs', function () {
  return gulp
    .src(['./src/html/**/*.html', '!./src/html/blocks/*.html'])
    .pipe(plumber(getPlumberConfig('HTML')))
    .pipe(changed('./docs/'))
    .pipe(fileInclude(fileIncludeConfig))
    .pipe(webpHtml())
    .pipe(htmlclean())
    .pipe(gulp.dest('./docs/'));
});

gulp.task('sass:docs', function () {
  return gulp
    .src('./src/scss/*.scss')
    .pipe(plumber(getPlumberConfig('SCSS')))
    .pipe(changed('./docs/css/'))
    .pipe(sassGlob())
    .pipe(groupMedia())
    .pipe(sass())
    .pipe(webpCss())
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(gulp.dest('./docs/css/'));
});

gulp.task('img:docs', function () {
  return gulp
    .src('./src/img/**/*', { encoding: false })
    .pipe(plumber(getPlumberConfig('Images')))
    .pipe(changed('./docs/img/'))
    .pipe(imagemin({ verbose: true }))
    .pipe(gulp.dest('./docs/img/'))
});

gulp.task('webp:docs', function () {
  return gulp
    .src('./src/img/**/*.+(png|jpg|jpeg)', { encoding: false })
    .pipe(plumber(getPlumberConfig('Webp')))
    .pipe(changed('./docs/img/'))
    .pipe(webp())
    .pipe(gulp.dest('./docs/img/'));
});

gulp.task('js:docs', function () {
  return gulp
    .src('./src/js/*.js')
    .pipe(plumber(getPlumberConfig('JS')))
    .pipe(changed('./docs/js/'))
    .pipe(babel())
    .pipe(webpack(require('../webpack.config')))
    .pipe(gulp.dest('./docs/js/'));
});

gulp.task('clean:docs', function (done) {
  if (fs.existsSync('./docs/')) {
    return gulp
      .src('./docs', { read: false })
      .pipe(clean());
  }
  done();
});

gulp.task('server:docs', function () {
  return gulp
    .src('./docs')
    .pipe(server({
      livereload: true,
      open: true,
    }));
});