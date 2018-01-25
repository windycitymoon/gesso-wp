<?php
/* Template Name: Divi Page Builder Template */

$context = Timber::get_context();
$post = new TimberPost();
$context['post'] = $post;
// Define generic templates.
$templates = array(
	'page-divi.twig'
);

// Render twig template.
Timber::render( $templates, $context );
