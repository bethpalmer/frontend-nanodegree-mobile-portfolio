module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		cssmin: {
		  target: {
		    files: {
		      'css/style.min.css': ['css/style.css']
		    }
		  }
		},
		imagemin : {
			static : {
	        	options: {
	          		optimizationLevel: 7,
		        },
	        	files: {
	        		'views/images-opt/pizzeria.jpg' :  'views/images/pizzeria.jpg',
	        		'views/images-opt/pizzeria-sm.jpg' :  'views/images/pizzeria-sm.jpg',
	        		'img-opt/profilepic.jpg' : 'img/profilepic.jpg',
	        		'img-opt/2048site.jpg' : 'img/2048site.jpg',
	        		'img-opt/mob-web-dev.jpg' : 'img/mob-web-dev.jpg',
	        		'img-opt/web-op.jpg' : 'img/web-op.jpg'
	       		}
	      	}
	    }
	    // htmlmin : {

	    // }
	});
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	// grunt.loadNpmTasks('grunt-contrib-htmlmin');

	grunt.registerTask('default', ['cssmin', 'imagemin']);
};























