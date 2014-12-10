

module.exports = function(grunt) {


	// Project configuration.
	grunt.initConfig({
		
		//path to the theme folder, relative to this Gruntfile
		DIR_BASE : '../themes/themeName',

		pkg: grunt.file.readJSON('package.json'),


		/*
		 *	Uglify configuration
		 */
		uglify: {

			all:{

				files: [
					{
						expand: true,     					// Enable dynamic expansion.
						cwd: '<%= DIR_BASE %>/js/',    	// Src matches are relative to this path.
						src: ['*.js'], 						// Actual pattern(s) to match.
						dest: '<%= DIR_BASE %>/js/',   	// Destination path prefix.
						ext: '.min.js',   					// Dest filepaths will have this extension.
						extDot: 'first'   					// Extensions in filenames begin after the first dot
					},
				],
			}

		}, //end uglify


		/*
		 * Less configuration
		 */

		less:{
		 	development : {

				files: {
					"<%= DIR_BASE %>/css/main.css" : "<%= DIR_BASE %>/css/main.less" //result / source
				}

		 	},

		 	release : {
		 		options: {
					compress: true,
					yuicompress: true
		 		},

				files: {
					"<%= DIR_BASE %>/css/main.css" : "<%= DIR_BASE %>/css/main.less" //result / source
				}

		 	}
		 	
		},


		/*
		 * Optimize images
		 */

		imageoptim: {
			optimize: {
				src: ['<%= DIR_BASE %>/img']
			}
		},


		/*
		 * Watch if files change
		 */
		watch: {
			css: {
				files: '<%= DIR_BASE %>/css/**/*.less',
				tasks: ['less'],
				options: {
					livereload: true,
				},
			},

			js: {
				files: '<%= DIR_BASE %>/js/*.js',
				options: {
					livereload: true,
				},
			},

			pages: {
				files: ['<%= DIR_BASE %>/*.php', '<%= DIR_BASE %>/elements/*.php' ],
				options: {
					livereload: true,
				},
			}
		}


	});


	// Load the plugins
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-imageoptim');


	// Set grunt tasks
	grunt.registerTask('default', ['uglify', 'less:development']);
	grunt.registerTask('release', ['uglify', 'less:release', 'imageoptim']);


};
