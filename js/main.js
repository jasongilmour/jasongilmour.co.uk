"use strict";

// Stole from http://stackoverflow.com/questions/18837735/check-if-image-exists-on-server-using-javascript
// function imageExists(image_url){
// 	var http = new XMLHttpRequest();
// 	http.open('HEAD', image_url, false);
// 	http.send();
// 	return http.status != 404;
// }

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