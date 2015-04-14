(function($) {

  Drupal.wysiwyg.plugins['see_related'] = {
    /**
     * Return whether the passed node belongs to this plugin (note that "node" in this context is a JQuery node, not a Drupal node).
     *
     * We identify code managed by this FOO plugin by giving it the HTML class
     * 'wysiwyg_plugin_see-related'.
     */
    isNode: function(node) {
      return ($(node).is('img.wysiwyg_plugin_see-related'));
    },
    /**
     * Invoke is called when the toolbar button is clicked.
     */
    invoke: function(data, settings, instanceId) {
      if (data.format == 'html') {
        var content = this._getPlaceholder(settings);
      }
      else {
        var content = '<!--wysiwyg_see-related_plugin-->';
      }
      if (typeof content != 'undefined') {
        Drupal.wysiwyg.instances[instanceId].insert(content);
      }
    },
    /**
     * Replace all <!--wysiwyg_see-related_plugin--> tags with the icon.
     */
    attach: function(content, settings, instanceId) {
      content = content.replace(/<!--wysiwyg_see-related_plugin-->/g, this._getPlaceholder(settings));
      return content;
    },
    /**
     * Replace the icons with <!--wysiwyg_see-related_plugin--> tags in content upon detaching editor.
     */
    detach: function(content, settings, instanceId) {
      var $content = $('<div>' + content + '</div>');
      $.each($('img.wysiwyg_plugin_see-related', $content), function(i, elem) {
        elem.parentNode.insertBefore(document.createComment('wysiwyg_see-related_plugin'), elem);
        elem.parentNode.removeChild(elem);
      });
      return $content.html();
    },
    /**
     * Helper function to return a HTML placeholder.
     *
     * Here we provide an image to visually represent the hidden HTML in the Wysiwyg editor.
     */
    _getPlaceholder: function(settings) {
      return '<img src="' + settings.path + '/images/see_related.content.png" width="50px" alt="&lt;--wysiwyg_see-related_plugin--&gt;" title="&lt;--wysiwyg_see-related_plugin--&gt;" class="wysiwyg_plugin_see-related drupal-content" />';
    }
  };

})(jQuery);
