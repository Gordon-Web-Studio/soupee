/* eslint-env es6 */
'use strict';

/**
 * External dependencies
 */
export const gulpPlugins = require( 'gulp-load-plugins' )();
import path from 'path';

/**
 * Internal dependencies
 */
import {
	getThemeConfig,
	configValueDefined,
} from './utils';

// Root path is where npm run commands happen
export const rootPath = process.cwd();

export const gulpPath = `${ rootPath }/gulp`;

export const gulpTestPath = `${ rootPath }/gulp/tests`;

// Dev or production
export const isProd = ( process.env.NODE_ENV === 'production' );

// get the config
const config = getThemeConfig();

// directory for the production theme
export const prodThemePath = path.normalize( `${ rootPath }/${ config.theme.slug }` );

// directory for assets (CSS, JS, images)
export const assetsDir = `${ rootPath }/assets`;

// directory for assets (CSS, JS, images) in production
export const prodAssetsDir = `${ prodThemePath }/assets`;

// Theme config name fields and their defaults
export const nameFieldDefaults = {
	author: 'The Soupee Contributors',
	slug: 'soupee',
	name: 'Soupee',
	underscoreCase: 'soupee',
	constant: 'SOUPEE',
	camelCase: 'Soupee',
	camelCaseVar: 'soupee',
};

// Project paths
const paths = {
	assetsDir,
	browserSync: {
		dir: `${ rootPath }/BrowserSync`,
		// cert: `${ rootPath }/BrowserSync/wp-rig-browser-sync-cert.crt`,
		// caCert: `${ rootPath }/BrowserSync/wp-rig-browser-sync-root-cert.crt`,
		// key: `${ rootPath }/BrowserSync/wp-rig-browser-sync-key.key`,
	},
	config: {
		themeConfig: `${ rootPath }/config/themeConfig.js`,
	},
	html: {
		src: `${ assetsDir }/html/src/*.html`,
		docs: `${ assetsDir }/html/src/docs/`,
		partials: `${ assetsDir }/html/src/partials/`,
		dest: `${ rootPath }/`,
	},
	docs: {
		src: `${ assetsDir }/html/src/docs/*.html`,
		partials: `${ assetsDir }/html/src/docs/partials/`,
		dest: `${ rootPath }/docs/`,
	},
	styles: {
		src: [
			`${ assetsDir }/css/src/**/*.css`,
			// Ignore partial files.
			`!${ assetsDir }/css/src/**/_*.css`,
			// Ignore editor source css.
			`!${ assetsDir }/css/src/editor/**/*.css`,
		],
		srcDir: `${ assetsDir }/css/src`,
		dest: `${ assetsDir }/css`,
	},
	scripts: {
		src: [
			`${ assetsDir }/js/src/**/*.js`,
			// Ignore partial files.
			`!${ assetsDir }/js/src/**/_*.js`,
		],
		srcDir: `${ assetsDir }/js/src`,
		dest: `${ assetsDir }/js`,
	},
	images: {
		src: `${ assetsDir }/images/src/**/*.{jpg,JPG,png,svg,gif,GIF}`,
		dest: `${ assetsDir }/images/`,
	},
	export: {
		src: [],
		stringReplaceSrc: [
			// `${ rootPath }/style.css`,
			// `${ rootPath }/languages/*.po`,
		],
	},
};

// Add rootPath to filesToCopy and additionalFilesToCopy
const additionalFilesToCopy = configValueDefined( 'export.additionalFilesToCopy' ) ? config.export.additionalFilesToCopy : [];
const filesToCopy = configValueDefined( 'export.filesToCopy' ) ? config.export.filesToCopy : [];
for ( const filePath of filesToCopy.concat( additionalFilesToCopy ) ) {
	// Add the files to export src
	paths.export.src.push( `${ rootPath }/${ filePath }` );
}

// Override paths for production
if ( isProd ) {
	paths.html.dest = `${ prodThemePath }/`;
	paths.styles.dest = `${ prodAssetsDir }/css/`;
	paths.scripts.dest = `${ prodAssetsDir }/js/`;
	paths.images.dest = `${ prodAssetsDir }/images/`;
}

export { paths };
