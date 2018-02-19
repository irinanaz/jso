'use strinct';
var gulp= require('gulp');
var sass= require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();

const paths = {
    styles: {
      src: 'scss/**/*.scss',
      dest: 'css/'
    }
  
    };

gulp.task('log', function(){
    console.log ('Heen Gulp noodig');
});
gulp.task('sass', function(){
    return gulp.src(paths.styles.src)
            .pipe(sass().on('error', sass.logError)) 
            .pipe(gulp.dest(paths.styles.dest))
            .pipe(cleanCSS())
            .pipe(rename({
                
                suffix: '.min'
              }))
            .pipe(gulp.dest(paths.styles.dest))
            .pipe(browserSync.stream());
});
gulp.task('sass:watch', function(){
    gulp.watch(paths.styles.src, ['sass']);
});
gulp.task('serve', function() {
    browserSync.init({
        server:"./"
    });
    gulp.watch(paths.styles.src, ['sass']);
    gulp.watch('*.html').on('change', browserSync.reload);
});
gulp.task('default',['serve']);