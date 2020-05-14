jQuery( function( $ ) {

	/**
	 * initializeYTPlayer
	 *
	 * Adds YTPlayer script initializer to the block HTML.
	 *
	 * @param {Object} $block The block jQuery element.
	 * @param {Object} attributes The block attributes (only available when editing).
	 * @return {void}
	 */
	const initializeYTPlayer = function( $block ) {
		$block.find( '.player' ).YTPlayer();

		if ( $.isFunction( jQuery.fn.YTPlayer ) ) {
			$( '.player' ).on( 'YTPReady', function() {
				const id = $( this ).attr( 'id' );
				$( '[data-target="#' + id + '"]' ).find( '.video-trigger-loading' ).hide();
				$( '[data-target="#' + id + '"]' ).find( '.video-trigger-play' ).show();
			} );
		} else {
			$( '.video-trigger-loading' ).hide();
			$( '.video-trigger-play' ).show();
		}

		$( '.video-trigger' ).on( 'click', function() {
			const $this = $( this );
			const videoTarget = $this.data( 'target' );
			if ( videoTarget ) {
				stopPlayers();
				$( videoTarget ).YTPPlay();
				$( videoTarget ).closest( '.video-foreground' ).addClass( 'playing' );
			}
		} );

		$( '.modal-video-close' ).on( 'click', function() {
			$( this ).closest( '.video-foreground' ).removeClass( 'playing' );
			stopPlayers();
		} );

		function stopPlayers() {
			$( '.player' ).each( function() {
				const $this = $( this );
				if ( 1 === $this.YTPGetPlayer().getPlayerState() ) {
					$this.YTPStop();
					$( this ).closest( '.video-foreground' ).removeClass( 'playing' );
				}
			} );
		}
	};

	// Initialize each block on page load (front end).
	$( document ).ready( function() {
		$( '.video-foreground' ).each( function() {
			initializeYTPlayer( $( this ) );
		} );
	} );

	// Initialize dynamic block preview (editor).
	if ( window.acf ) {
		window.acf.addAction( 'render_block_preview/type=hero', initializeYTPlayer );
		window.acf.addAction( 'render_block_preview/type=slideshow', initializeYTPlayer );
	}
} );
