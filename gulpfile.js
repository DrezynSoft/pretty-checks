var gulp = require('gulp');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var wrap = require('gulp-wrap');

var getVendor = function (v) {
    var vendor = [];
    vendor.push('/**');
    vendor.push(' * Pretty Checks Extension of ' + v + ' from http://dssys.fotokrajobrazy.warmia.pl');
    vendor.push(' * All right reserved. DrezynSoft 2017');
    vendor.push(' * Commercial use without permission prohibited.');
    vendor.push(' */');
    return vendor.join("\n") + "\n";
};

var wrapPattern = '/*file=<%= file.path.replace(file.cwd, "").replace(/\\\\/g, "/") %>*/\n<%= contents %>';

gulp.task('js-jquery', function(){
  return gulp.src('src/jQuery/czeki.js')
    .pipe(gulpIf('*.js', uglify()))
    .pipe(wrap(getVendor('jQuery') + wrapPattern))
    .pipe(concat('czeki.min.js'))
    .pipe(gulp.dest('dist/jQuery'));
});

gulp.task('js-dssys', function(){
  return gulp.src('src/DSsys/czeki.js')
    .pipe(gulpIf('*.js', uglify()))
    .pipe(wrap(getVendor('DSsys') + wrapPattern))
    .pipe(concat('czeki.min.js'))
    .pipe(gulp.dest('dist/DSsys'));
});

gulp.task('css-fa', function(){
  return gulp.src('dist/css/czeki_fa.css')
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(wrap(wrapPattern))
    .pipe(concat('czeki_fa.min.css'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('css-sprite', function(){
  return gulp.src('dist/css/czeki_sprite.css')
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(wrap(wrapPattern))
    .pipe(concat('czeki_sprite.min.css'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('default', ['js-jquery', 'js-dssys', 'css-fa', 'css-sprite']);