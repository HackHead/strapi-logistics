// ./config/plugins.js`
'use strict';

module.exports = {
  i18n: {
    enabled: true,
    defaultLocale: "ru", // Set your default locale
    locales: ["en", "ru", "uk"], // Add your supported locales
  },
  menus: {
    config: {
      layouts: {
        menuItem: { // This is the menu item edit panel.
          link: [ // This is the "link" tab in the menu item edit panel.
            {
              input: {
                label: 'Title EN',
                name: 'title_en',
                type: 'text',
                placeholder: 'Английский перевод',
                required: true,
              },
              grid: {
                col: 12,
              },
            },
            {
              input: {
                label: 'Title UA',
                name: 'title_uk',
                type: 'text',
                placeholder: 'Украинский перевод',
                required: true,
              },
              grid: {
                col: 12,
              },
            },
          ],
        },
      },
    },
  },
};