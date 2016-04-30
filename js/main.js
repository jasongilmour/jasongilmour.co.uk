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

// Ajax!
function getPage(url, from, to) {
	var cached=sessionStorage[url];
	if(!from){from="body";} // default to grabbing body tag
	if(to && to.split){to=document.querySelector(to);} // a string TO turns into an element
	if(!to){to=document.querySelector(from);} // default re-using the source elm as the target elm
	if(cached){return to.innerHTML=cached;} // cache responses for instant re-use re-use

	var XHRt = new XMLHttpRequest; // new ajax
	XHRt.responseType='document';  // ajax2 context and onload() event
	XHRt.onload= function() { sessionStorage[url]=to.innerHTML= XHRt.response.querySelector(from).innerHTML;};
	XHRt.open("GET", url, true);
	XHRt.send();
	return XHRt;
}

var htmlString = '<div id="screen"></div>'
document.querySelector('main').insertAdjacentHTML('afterend', htmlString);
var screen = document.getElementById('screen');

function ajaxPageLoad(e) {
	e.preventDefault();
	// Animate the link by adding the loading class
	// Add the slug class name to colour the loading screen
	var className = this.classList[0];
	if (screen.classList) {
		screen.classList.add(className);
	}
	else {
		screen.className += ' ' + className;
	}
	// Add the loading class to begin animation
	var className = 'loading';
	if (screen.classList) {
		screen.classList.add(className);
	}
	else {
		screen.className += ' ' + className;
	}
	// Load the page
	var href = this.href;
	setTimeout( function() {
		var newPage = href;
		var newSelector = '#main';
		getPage(newPage, newSelector);
		history.pushState(null, null, href);
		responsiveImage('img[data-sizes]');
		scroll(0,0);
		// Remove loading class
		var thinggy = 'loading';
		if (screen.classList) {
			screen.classList.remove(thinggy);
		}
		else {
			screen.thinggy = screen.thinggy.replace(new RegExp('(^|\\b)' + thinggy.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		}
	}, 500 );
}

var selector = document.querySelectorAll('a.ajax');
for (var i = 0; i < selector.length; i++) {
	selector[i].addEventListener('click', ajaxPageLoad, false);
}

// Handle browser back button clicks (load the homepage properly)
window.onpopstate = function () {
	if (window.location.pathname === '/') {
		getPage(window.location.pathname, '#main')
	}
};

