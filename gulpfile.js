const gulp = require('gulp');
const del = require('del');
const runSequence = require('run-sequence');
const gzip = require('gulp-gzip');

const PATHS = {
    outDir: 'public',
    js: 'dist/**/*.js',
    fonts: ['dist/**/*.eot','dist/**/*.svg','dist/**/*.woff2','dist/**/*.woff','dist/**/*.ttf'],
    html: ['dist/**/*.html'],
    css: ['dist/css/style.css']
};

//clean the dist folder
gulp.task('clean', function clean(done) {
    return del([PATHS.outDir], done);
});

//<-------------gzip tasks------------->//
gulp.task('compress', function() {
    gulp.src(PATHS.js)
    .pipe(gzip({ append: true }))
    .pipe(gulp.dest(PATHS.outDir));
});

gulp.task('html', function () {
    return gulp.src(PATHS.html)
        .pipe(gulp.dest(PATHS.outDir));
});

gulp.task('fonts', function () {
    return gulp.src(PATHS.fonts)
        .pipe(gulp.dest(PATHS.outDir));
});

//unified task for scripts
gulp.task('default', function (done) {
    runSequence('clean', 'compress', 'html', 'fonts', done);
});