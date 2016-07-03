var gulp         = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    sass         = require('gulp-sass');

var paths = {
    cssSrc: ['assets/styles/*.scss', 'assets/styles/**/*.scss'],
    cssDest: 'public/css/',
    htmlSrc: 'public/',
  sass: [ 
    'node_modules/foundation-sites/scss',
    'node_modules/motion-ui/src'
  ]
};

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function(){
  return gulp.src(paths.cssSrc[0])
    .pipe(sass({
        includePaths: paths.sass,
        outputStyle: 'compressed'
    })
      .on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 1 versions']
    }))
    .pipe(gulp.dest(paths.cssDest));
});

// Static Server + watching scss/html files
gulp.task('watch', function(){
  gulp.watch(paths.cssSrc, ['sass']);
});

gulp.task('default', ['sass', 'watch']);