/**
 * File global.js.
 *
 * This file holds some smalls js scripts.
 */

// Sticky Header.

const headerSticky = document.querySelector( '.header-sticky' );

if ( headerSticky ) {

	const sticky = 300;

	window.onscroll = function() {
		if ( window.pageYOffset > sticky ) {
			headerSticky.classList.add( 'scrolled' );
		} else {
			headerSticky.classList.remove( 'scrolled' );
		}
	};
}

// Get image natural width and height and add helper classes to .ui-img-container when image is portrait or landscape.
window.onload = function() {

	const imgContainer = document.querySelectorAll( '.ui-img-container' );

	imgContainer.forEach( checkImgOrientation );
}

function checkImgOrientation( imgContainer ) {
	var img = imgContainer.querySelector( 'img' );

	if ( img ) {
		let image = new Image();
		if ( img.classList.contains( 'lazy' ) ) {
			image.src = img.getAttribute( 'data-src' );
		} else {
			image.src = img.src;
		}

		image.onload = function() {
			if ( image.naturalWidth >= image.naturalHeight ) {
				addClass( imgContainer, 'img-landscape' );
			} else {
				addClass( imgContainer, 'img-portrait' );
			}
		};
	}
}


// Some helpers functions.
function toggleClass( elem, className ) {
	elem.classList.toggle( className );
}

function addClass( elem, className ) {
	elem.classList.add( className );
}

function removeClass( elem, className ) {
	elem.classList.remove( className );
}

function toggleParentClass( elem, className ) {
	elem.parentNode.classList.toggle( className );
}

function addParentClass( elem, className ) {
	elem.parentNode.classList.add( className );
}

function removeParentClass( elem, className ) {
	elem.parentNode.classList.remove( className );
}

function getClosest( elem, selector ) {
	for ( ; elem && elem !== document; elem = elem.parentNode ) {
		if ( elem.matches( selector ) ) return elem;
	}
	return null;
}

function toggleCollapse( trigger ) {
	trigger.addEventListener( 'click', function( e ) {
		const elm = this;
		const selector = elm.getAttribute( 'data-target' );

		// First hide all collapsable containers grouped by class .collapse
		const groupClass = elm.getAttribute( 'data-group' );
		if ( groupClass ) {
			collapse( groupClass, 'hide' );
			collapse( '[data-toggle="collapse"]', 'hide' );
		}

		if ( selector ) {
			collapse( selector, 'toggle' );
			collapse( '[data-target="' + selector + '"]', 'toggle' );
		}
	});

	// map our commands to the classList methods
	const fnmap = {
		toggle: 'toggle',
		show: 'add',
		hide: 'remove'
	};

	const collapse = ( selector, cmd ) => {
		const targets = Array.from( document.querySelectorAll( selector ) );
		targets.forEach( target => {
			target.classList[fnmap[cmd]]( 'show' );
		} );
	};
}

function simulateClick( elem ) {
	// Create our event (with options)
	var evt = new MouseEvent( 'click', {
		bubbles: true,
		cancelable: true,
		view: window
	} );

	// If cancelled, don't dispatch our event
	var canceled = ! elem.dispatchEvent( evt );
}

// Get real window width
function getWindowWidth() {
	let windowWidth = 0;
	if ( typeof window.innerWidth == 'number' ) {
		windowWidth = window.innerWidth;
	} else {
		if ( document.documentElement && document.documentElement.clientWidth ) {
			windowWidth = document.documentElement.clientWidth;
		} else {
			if ( document.body && document.body.clientWidth ) {
				windowWidth = document.body.clientWidth;
			}
		}
	}
	return windowWidth;
}

// Responsive issues.
function isMobile() {
	let ww = getWindowWidth();
	if ( ww < 992 ) {
		return true;
	} else if ( ww >= 992 ) {
		return false;
	}
}
