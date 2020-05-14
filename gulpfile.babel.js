/* eslint-env es6 */
/* eslint no-undef: "off" */
'use strict';

// External dependencies
import { parallel, series } from 'gulp';

// Internal dependencies
import images from './gulp/images';
import html from './gulp/html';
import { serve } from './gulp/browserSync';
import scripts from './gulp/scripts';
import styles from './gulp/styles';
import watch from './gulp/watch';
// import prodPrep from './gulp/prodPrep';
// import prodStringReplace from './gulp/prodStringReplace';
// import prodCompress from './gulp/prodCompress';
import { cleanCSS, cleanJS } from './gulp/clean';

/**
 * Map out the sequence of events on first load and make it the default task
 */
export const firstRun = series(
    cleanCSS, cleanJS, parallel(html, images, styles, scripts), serve, watch
);

export default firstRun;

/**
 * Build theme for development without BrowserSync or watching
 */
export const buildDev = parallel(
    html, images, styles, scripts
);

/**
 * Export all imported functions as tasks
 */
export { images, html, scripts, styles, watch, cleanCSS, cleanJS };