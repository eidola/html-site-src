/*jslint browser:false*/
/*global require*/
var gulp = require('gulp');
var handlebars = require('gulp-handlebars');
var defineModule = require('gulp-define-module');
var concat = require('gulp-concat');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var globby = require('globby');
var through = require('through2');
var browserify = require('browserify');
var less = require('gulp-less');
var smoosh = require('gulp-smoosher');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');


var name = require('./package.json').name;

gulp.task('templates', function() {
  // Load templates from the templates/ folder relative to where gulp was executed
  gulp.src('src/templates/**/*.hbs')
    // Compile each Handlebars template source file to a template function
	.pipe(handlebars({
	    handlebars: require('handlebars')
	}))
    // Wrap each template function in a call to Handlebars.template
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    // Declare template functions as properties and sub-properties of exports
    .pipe(declare({
      root: 'exports',
      noRedeclare: true, // Avoid duplicate declarations
      processName: function(filePath) {
        // Allow nesting based on path using gulp-declare's processNameByPath()
        // You can remove this option completely if you aren't using nested folders
        // Drop the templates/ folder from the namespace path by removing it from the filePath
	
        return declare.processNameByPath(filePath.replace('src/templates', ''));
      }
    }))
    // Concatenate down to a single file
    .pipe(concat('templates.js'))
    // Add the Handlebars module in the final output
    .pipe(wrap('var Handlebars = require("./helpers");\n <%= contents %>'))
    // WRite the output into the templates folder
    .pipe(gulp.dest('src/js/modules'));
});

gulp.task('less', function() {
    gulp.src(['src/less/main.less'])
	.pipe(less())
	.pipe(gulp.dest('./dist/css'));
});

gulp.task('javascript', ['templates'], function() {
    var bundledStream = through();
    bundledStream
	.pipe(source('index.js'))
	.pipe(buffer())
	.pipe(gulp.dest('./dist/js/'));

    globby(['./src/js/**/*.js']).then(function(entries) {
	var b = browserify({ 
	    entries: entries,
	    debug: false,
	    transform: 'brfs'
	});
	b.bundle().pipe(bundledStream);
    }).catch(function(err) {
	bundledStream.emit('error', err);
    });
    return bundledStream;
});

gulp.task('images', function() {
    gulp.src(['./src/assets/**/*.png', '!./src/assets/_original/*.*'])
	.pipe(imagemin({
	    progressive: true,
	    svgoPlugins: [{removeViewBox: false}],
	    use: [pngquant()]
	}))
	.pipe(gulp.dest('./dist/assets/'));	
});

gulp.task('default', ['javascript', 'less', 'images'], function() {
    gulp.src('./src/index.html')
	.pipe(smoosh())
	.pipe(gulp.dest('./dist'));
    console.log('Gulp Default Task');
});
