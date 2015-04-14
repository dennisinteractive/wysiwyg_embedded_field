<?php

/**
 * @file
 * Implement Wysiwyg module hooks.
 */

/**
 * Implements hook_wysiwyg_PLUGIN-NAME_plugin().
 */
function wysiwyg_see_related_wysiwyg_see_related_plugin() {
  $plugins['see_related'] = array(
    'title' => t('See related field'),
    'icon title' => t('Place the content of "See related" field into specific location.'),
    'icon file' => 'see_related.icon.png',
    'settings' => array(),
  );

  return $plugins;
}
