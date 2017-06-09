<?php

  $context = Timber::get_context();
  $args = array(
    'post_type' => 'lineup',
    'posts_per_page' => -1,
    'orderby' => 'title',
    'order' => 'ASC'
  );
  $context['posts'] = Timber::get_posts($args);

  Timber::render('templates/archive-lineup.twig', $context);

?>
