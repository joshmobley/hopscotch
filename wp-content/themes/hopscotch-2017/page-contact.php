<?php

  $context = Timber::get_context();
  $context['post'] = Timber::get_posts();
  Timber::render('templates/page-contact.twig', $context);

?>
