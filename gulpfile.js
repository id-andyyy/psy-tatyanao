const gulp = require('gulp');

// Tasks
require('./gulp/dev.js');
require('./gulp/docs.js');

gulp.task('default',
  gulp.series(
    'clean:dev',
    gulp.parallel('html:dev', 'sass:dev', 'img:dev', 'svg:dev', 'js:dev'),
    gulp.parallel('server:dev', 'watch:dev')
  )
);

gulp.task('docs',
  gulp.series(
    'clean:docs',
    gulp.parallel('html:docs', 'sass:docs', 'img:docs', 'webp:docs', 'svg:docs', 'js:docs'),
    'server:docs'
  )
);