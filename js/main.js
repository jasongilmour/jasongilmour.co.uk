"use strict";

function responsiveImage(selector) {
	// Get image and container
	var element = document.querySelectorAll(selector);

	Array.prototype.forEach.call(element, function(el, i){

		// image = current element
		var image = element[i];
		var desiredWidth = image.offsetWidth;

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
		var source = image.getAttribute('src');
		// console.table(suffix);
		var n = source.lastIndexOf('.');
		var newSource = source.substring(0,n) + "-" + suffix + source.substring(n);

		var imageSource = location.origin = location.protocol + "//" + location.host + newSource;

		if (new XMLHttpRequest(imageSource).status != 404) {
			image.setAttribute('src', newSource);
			console.log(imageSource);
			console.log(new XMLHttpRequest(imageSource).status);
		} else {
			console.log('2');
		}
	});
};

responsiveImage('img[data-sizes]');




