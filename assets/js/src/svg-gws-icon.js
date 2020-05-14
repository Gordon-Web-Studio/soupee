/**
 * Set an SVG icon for the GWS Block category.
 */

const el = wp.element.createElement;
const SVG = wp.components.SVG;
const circle = el( 'circle', {
	cx: 12,
	cy: 12,
	r: 12,
	fill: '#22222e',
} );
const path = el( 'path', {
	d:
		'M14.27,9.06H10.06a2.94,2.94,0,0,0,0,5.88h1.6v2.61h-1.6a5.55,5.55,0,0,1,0-11.1h4.21Z',
	transform: 'translate(0, 0)',
	fill: '#38d6c7',
} );
const polygon = el( 'polygon', {
	points:
		'9.72 10.7 9.72 13.3 14.27 13.31 14.27 17.55 16.88 17.55 16.88 10.7 9.72 10.7',
	fill: '#38d6c7',
} );
const rect1 = el( 'rect', {
	x: 14.27,
	y: 3.84,
	width: 2.61,
	height: 2.61,
	fill: '#fff',
} );
const rect2 = el( 'rect', {
	x: 11.66,
	y: 17.55,
	width: 2.61,
	height: 2.61,
	fill: '#38d6c7',
} );
const rect3 = el( 'rect', {
	x: 16.88,
	y: 6.45,
	width: 2.61,
	height: 2.61,
	fill: '#38d6c7',
} );
const line = el( 'line', {
	x1: 14.27,
	y1: 9.06,
	x2: 14.27,
	y2: 6.45,
	fill: '#38d6c7',
} );
const gwsSvgIcon = el(
	SVG,
	{ width: 24, height: 24, viewBox: '0 0 24 24' },
	circle,
	path,
	polygon,
	rect1,
	rect2,
	rect3,
	line
);
wp.blocks.updateCategory( 'gws-blocks', { icon: gwsSvgIcon } );
wp.blocks.updateCategory( 'gws-page-blocks', { icon: gwsSvgIcon } );
