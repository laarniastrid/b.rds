var gulp = require('gulp'),
    sass = require('gulp-sass'),
    // addsrc = require('gulp-add-src'),
    // order = require('gulp-order'),
    concat = require('gulp-concat'),
    // uglify = require('gulp-uglify'),
    uglifycss = require('gulp-uglifycss'),
    ngAnnotate = require('gulp-ng-annotate'),
    watcher = gulp.watch(['./main/**/*.js', './main/**/*.scss', './main/**/*.html', './bower_components/ngCart/template'], ['default']);

watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ' at ' + new Date() + ' , running tasks...');
});

gulp.task('sass', function() { // will double check out styles|sass wording|npm install
  return gulp.src('./main/**/*.scss')
    // .pipe(stylus())
    .pipe(sass())
    // .pipe(uglifycss())
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./public/styles'))
});

gulp.task('javascript', function() {
  gulp.src(['./main/**/*.js'])
    .pipe(ngAnnotate())
    // .pipe(uglify())
    // .pipe(addsrc('./animateDir.js'))
    // .pipe(order([
    //   'app.js',
    //   'main/**/*.js',
    //   'animateDir.js'
    // ], { base: './' }))
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./public/scripts'))
});

gulp.task('html', function() {
  gulp.src('./main/**/*.html')
    // .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./public/html/'))
});

gulp.task('ngCartTmpl', function() {
  gulp.src(['./public/bower_components/ngCart/template'])
    .pipe(gulp.dest('./public/template'))
})

gulp.task('default', ['sass', 'javascript', 'html', 'ngCartTmpl']);
