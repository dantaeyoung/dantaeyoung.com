var gulp = require('gulp');
var jsonConcat = require('gulp-json-concat');
var triplet = require('gulp-triplet');

gulp.task('json', function () {
  return gulp.src('site/DATA/projects/**/project.json')
    .pipe(triplet())
    .pipe(jsonConcat('allprojects.json',function(data){
      console.log(data);
      return new Buffer(JSON.stringify(data));
    }))
    .pipe(gulp.dest('site/DATA/projects'));
});

