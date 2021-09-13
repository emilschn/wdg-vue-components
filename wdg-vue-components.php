<?php
/**
 * Plugin Name: WE DO GOOD Vuejs components
 * Author:      WEDOGOOD
 * Author URI:  https://www.wedogood.co
 */

/**
 * Exemple d'utilisation :
 *
 * Au moment de l'inscription des scripts et styles à charger
 * $WDG_Vue_Components = WDG_Vue_Components::instance();
 * $WDG_Vue_Components->enqueue_component( WDG_Vue_Components::$component_common );
 *
 * Dans le HTML
 * <div id="app"></div>
 */

// Exit if accessed directly
if ( !defined( 'ABSPATH' ) ) {
	exit;
}

final class WDG_Vue_Components {
	// Dossiers des fichiers compilés
	private static $local_dist_folder = '/dist//';
	// Liste des composants
	public static $component_common = 'common';
	public static $component_signin_signup = 'signin-signup';
	public static $component_spreadsheets = 'spreadsheets';
	public static $component_launch_project = 'launch-project';
	public static $component_prospect_setup = 'prospect-setup';
	public static $component_account_signin = 'account-signin';
	public static $component_account_authentication = 'account-authentication';

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

	/**
	 * Charge les fichiers liés à un composant spécifique
	 */
	public function enqueue_component($component_name) {
		$this->enqueue_styles( $component_name );
		$this->enqueue_scripts( $component_name );
	}

	/**
	 * Ajoute les fichiers liés aux styles (css)
	 */
	private function enqueue_styles($component_name) {
		$this->enqueue_files( $component_name, 'css' );
	}

	/**
	 * Ajoute les fichiers liés aux scripts (js)
	 */
	private function enqueue_scripts($component_name) {
		$this->enqueue_files( $component_name, 'js', 'manifest' );
		$this->enqueue_files( $component_name, 'js', 'vendor' );
		$this->enqueue_files( $component_name, 'js', 'chunk-vendors' );
		$this->enqueue_files( $component_name, 'js', 'app' );
	}

	/**
	 * Recherche les fichiers nécessaires et les ajoute au chargement
	 */
	private function enqueue_files($component_name, $file_type, $engine_file = '*') {
		if ( $engine_file != '*' ) {
			$engine_file .= '*';
		}

		$component_folder = $this->get_component_folder( $component_name );
		$pattern_filenames = $component_folder. '/' . $file_type . '/' . $engine_file . $file_type;

		$array_filepaths = glob( $pattern_filenames );
		foreach ( $array_filepaths as $filepath ) {
			$pathinfo_file = pathinfo( $filepath );
			$basename_file = $pathinfo_file[ 'basename' ];
			$filename_file = $pathinfo_file[ 'filename' ];
			$fileurl = plugins_url( $component_name . self::$local_dist_folder . '/' . $file_type . '/' . $basename_file, __FILE__ );

			if ( $file_type == 'js' ) {
				wp_enqueue_script( $filename_file, $fileurl, array(), FALSE, TRUE );
			} elseif ( $file_type == 'css' ) {
				wp_enqueue_style( $filename_file, $fileurl, array(), FALSE, 'all' );
			}
		}
	}

	/**
	 * Retourne le chemin du dossier local avec les fichiers recherchés
	 */
	private function get_component_folder($component_name) {
		return dirname( __FILE__ ). '/' . $component_name . self::$local_dist_folder;
	}
}