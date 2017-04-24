<?php


add_action( 'init', 'create_post_types' ); // custom post types
add_action( 'init', 'handle_preflight' );

add_theme_support( 'post-thumbnails' );
add_image_size( '400', 400, 400, false );
add_image_size( '800', 800, 800, false );
add_image_size( '1000', 1000, 1000, false );
add_image_size( '1200', 1200, 1200, false );
add_image_size( '1600', 1600, 1600, false );


function create_post_types() {

  register_post_type( 'lineup',
    array(
      'labels' => array(
        'name' => __( 'Lineup' ),
        'singular_name' => __( 'Speaker' )
      ),
      'menu_icon' => 'dashicons-megaphone',
      'public' => true,
      'has_archive' => true,
      'show_in_rest' => true
    )
  );

  register_post_type( 'schedule',
    array(
      'labels' => array(
        'name' => __( 'Schedule' ),
        'singular_name' => __( 'Event' )
      ),
      'menu_icon' => 'dashicons-calendar-alt',
      'public' => true,
      'has_archive' => true,
      'show_in_rest' => true
    )
  );

  register_post_type( 'sponsors',
    array(
      'labels' => array(
        'name' => __( 'Sponsors' ),
        'singular_name' => __( 'Sponsor' )
      ),
      'menu_icon' => 'dashicons-money',
      'public' => true,
      'has_archive' => true,
      'show_in_rest' => true
    )
  );

}


function handle_preflight() {
    header("Access-Control-Allow-Origin: " . get_http_origin());
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Credentials: true");

    if ( 'OPTIONS' == $_SERVER['REQUEST_METHOD'] ) {
        status_header(200);
        exit();
    }
}
?>
