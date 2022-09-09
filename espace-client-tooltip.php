<?php
/**
 * @package  EspaceClient
 */
/*
Plugin Name: Espace Client Tooltip
Plugin URI: http://alecaddd.com/plugin
Description: This is my plugin for Client.
Version: 1.0.0
Author: Safidi "DEVELOPPER at TOOLTIP-MEDIA"
Author URI: https://www.linkedin.com/in/safidi-rabenandrasana-8a11a9189/
License: GPLv2 or later
Text Domain: espace-client
*/


// If this file is called firectly, abort!!!
defined( 'ABSPATH' ) or die( 'Hey, what are you doing here? You silly human!' );

// Require once the Composer Autoload
if ( file_exists( dirname( __FILE__ ) . '/vendor/autoload.php' ) ) {
	require_once dirname( __FILE__ ) . '/vendor/autoload.php';
}

/**
 * The code that runs during plugin activation
 */
function activate_alecaddd_plugin() {
	Inc\Base\Activate::activate();
}
register_activation_hook( __FILE__, 'activate_alecaddd_plugin' );

/**
 * The code that runs during plugin deactivation
 */
function deactivate_alecaddd_plugin() {
	Inc\Base\Deactivate::deactivate();
}
register_deactivation_hook( __FILE__, 'deactivate_alecaddd_plugin' );

/**
 * Initialize all the core classes of the plugin
 */
if ( class_exists( 'Inc\\Init' ) ) {
	Inc\Init::register_services();
}