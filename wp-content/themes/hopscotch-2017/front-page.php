<?php

  $context = Timber::get_context();
  $context['post'] = new TimberPost();

  $context['content_blocks'] = get_field('content');





  Timber::render('templates/front-page.twig', $context);

?>
