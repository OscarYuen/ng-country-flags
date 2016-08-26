module.exports = function(grunt){

	grunt.initConfig({ 
		less: { 
			flag: { 
				src: 'node_modules/flag-icon-css/less/flag-icon.less', 
				dest: 'dist/css/flag-icon.css' 
			}
		}, 
		cssmin: { 
			flag: { 
				src: 'node_modules/flag-icon-css/css/flag-icon.css',
				dest: 'dist/css/flag-icon.min.css' 
			} 
		},
		concat: { 
			js: { 
				src: ['src/countryflags.module.js', 'src/countryflags.directive.js'], 
				dest: 'dist/js/ng-countryflags.js' 
			} 
		}, 
		uglify: { 
			target: { 
				files: { 
					'dist/js/ng-countryflags.min.js': ['src/countryflags.module.js', 'src/countryflags.directive.js'] 
				} 
			} 
		}, 
		copy: { 
			main: { 
				files: [{ 
					expand: true, 
					cwd: 'node_modules/flag-icon-css/flags/',
					src: ['**/*.svg'], 
					dest: 'dist/flags' 
				}]
			} 
		} 
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
		
	grunt.registerTask('dev',['less', 'concat','copy']);
	grunt.registerTask('default',['less', 'cssmin','uglify','copy']);
};