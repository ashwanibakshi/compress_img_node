const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant'); 
const imageminMozjpeg  = require('imagemin-mozjpeg');

(async () => {
	const files = await imagemin(['upload/*.{jpg,png,jpeg,mp4}'], {
		destination: 'build/images',
		plugins: [   
			imageminMozjpeg({quality:50}),
			// imageminJpegtran({quality: [0.6, 0.8]}),
			imageminPngquant({
				quality: [0.6, 0.8]
			})
		]
	});

	console.log(files);
	//=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
})();