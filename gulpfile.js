const gulp  = require("gulp");
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const cleanCss = require('gulp-clean-css');


gulp.task('pack-js', function () {    
    return gulp.src([
		'js/jquery.min.js',
		'js/jquery-migrate-3.0.1.min.js',
		'js/popper.min.js',
		'js/bootstrap.min.js',
		'js/jquery.easing.1.3.js',
		'js/jquery.waypoints.min.js',
		'js/jquery.stellar.min.js',
		'js/owl.carousel.min.js',
		'js/jquery.magnific-popup.min.js',
		'js/aos.js',
		'js/jquery.animateNumber.min.js',
		'js/scrollax.min.js',
		'js/bootstrap-datepicker.js',
		'js/jquery.timepicker.min.js',
		'js/lazyload.min.js',
		'js/typer.js',
		])
		.pipe(minify({noSource: true}))
		.pipe(concat('app.js'))
		.pipe(gulp.dest('./js'));
});
 
gulp.task('pack-css', function () {    
    return gulp.src([
		'css/open-iconic-bootstrap.min.css',
		'css/animate.css',
		'css/owl.carousel.min.css',
		'css/owl.theme.default.min.css',
		'css/aos.css',
		'css/ionicons.min.css',
		'css/bootstrap-datepicker.css',
		'css/jquery.timepicker.css',
		'css/style.css',
	])
	.pipe(cleanCss(
		{level: {1: {specialComments: 0}}}
	))
    .pipe(concat('stylesheet.css'))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('default',  gulp.series('pack-js', 'pack-css') );



