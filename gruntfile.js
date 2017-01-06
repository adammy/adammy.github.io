module.exports = function (grunt) {

	'use strict';

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		connect: {
			server: {
				options: {
					livereload: true
				}
			}
		},

		less: {
			dist: {
				options: {
					compress: true
				},
				files: {
					'css/style.min.css': 'src/less/style.less'
				}
			}
		},

		open: {
			dev: {
				path: 'http://localhost:8000/'
			}
		},

		uglify: {
			dist: {
				src: 'src/js/app.js',
				dest: 'js/app.min.js'
			}
		},

		watch: {
			html: {
				files: ['*.html'],
				options: {
					livereload: true
				}
			},
			less: {
				files: ['src/less/**/*.less'],
				tasks: ['less'],
				options: {
					livereload: true
				}
			},
			js: {
				files: ['src/js/**/*.js'],
				tasks: ['uglify'],
				options: {
					livereload: true
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-open');

	grunt.registerTask('default', ['connect', 'less', 'uglify', 'open', 'watch']);

};
