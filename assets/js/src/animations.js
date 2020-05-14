// Initiate Lax Animations.
window.onload = function() {

	// AOS Init.
	AOS.init();

	// eslint-disable-next-line no-undef
	lax.setup( {
		breakpoints: { small: 0, large: 768 },
	} ); // init

	const updateLax = () => {
		// eslint-disable-next-line no-undef
		lax.update( window.scrollY );
		window.requestAnimationFrame( updateLax );
	};

	window.requestAnimationFrame( updateLax );

	const w = window.innerWidth;
	window.addEventListener( 'resize', function() {
		if ( w !== window.innerWidth ) {
			// eslint-disable-next-line no-undef
			lax.updateElements();
		}
	} );
};
