module.exports = function(grunt){
	grunt.initConfig({
		compass:{
			dist:{
				options:{
					relativeAssets:true,
					// httpPath:'http://onepopcorn.com/scrollwars',
					// httpImagesPath:'http://onepopcorn.com/scrollwars/img',
					// httpFontsPath:'http://onepopcorn.com/scrollwars/fonts',
					sassDir:'sass',
					cssDir: 'css',
					imagesDir:'img',
					fontDir:'fonts',
					environment:'production',
					outputStyle:'compressed'
				}
			},
			dev:{
				options:{
					relativeAssets:true,
					sassDir:'sass',
					cssDir:'css',
					imagesDir:'img',
					fontDir:'fonts',
					environment:'development',
					outputStyle:'nested'
				}
			}
		},
		clean:{
			build:{
				src:['css/*']
			}
		},
		watch:{
			files:["sass/*"],
			tasks:["default"]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.registerTask('default',["compass:dev"]);
	grunt.registerTask('build',['clean:build','compass:dist']);
};