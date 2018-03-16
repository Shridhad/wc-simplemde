const gulp = require('gulp'),
    sass = require('gulp-sass');
 
gulp.task('sass', () => {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
});

gulp.task("js", () => {
    let sourceFiles = [ 
        'bower_components/simplemde/dist/simplemde.min.js'
    ];
    let destination = "."

    return gulp.src(sourceFiles)
        .pipe(gulp.dest(destination));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task("build", ["sass", "js"]);
gulp.task("default", ["build"]);