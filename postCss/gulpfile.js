//postcss-gulp基础操作
// var gulp = require('gulp');
// var postcss = require('gulp-postcss');
// var autoprefixer = require('autoprefixer');
// var sourcemaps = require('gulp-sourcemaps');
// var rename = require('gulp-rename');
// var cssnano = require('cssnano');
// var stylelint = require('stylelint');
// var reporter = require('postcss-reporter');
// var sass = require('gulp-sass');

// gulp.task('styles', function name (params) {
// 	return gulp
// 		.src('src/*.css')
// 		.pipe(
// 			postcss([
// 				autoprefixer,
// 			])
// 		)
// 		.pipe(sourcemaps.init())
// 		.pipe(sourcemaps.write('maps/'))
// 		.pipe(gulp.dest('dest/'));
// });
// gulp.task('rename', function name (params) {
// 	return gulp
// 		.src('dest/example.css')
// 		.pipe(
// 			postcss([
// 				cssnano,
// 			])
// 		)
// 		.pipe(rename('example.min.css'))
// 		.pipe(sourcemaps.init())
// 		.pipe(sourcemaps.write('maps/'))
// 		.pipe(gulp.dest('dest/'));
// });
// gulp.task('lint-styles', function name (params) {
// 	return gulp.src('src/*.css').pipe(
// 		postcss([
// 			stylelint({
// 				never: {
// 					'color-no-invalid-hex': 2,
// 					'declaration-colon-space-before': [
// 						2,
// 						'never',
// 					],
// 					indentation: [
// 						2,
// 						2,
// 					],
// 					'number-leading-zero': [
// 						2,
// 						'always',
// 					],
// 				},
// 			}),
// 			reporter({
// 				clearMessages: true,
// 			}),
// 		])
// 	);
// });
// gulp.task('sass', function name (params) {
// 	return gulp
// 		.src('src/*.scss')
// 		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
// 		.pipe(gulp.dest('src/'));
// });
// gulp.task('default', [
// 	'sass',
// 	'lint-styles',
// 	'styles',
// 	'rename',
// ]);
// gulp.watch('src/*.css', [
// 	'default',
// ]);

//post-css结合sass
// var gulp = require('gulp')
// var postcss = require('gulp-postcss')
// var autoprefixer = require('autoprefixer')
// var sourcemaps = require('gulp-sourcemaps')
// var rename = require('gulp-rename')
// var stylelint = require('stylelint')
// var reporter = require('postcss-reporter')
// var sass = require('gulp-sass')
// // var cssvariables= require('postcss-css-variables');

// gulp.task('autoprefixer', function name (params) {
// 	return gulp.src('src/*.css').pipe(postcss([ autoprefixer ])).pipe(gulp.dest('dest/'))
// })
// gulp.task('rename', function name (params) {
// 	return gulp
// 		.src('dest/*.css')
// 		.pipe(rename('style.min.css'))
// 		.pipe(sourcemaps.init())
// 		.pipe(sourcemaps.write('maps/'))
// 		.pipe(gulp.dest('dest/'))
// })
// gulp.task('sass', function name (params) {
// 	return gulp
// 		.src('src/*.scss')
// 		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
// 		.pipe(gulp.dest('src/'))
// })
// gulp.task('default', [ 'sass', 'autoprefixer', 'rename' ])
// gulp.watch('src/*.scss', [ 'default' ])

//*****************postcss代替sass*********************
var gulp = require('gulp')
var postcss = require('gulp-postcss')
var autoprefixer = require('autoprefixer')
var sourcemaps = require('gulp-sourcemaps')
var rename = require('gulp-rename')
var cssnano = require('cssnano')
var cssvariables = require('postcss-css-variables')

gulp.task('autoprefixer', function name (params) {
	return gulp
		.src('src/*.css')
		.pipe(postcss([ autoprefixer, cssnano, cssvariables(/* options */) ])) //主要在cssvariables 插件可以便宜postcss专用变量声明
		.pipe(gulp.dest('dest/'))
})
gulp.task('rename', function name (params) {
	return gulp
		.src('dest/*.css')
		.pipe(rename('style.min.css'))
		.pipe(sourcemaps.init())
		.pipe(sourcemaps.write('maps/'))
		.pipe(gulp.dest('dest/'))
})
gulp.task('default', [ 'autoprefixer', 'rename' ])
// gulp.watch('src/*.scss', [ 'default' ])
