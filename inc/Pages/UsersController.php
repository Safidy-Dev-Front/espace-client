<?php

namespace Inc\Pages;

use DateTime;
use Inc\Api\SettingsApi;
use Inc\Base\BaseController;
use \WP_REST_Request;
use \WP_User;
// use \stdClass;

/**
 * 
 */
class UsersController extends BaseController
{   
    public $idAtt;
    public $users = [];
    public function register()
    {
        add_action('rest_api_init', [$this, 'apiGetUsers']);
    }
    /**
     * @return Array
     * Get users function
     */
    public function apiGetUsers()
    {
        register_rest_route(
            'api/v1',
            'users',
            //'login/',
            [
                'methods'   => 'GET',
                'callback'  => [$this, 'getAllsUsers']
            ]
        );
    }
    /**
     * @return Void
     * Get id attachment
     */
    public function idAttachment($user_id)
    {
        global $wpdb;
        $meta_user_attachment = $wpdb->get_results("SELECT * FROM " 
        .$wpdb->prefix."usermeta WHERE user_id={$user_id} 
        AND meta_key='_wpupa_attachment_id'");
        $this->idAtt = $meta_user_attachment[0]->meta_value;
        return $this->idAtt;
    }
    /**
     * @return Object
     * get attachment
     */
    public function getAttachment($user_id)
    {
        $ID_post = $this->idAttachment($user_id);
        global $wpdb;

        $attachment = $wpdb->get_results("SELECT * FROM " 
        .$wpdb->prefix."posts WHERE ID={$ID_post}");
        $url_att = $attachment[0]->guid;

        return $url_att;
    }
    /**
     * @return Array
     * get alls users
     */
    public function getAllsUsers(WP_REST_Request $request)
    {

        global $wpdb;
        $usersArray = $wpdb->get_results("SELECT * FROM " . $wpdb->prefix . "users");
         foreach($usersArray as $user){
            $id_user = $user->ID;
            $url_avatar = $this->getAttachment($id_user);
            $user_array = [
                'ID'=>$user->ID,
                'user_login'=>$user->user_login,
                'user_email'=>$user->user_email,
                'user_registered'=>$user->user_registered,
                'display_name'=>$user->display_name,
                'image'=> $url_avatar
            ];
            array_push($this->users, $user_array);
        }
        return $this->users;
    }
}