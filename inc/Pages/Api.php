<?php

namespace Inc\Pages;

use DateTime;
use Inc\Api\SettingsApi;
use Inc\Base\BaseController;
use Inc\Api\Callbacks\AdminCallbacks;
use Inc\Api\Callbacks\ManagerCallbacks;
use \WP_REST_Request;

/**
 * 
 */
class Api extends BaseController
{
    public $settings;
    public $callbacks;
    public $argsPostTypes = array();
    public $pages = array();


    public function register()
    {
        $this->settings = new SettingsApi();
        $this->callbacks = new AdminCallbacks();
        $this->setPages();

        add_filter('jwt_auth_token_before_dispatch', [$this, 'jwtAuthFunction'], 10, 2);
        add_action('init', [$this, 'AddArgPostType']);
        add_action('rest_api_init', [$this, 'customApiAddProject']);
        add_action('rest_api_init', [$this, 'customApiGetProject']);
        $this->settings->addPages($this->pages)->register();
    }
    public function addPostType()
    {
        foreach ($this->adminPostTypes as $adminPostType) {
            register_post_type($adminPostType['name_postType'], $adminPostType['args']);
        }
    }

    public function AddArgPostType()
    {
        $labels = array(
            'name' => 'Supports',
            'singular_name' => 'Support'
        );

        $args = array(
            'labels' => $labels,
            'public' => true,
            'has_archive' => false,
            'menu_icon' => 'dashicons-download',
            'exclude_from_search' => true,
            'publicly_queryable' => false,
            'hierarchical' => false,
            'show_in_rest' => true,
            'supports'            => array('title', 'editor', 'excerpt', 'author', 'custom-fields',),
            'rewrite' => array('slug' => 'supports'),
        );
        register_post_type('support', $args);
    }
    public function setPages()
    {
        $this->pages = array(
            array(
                'page_title' => 'Api Tooltip',
                'menu_title' => 'API Tooltip',
                'capability' => 'manage_options',
                'menu_slug' => 'api_tootip',
                'callback' =>  [$this->callbacks, 'apiAdmin'],
                'icon_url' => 'dashicons-rest-api',
                'position' => 5
            ),
        );
    }
    /**
     * @return void
     * Get more info for User
     */
    public function jwtAuthFunction($data, $user)
    {
        $data['user_role'] = $user->roles;
        $data['user_id'] = $user->ID;
        $data['avatar'] = get_avatar_url($user->ID);
        return $data;
    }
    /**
     * @return void
     * custom api add Projects
     */
    public function customApiAddProject()
    {
        register_rest_route(
            'project/v1',
            'projectadd',
            //'login/',
            [
                'methods'   => 'POST',
                'callback'  => function (WP_REST_Request $request) {
                    global $wpdb;
                    $date = new DateTime;
                    $id_user = 1;   
                    $wpdb->insert('wp_projects', array(
                        "name"=>$request['name'],
                        "descriptions"=>$request['descriptions'],
                        "created_at"=>$date->format(DateTime::ATOM),
                        "id_user"=>$id_user
                        ),array( '%s', '%s', '%s', '%s'));
                }
            ]
        );
    }
    /**
     * @return void
     * custom api get Projects
     */
    public function customApiGetProject()
    {
        register_rest_route(
            'project/v1',
            'projects',
            [
                'methods'   => 'GET',
                'callback'  => function (WP_REST_Request $request) {
                    global $wpdb;
                    $response = $wpdb->get_results("SELECT * FROM ".$wpdb->prefix."projects");
                    return $response;
                }
            ]
        );
    }
    /**
     * @return void
     * custom api set Projects
     */
    public function customApiSetProject()
    {
    }
}
