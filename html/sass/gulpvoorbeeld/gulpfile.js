"use strict";
var gulp = require('gulp');
var sass = require('gulp-sass');
var path = require('path');
var sync = require('browser-sync').create();
var del = require('del');

var paths = {
    "scss": path.join(__dirname, '/assets/scss'),
    "css": path.join(__dirname, '/assets/css')
}
var glob = {
    "sass": path.join(paths.scss, '/**/*.scss')
}
gulp.task('log', function(){
    console.log("css path: ", paths.css);
    console.log("scss path:", glob.sass);
})

gulp.task('sass', function(){
    return gulp.src(glob.sass)
            .pipe(sass({sourceComments: true,
                        outputStyle: 'expanded'})
            .on('error', sass.logError))
            .pipe(gulp.dest(paths.css))
            .pipe(sync.reload({stream:true}))
});
gulp.task('sass:watch', function(){
    gulp.watch(glob.sass, ['sass']);
});
//gulp.task('clean', clean);
gulp.task('deploy', function(){
    clean();
    return copytoDest();

})
gulp.task('serve', ['log'], function(){
    sync.init({
        server: {
            baseDir: './'
        }
    })
    gulp.watch(glob.sass, ['sass']);
    return gulp.watch('./*.html').on('change', sync.reload);
})
gulp.task('default', ['serve']);

function clean(){
    return del(['dist/**/*']);
}
function copytoDest(){
    gulp.src('./assets/css/*.css').pipe(gulp.dest('./dist/assets/css/'));
    return gulp.src('./web/**/*')
        .pipe(gulp.dest('./dist/'));
}
exports.clean = clean;