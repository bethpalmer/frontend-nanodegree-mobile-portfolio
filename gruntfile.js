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
	          		optimizationLevel: 3,
		        },
	        	files: {
	        		'views/images-opt/pizzeria.jpg' :  'views/images/pizzeria.jpg',
	        		'img-opt/profilepic.jpg' : 'img/profilepic.jpg'
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























