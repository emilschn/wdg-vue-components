<?php
/**
 * Plugin Name: WE DO GOOD Vuejs components
 * Author:      WEDOGOOD
 * Author URI:  https://www.wedogood.co
 */

// Exit if accessed directly
if ( !defined( 'ABSPATH' ) ) exit;

final class WDG_Vue_Components {

	private static $instance;
	public static function instance() {
		if ( !isset( self::$instance ) ) {
			self::$instance = new WDG_Vue_Components();
		}

		return self::$instance;
	}

	public function __construct() {
		wp_enqueue_script( 'wpvue_vuejs', 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' );
	}

}

WDG_Vue_Components::instance();