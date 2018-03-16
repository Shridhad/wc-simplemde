const gulp = require('gulp'),
    copy = require("gulp-copy"),
    sass = require('gulp-sass'),
    inline = require("gulp-inline"),
    minifyCss = require("gulp-minify-css");

const destination = "./dist"

gulp.task('sass', () => {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
});

gulp.task("js", () => {
    let sourceFiles = [ 
        'bower_components/simplemde/dist/simplemde.min.js'
    ];

    return gulp.src(sourceFiles)
        .pipe(copy(destination, {prefix: 3}))
        .pipe(gulp.dest(destination));
});

gulp.task("inline", ["sass"], () => {
    return gulp.src('src/wc-simplemde.html')
        .pipe(inline({
            css: [minifyCss],
            ignore: ['../simplemde.min.js']
        }))
        .pipe(gulp.dest(destination));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task("build", ["js", "inline"]);
gulp.task("default", ["build"]);