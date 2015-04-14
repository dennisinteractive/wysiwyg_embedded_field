Description
===========
Provides a plugin to Place the content of "See related" field into specific location.

Installation
============
Copy the module directory in to your Drupal:
/sites/all/modules directory as usual.

Configuration
=============
Visit /admin/config/content/wysiwyg
or via menus: Configuration > Content Authoring > Wysiwyg profiles

Edit the configuration for each Input format, i.e. Filtered HTML
/admin/config/content/wysiwyg/profile/filtered_html/edit

Assumption
=============
The field name for Related Nodes differentiate from site to site.
This  module will set field name variable as "field_see_related" as it's more generic.
See: hook_install().

Tick the option: See related field
