<?php

  $context = Timber::get_context();
  $context['posts'] = Timber::get_posts();

  $args = array(
    'post_type' => 'post'
  );

  $context['more_posts'] = Timber::get_posts($args);

  Timber::render('templates/single.twig', $context);

?>
