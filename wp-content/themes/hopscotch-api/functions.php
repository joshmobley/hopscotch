<?php

add_filter( 'allowed_http_origin', '__return_true' ); // cors headers
add_action( 'init', 'create_post_types' ); // custom post types


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

}
?>
