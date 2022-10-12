<?php

namespace Inc\Api;
use Inc\Api\SettingsApi;
use Inc\Base\BaseController;
use Inc\Api\Callbacks\AdminCallbacks;
use Inc\Api\Callbacks\ManagerCallbacks;
use \WP_REST_Request;

class CompanyController extends BaseController{
    public function register(){

        add_filter( 'rest_route_for_post', [$this,'restRouteForCompany'], 10, 2 );
    }
    /**
     * @return void 
     */
    public function restRouteForCompany( $route , $post){
        if ( $post->post_type === 'book' ) {
            $route = '/wp/v2/books/' . $post->ID;
        }
    
        return $route;
    }
}
