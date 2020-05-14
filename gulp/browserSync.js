/* eslint-env es6 */
'use strict';

/**
 * External dependencies
 */
import browserSync from 'browser-sync';

/**
 * Internal dependencies
 */
import { getThemeConfig } from './utils';

/**
 * Conditionally set up BrowserSync.
 * Only run BrowserSync if config.browserSync.live = true.
 */

// Create a BrowserSync instance:
export const server = browserSync.create();

// Initialize the BrowserSync server conditionally:
export function serve( done ) {
	const config = getThemeConfig();

	// bail early if not serving via BrowserSync
	if ( ! config.dev.browserSync.live ) {
		done();
	}

	const serverConfig = {
		open: true,
		server: config.dev.browserSync.server,
		port: config.dev.browserSync.bypassPort,
		liveReload: true,
		https: false,
	};

	// Start the BrowserSync server
	server.init( serverConfig );

	done();
}

// Reload the live site:
export function reload( done ) {
	const config = getThemeConfig();

	if ( config.dev.browserSync.live ) {
		if ( server.paused ) {
			server.resume();
		}
		server.reload();
	} else {
		server.pause();
	}

	done();
}
