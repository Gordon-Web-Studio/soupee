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
import { paths } from './constants';

/**
 * HTML via HTML Partials.
 * @param {function} done function to call when async processes finish
 * @return {Stream} single stream
 */
export default function docs( done ) {
	return pump( [
		src( paths.docs.src )
			.pipe( htmlPartial( {
				basePath: paths.docs.partials,
			} ) ),
		dest( paths.docs.dest ),
	], done );
}
