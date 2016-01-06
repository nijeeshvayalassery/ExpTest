module.exports=function(grunt){
	grunt.initConfig({
		concat:{
			dist: {
		      src: ['script/*.js'],
		      dest: 'dist/script.js',
		    },
		},
		watch:{
			scripts:{
				files:["script/*.js"],
				tasks:["concat"]
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-concat')
	grunt.loadNpmTasks('grunt-contrib-watch')
	grunt.registerTask('default',["concat"]);
}

