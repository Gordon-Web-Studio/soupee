( function( $ ) {

	/**
	 * initMap
	 *
	 * Renders a Google Map onto the selected jQuery element
	 *
	 * @date    22/10/19
	 * @since   5.8.6
	 *
	 * @param   jQuery $el The jQuery element.
	 * @return  object The map instance.
	 */
	function initMap( $el ) {

		// Find marker elements within map.
		var $markers = $el.find('.marker');

		// Create gerenic map + styles in night mode.
		var mapArgs = {
			zoom        : $el.data('zoom') || 16,
			mapTypeId   : google.maps.MapTypeId.ROADMAP,
			styles: [
				{
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#1d2c4d"
					}
				  ]
				},
				{
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#8ec3b9"
					}
				  ]
				},
				{
				  "elementType": "labels.text.stroke",
				  "stylers": [
					{
					  "color": "#1a3646"
					}
				  ]
				},
				{
				  "featureType": "administrative.country",
				  "elementType": "geometry.stroke",
				  "stylers": [
					{
					  "color": "#4b6878"
					}
				  ]
				},
				{
				  "featureType": "administrative.land_parcel",
				  "elementType": "labels",
				  "stylers": [
					{
					  "visibility": "off"
					}
				  ]
				},
				{
				  "featureType": "administrative.land_parcel",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#64779e"
					}
				  ]
				},
				{
				  "featureType": "administrative.province",
				  "elementType": "geometry.stroke",
				  "stylers": [
					{
					  "color": "#4b6878"
					}
				  ]
				},
				{
				  "featureType": "landscape.man_made",
				  "elementType": "geometry.stroke",
				  "stylers": [
					{
					  "color": "#334e87"
					}
				  ]
				},
				{
				  "featureType": "landscape.natural",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#023e58"
					}
				  ]
				},
				{
				  "featureType": "poi",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#283d6a"
					}
				  ]
				},
				{
				  "featureType": "poi",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#6f9ba5"
					}
				  ]
				},
				{
				  "featureType": "poi",
				  "elementType": "labels.text.stroke",
				  "stylers": [
					{
					  "color": "#1d2c4d"
					}
				  ]
				},
				{
				  "featureType": "poi.business",
				  "stylers": [
					{
					  "visibility": "off"
					}
				  ]
				},
				{
				  "featureType": "poi.park",
				  "elementType": "geometry.fill",
				  "stylers": [
					{
					  "color": "#023e58"
					}
				  ]
				},
				{
				  "featureType": "poi.park",
				  "elementType": "labels.text",
				  "stylers": [
					{
					  "visibility": "off"
					}
				  ]
				},
				{
				  "featureType": "poi.park",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#3C7680"
					}
				  ]
				},
				{
				  "featureType": "road",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#304a7d"
					}
				  ]
				},
				{
				  "featureType": "road",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#98a5be"
					}
				  ]
				},
				{
				  "featureType": "road",
				  "elementType": "labels.text.stroke",
				  "stylers": [
					{
					  "color": "#1d2c4d"
					}
				  ]
				},
				{
				  "featureType": "road.arterial",
				  "elementType": "labels",
				  "stylers": [
					{
					  "visibility": "off"
					}
				  ]
				},
				{
				  "featureType": "road.highway",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#2c6675"
					}
				  ]
				},
				{
				  "featureType": "road.highway",
				  "elementType": "geometry.stroke",
				  "stylers": [
					{
					  "color": "#255763"
					}
				  ]
				},
				{
				  "featureType": "road.highway",
				  "elementType": "labels",
				  "stylers": [
					{
					  "visibility": "off"
					}
				  ]
				},
				{
				  "featureType": "road.highway",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#b0d5ce"
					}
				  ]
				},
				{
				  "featureType": "road.highway",
				  "elementType": "labels.text.stroke",
				  "stylers": [
					{
					  "color": "#023e58"
					}
				  ]
				},
				{
				  "featureType": "road.local",
				  "stylers": [
					{
					  "visibility": "off"
					}
				  ]
				},
				{
				  "featureType": "road.local",
				  "elementType": "labels",
				  "stylers": [
					{
					  "visibility": "off"
					}
				  ]
				},
				{
				  "featureType": "transit",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#98a5be"
					}
				  ]
				},
				{
				  "featureType": "transit",
				  "elementType": "labels.text.stroke",
				  "stylers": [
					{
					  "color": "#1d2c4d"
					}
				  ]
				},
				{
				  "featureType": "transit.line",
				  "elementType": "geometry.fill",
				  "stylers": [
					{
					  "color": "#283d6a"
					}
				  ]
				},
				{
				  "featureType": "transit.station",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#3a4762"
					}
				  ]
				},
				{
				  "featureType": "water",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#0e1626"
					}
				  ]
				},
				{
				  "featureType": "water",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#4e6d70"
					}
				  ]
				}
			  ]
		};
		var map = new google.maps.Map( $el[0], mapArgs );

		// Add markers.
		map.markers = [];
		$markers.each(function(){
			initMarker( $(this), map );
		});

		// Center map based on markers.
		centerMap( map );

		// Return map instance.
		return map;
	}

	/**
	 * initMarker
	 *
	 * Creates a marker for the given jQuery element and map.
	 *
	 * @date    22/10/19
	 * @since   5.8.6
	 *
	 * @param   jQuery $el The jQuery element.
	 * @param   object The map instance.
	 * @return  object The marker instance.
	 */
	function initMarker( $marker, map ) {

		// Get position from marker.
		var lat = $marker.data('lat');
		var lng = $marker.data('lng');
		var latLng = {
			lat: parseFloat( lat ),
			lng: parseFloat( lng )
		};

		// Create marker instance.
		var marker = new google.maps.Marker({
			position : latLng,
			map: map
		});

		// Append to reference for later use.
		map.markers.push( marker );

		// If marker contains HTML, add it to an infoWindow.
		if( $marker.html() ){

			// Create info window.
			var infowindow = new google.maps.InfoWindow({
				content: $marker.html()
			});

			// Show info window when marker is clicked.
			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open( map, marker );
			});
		}
	}

	/**
	 * centerMap
	 *
	 * Centers the map showing all markers in view.
	 *
	 * @date    22/10/19
	 * @since   5.8.6
	 *
	 * @param   object The map instance.
	 * @return  void
	 */
	function centerMap( map ) {

		// Create map boundaries from all map markers.
		var bounds = new google.maps.LatLngBounds();
		map.markers.forEach(function( marker ){
			bounds.extend({
				lat: marker.position.lat(),
				lng: marker.position.lng()
			});
		});

		// Case: Single marker.
		if( map.markers.length == 1 ){
			map.setCenter( bounds.getCenter() );

		// Case: Multiple markers.
		} else{
			map.fitBounds( bounds );
		}
	}

	// Render maps on page load.
	$( document ).ready( function() {
		$( '.acf-map' ).each( function() {
			var map = initMap( $( this ) );
		} );
	} );

} )( jQuery );
