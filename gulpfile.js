var gulp = require('gulp'), 
	uglify = require('gulp-uglify'),
	jshint = require('gulp-jshint');
	
gulp.task('lint', function() {
  gulp.src('./src/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
}); 

gulp.task('minify', function(){
    gulp.src('./src/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build'));
	gulp.src('./src/*.html')
        .pipe(gulp.dest('./build'));
	gulp.src('./src/*.css')
        .pipe(gulp.dest('./build'));
});

gulp.task('default', function(){
  gulp.run('lint', 'minify');

  gulp.watch("./src/*.*", function(event){
    gulp.run('lint', 'minify');
  });
});
