<?php

$timber = new \Timber\Timber();

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
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Headers: Content-Type, x-xsrf-token");

    if ( 'OPTIONS' == $_SERVER['REQUEST_METHOD'] ) {
        status_header(200);
        exit();
    }
}

function randomQuote() {
  $i = rand(0,3);

  $quotes = [
    'The energy, passion, and enthusiasm that I witnessed, has now been rekindled in me.',
    'A year’s worth of inspiration in one delicious, social nugget.',
    'A meeting of creative minds and local professionals changing the meaning of design.',
    'Hopscotch Design Festival has a gritty, design-focused, innovative edge that other conferences just don’t have.'
  ];

  return $quotes[$i];
}

function randomImage() {
  $i = rand(1, 7);

  return 'http://hopdesign.wpengine.com/wp-content/uploads/2017/04/Footer_hero_image_' . $i . '-1000x667.jpg';
}

function etixLink() {
  return 'https://www.etix.com/ticket/p/3263928/hopscotch-design-festival-2017--raleigh-hopscotch-design-festival';
}

function responsiveImage($selector, $image) {
  return $selector . ' { background-image: url({{ TimberImage(' . $image . ').src("400") }}); }';

}

?>
