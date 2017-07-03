var gulp = require('gulp');
var jsonConcat = require('gulp-json-concat');
 
gulp.task('json', function () {
  return gulp.src('site/projects/**/*.json')
    .pipe(jsonConcat('allprojects.json',function(data){
      return new Buffer(JSON.stringify(data));
    }))
    .pipe(gulp.dest('site/projects'));
});

