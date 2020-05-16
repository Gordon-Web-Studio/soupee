/* eslint-env es6 */
'use strict';

/**
 * External dependencies
 */
import pump from 'pump';
import { src, dest } from 'gulp';
import htmlPartial from 'gulp-html-partial';

/**
 * Internal dependencies
 */
import { paths, isProd } from './constants';

/**
 * HTML via HTML Partials.
 * @param {function} done function to call when async processes finish
 * @return {Stream} single stream
 */
export default function html( done ) {
	return pump( [
		src( paths.html.src )
			.pipe( htmlPartial( {
				basePath: paths.html.partials,
			} ) ),
		dest( paths.html.dest ),
	], done );
}
