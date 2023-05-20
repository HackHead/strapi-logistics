// ./src/extensions/menus/strapi-server.js`
'use strict';

module.exports = plugin => {
  // Get current `MenuItem` attributes.
  const defaultAttrs = plugin.contentTypes[ 'menu-item' ].schema.attributes;

  // Define custom attributes for `MenuItem` the same way they would be defined
  // on any other schema.
  const customAttrs = {
    title_en: {
      type: 'string',
      required: true,
    },
    title_uk: {
      type: 'string',
      required: true,
    },
  };
  // Extend the `MenuItem` content type with custom attributes.
  plugin.contentTypes[ 'menu-item' ].schema.attributes = {
    ...customAttrs,
    ...defaultAttrs,
  };

  return plugin;
};