<?php 
namespace Inc\Pages;
use Inc\Base\BaseController;
use \WP_REST_Request;

class SupportController extends BaseController{
    public $supports=[];
    public function register(){
        // var_dump('Salut les gens');
        // die;
        add_action('rest_api_init', [$this, 'getSupportByCompany']);
    }

    /**
     * Get suppourt by Company
     * @return array
     */
    public function getSupportByCompany(){
        register_rest_route('client/v1', 'supports',[
            'method'=> 'GET',
            'callback'=> function(WP_REST_Request $request){
                $id_company=$request->get_params()['id_company'];
                $query_supports = get_posts(array(
                    'numberposts'   => -1,
                    'post_type'     => 'support',
                    'meta_key'      => 'entreprise_support',
                    'meta_value'    => $id_company
                ));
                foreach($query_supports as $support){
                    setup_postdata($support);
                    $support_id     = $support->ID;
                    $element_support= get_field('support', $support_id);
                    $support_item   = (object)[
                        'ID'           =>$support_id,
                        'support_title'=>$support->post_title,
                        'modified'     =>$support->post_modified,
                        'post_date'    =>$support->post_date,
                        'element'      =>$element_support,
                        'post_slug'    =>$support->post_name
                    ];
                    array_push($this->supports, $support_item);
                    wp_reset_postdata();
                }
                return $this->supports; 
            }
        ]);
    }
}