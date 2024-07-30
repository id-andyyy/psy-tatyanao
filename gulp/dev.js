const gulp = require('gulp');

// HTML
const fileInclude = require('gulp-file-include');
const typograf = require('gulp-typograf');

// SASS
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');
const sourceMaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

// Images
const svgsprite = require('gulp-svg-sprite');

// JS
const fs = require('fs');
const webpack = require('webpack-stream');
const babel = require('gulp-babel');

// Other
const server = require('gulp-server-livereload');
const clean = require('gulp-clean');
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

gulp.task('html:dev', function () {
  return gulp
    .src(['./src/html/**/*.html', '!./src/html/blocks/*.html', '!./src/html/templates/*.html'])
    .pipe(plumber(getPlumberConfig('html:dev')))
    .pipe(changed('./build/', { hasChanged: changed.compareContents }))
    .pipe(fileInclude(fileIncludeConfig))
    .pipe(
      typograf({
        locale: ['ru', 'en-US'],
        htmlEntity: { type: 'digit' },
        safeTags: [
          ['<\\?php', '\\?>'],
          ['<no-typography>', '</no-typography>'],
        ],
      })
    )
    .pipe(gulp.dest('./build/'));
});

gulp.task('sass:dev', function () {
  return gulp
    .src('./src/scss/*.scss')
    .pipe(plumber(getPlumberConfig('sass:dev')))
    .pipe(changed('./build/css/'))
    .pipe(sourceMaps.init())
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(sourceMaps.write())
    .pipe(gulp.dest('./build/css/'));
});

gulp.task('img:dev', function () {
  return gulp
    .src(['./src/img/**/*', '!./src/img/svgicons/**/*'], { encoding: false })
    .pipe(plumber(getPlumberConfig('img:dev')))
    .pipe(changed('./build/img/'))
    .pipe(gulp.dest('./build/img/'));
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

gulp.task('svg:dev', function () {
  return gulp
    .src('./src/img/svgicons/**/*.svg')
    .pipe(plumber(plumber('svg:dev')))
    .pipe(svgsprite(svgSymbol))
    .pipe(gulp.dest('./build/img/svgsprite/'));
});

gulp.task('js:dev', function () {
  return gulp
    .src('./src/js/*.js')
    .pipe(plumber(getPlumberConfig('js:dev')))
    .pipe(changed('./build/js/'))
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
      open: false,
      host: '0.0.0.0',
      port: 8000,
    }));
});

gulp.task('watch:dev', function () {
  gulp.watch('./src/scss/**/*.scss', gulp.series('sass:dev'));
  gulp.watch('./src/**/*.html', gulp.series('html:dev'));
  gulp.watch('./src/img/**/*', gulp.series('img:dev'));
  gulp.watch('./src/img/svgicons/*', gulp.series('svg:dev'));
  gulp.watch('./src/js/**/*', gulp.series('js:dev'));
});