const crypto = require('crypto');

module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  url: env("PUBLIC_ADMIN_URL", "/straps"),
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: crypto.randomBytes(16).toString('base64')
    },
  },
});
