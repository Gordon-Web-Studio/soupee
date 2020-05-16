/* eslint-env es6 */
'use strict';

/**
 * External dependencies
 */
import { watch as gulpWatch, series } from 'gulp';

/**
 * Internal dependencies
 */
import { paths } from './constants';
import { backslashToForwardSlash } from './utils';
import { reload } from './browserSync';
import html from './html';
import images from './images';
import scripts from './scripts';
import styles from './styles';

/**
 * Watch everything
 */
export default function watch() {
	/**
	 * gulp watch uses chokidar, which doesn't play well with backslashes
	 * in file paths, so they are replaced with forward slashes, which are
	 * valid for Windows paths in a NodeJS context.
	 */
	gulpWatch( backslashToForwardSlash( paths.html.src ), series( html, reload ) );

	gulpWatch( backslashToForwardSlash( paths.html.partials ), series( html, reload ) );

	gulpWatch( backslashToForwardSlash( paths.styles.src[ 0 ] ), styles );

	gulpWatch( backslashToForwardSlash( paths.scripts.src[ 0 ] ), series( scripts, reload ) );

	gulpWatch( backslashToForwardSlash( paths.images.src ), series( images, reload ) );
}
