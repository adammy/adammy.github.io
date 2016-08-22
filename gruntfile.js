module.exports = function (grunt) {

	"use strict";

	grunt.initConfig({

		pkg: grunt.file.readJSON("package.json"),

		clean: {
			js: "dist/js/app.js",
			img: "dist/img/*"
		},

		concat: {
			dist: {
				src: "src/js/**/*.js",
				dest: "dist/js/app.js",
				options: {
					separator: ";"
				}
			}
		},

		connect: {
			server: {
				options: {
					livereload: true
				}
			}
		},

		imagemin: {
			dist: {
				files: [{
					expand: true,
					cwd: "src/img/",
					src: ["**/*.{png,jpg,gif}"],
					dest: "dist/img/"
				}]
			}
		},

		less: {
			dist: {
				options: {
					compress: true
				},
				files: {
					"dist/css/style.min.css": "src/less/style.less"
				}
			}
		},

		open: {
			dev: {
				path: "http://localhost:8000/"
			}
		},

		uglify: {
			dist: {
				src: "dist/js/app.js",
				dest: "dist/js/app.min.js"
			}
		},

		watch: {
			html: {
				files: ["index.html"],
				options: {
					livereload: true
				}
			},
			less: {
				files: ["src/less/**/*.less"],
				tasks: ["less"],
				options: {
					livereload: true
				}
			},
			js: {
				files: ["src/js/**/*.js"],
				tasks: ["concat", "uglify", "clean:js"],
				options: {
					livereload: true
				}
			},
			imagemin: {
				files: ["src/img/**/*.{png,jpg,gif}"],
				tasks: ["clean:img", "imagemin"],
				options: {
					livereload: true
				}
			}
		}

	});

	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-connect");
	grunt.loadNpmTasks("grunt-contrib-imagemin");
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-open");

	grunt.registerTask("default", ["clean", "connect", "less", "concat", "uglify", "imagemin", "open", "watch"]);

};
