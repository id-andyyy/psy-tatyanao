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
const svgsprite = require('gulp-svg-sprite');

// JS
const webpack = require('webpack-stream');
const babel = require('gulp-babel');

// Other
const server = require('gulp-server-livereload');
const clean = require('gulp-clean');
const fs = require('fs');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const changed = require('gulp-changed');
const path = require('path');

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
    .pipe(plumber(getPlumberConfig('html:docs')))
    .pipe(changed('./docs/'))
    .pipe(fileInclude(fileIncludeConfig))
    .pipe(webpHtml())
    .pipe(htmlclean())
    .pipe(gulp.dest('./docs/'));
});

gulp.task('sass:docs', function () {
  return gulp
    .src('./src/scss/*.scss')
    .pipe(plumber(getPlumberConfig('sass:docs')))
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
    .pipe(plumber(getPlumberConfig('img:docs')))
    .pipe(changed('./docs/img/'))
    .pipe(imagemin({ verbose: true }))
    .pipe(gulp.dest('./docs/img/'))
});

gulp.task('webp:docs', function () {
  return gulp
    .src('./src/img/**/*.+(png|jpg|jpeg)', { encoding: false })
    .pipe(plumber(getPlumberConfig('webp:docs')))
    .pipe(changed('./docs/img/'))
    .pipe(webp())
    .pipe(gulp.dest('./docs/img/'));
});

const svgSymbol = {
  mode: {
    symbol: {
      sprite: '../sprite.symbol.svg',
    },
  },
  shape: {
    id: {
      generator: function (name, file) {
        const folderName = path.basename(path.dirname(file.relative));
        const fileName = path.basename(file.relative, path.extname(file.relative));
        return `${folderName}-${fileName}`;
      },
    },
    transform: [
      {
        svgo: {
          js2svg: { indent: 4, pretty: true },
          plugins: [
            {
              name: 'removeAttrs',
              params: {
                attrs: '(fill|stroke)',
              },
            },
          ],
        },
      },
    ],
  },
};

gulp.task('svg:docs', function () {
  return gulp
    .src('./src/img/svgicons/**/*.svg')
    .pipe(plumber(plumber('svg:docs')))
    .pipe(svgsprite(svgSymbol))
    .pipe(gulp.dest('./docs/img/svgsprite/'));
});

gulp.task('js:docs', function () {
  return gulp
    .src('./src/js/*.js')
    .pipe(plumber(getPlumberConfig('js:docs')))
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