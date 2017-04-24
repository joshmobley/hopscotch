<?php

add_action( 'init', 'create_post_types' ); // custom post types
add_action( 'init', 'handle_preflight' );
add_action( 'init', 'custom_image_sizes' );

function custom_image_sizes() {
  add_image_size( 'small', 400, 400 );
  add_image_size( 'medium', 800, 800 );
  add_image_size( 'large', 1024, 1024 );
  add_image_size( 'xlarge', 1600, 1600 );
}


function create_post_types() {
  register_post_type( 'lineup',
    array(
      'labels' => array(
        'name' => __( 'Lineup' ),
        'singular_name' => __( 'Speaker' )
      ),
      'public' => true,
      'has_archive' => true,
    )
  );

  register_post_type( 'schedule',
    array(
      'labels' => array(
        'name' => __( 'Schedule' ),
        'singular_name' => __( 'Event' )
      ),
      'public' => true,
      'has_archive' => true,
    )
  );

function handle_preflight() {
    header("Access-Control-Allow-Origin: " . get_http_origin());
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Credentials: true");

    if ( 'OPTIONS' == $_SERVER['REQUEST_METHOD'] ) {
        status_header(200);
        exit();
    }
}

}
?>
