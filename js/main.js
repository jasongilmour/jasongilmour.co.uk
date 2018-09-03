"use strict";

var responsiveImage = function responsiveImage(selector) {
	// Get image and container
	var element = document.querySelectorAll(selector);

	Array.prototype.forEach.call(element, function(el, i){

		// image = current element
		var image = element[i];
		var desiredWidth = image.parentNode.offsetWidth;

		// Parse the data into an object
		var sizes = JSON.parse(image.getAttribute('data-sizes'));

		// Parse sizes into an array
		var sizesArr = [];
		for(var x in sizes){
			sizesArr.push(sizes[x]);
		}

		// How many sizes are there?
		var noOfSizes = sizesArr.length;

		// Itterate through the available sizes
		var i = 0;
		var finished = false;
		while(i < noOfSizes && !finished) {
			// If there's a big enough image...
			var currentWidth = sizesArr[i].width;
			if (currentWidth > desiredWidth) {
				var suffix = sizesArr[i].suffix;
				finished = true;
			}
			// If there isn't
			if (!suffix) {
				// Get the last (biggest) and make that the suffix
				var last = noOfSizes - 1;
				var suffix = sizesArr[last].suffix;
			}
			i ++;
		}

		// Set the new source of the image
		if ( image.hasAttribute('data-initialSrc') ) {
			var source = image.getAttribute('data-initialSrc');
		} else {
			var source = image.getAttribute('src');
		}

		// console.table(suffix);
		var n = source.lastIndexOf('.');
		var newSource = source.substring(0,n) + "-" + suffix + source.substring(n);

		// var imageSource = location.origin = location.protocol + "//" + location.host + newSource;

		// if (imageExists(imageSource)) {
		image.setAttribute('src', newSource);
		// }
	});
};

responsiveImage('img[data-sizes]');
window.onresize = function(){ responsiveImage('img[data-sizes]') };

// New responsive image handler
const responsivize = function responsivize() {
	// Get all images with the responsivize attribute
	let images = document.querySelectorAll('[responsivize]');
	// Record the pixel ratio
	let multiplier = window.devicePixelRatio;
	for (const image of images) {
		let imageSlug = image.getAttribute('slug');
		// For each image, work out the width of the parent element, multiple by pixel ratio and round up to the nearest 100px
		let x = Math.ceil( (image.parentElement.offsetWidth * multiplier) / 100) * 100;
		// Swap out the image for the best size
		image.src = 'https://duhg9m9sh0lp8.cloudfront.net/fit-in/' + x + 'x0' + imageSlug;
		// Remove loading class
		image.onload = function imageLoadHandler() {
			image.classList.remove('loading');
		};
		// Handle error by falling back to the slug
		image.addEventListener('error', function imageErroHandler() {
			image.src = imageSlug;
		});

	}
}

responsivize();
