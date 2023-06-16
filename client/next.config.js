const nextConfig = {
  publicRuntimeConfig: {
    NEXT_STRAPI_API_URL: process.env.NEXT_STRAPI_API_URL,
    NEXT_HOST: process.env.NEXT_HOST,
  },
  reactStrictMode: true,
  swcMinify: false,
  i18n: {
    locales: ["ru", "en", "uk"],
    localeDetection: false,
    defaultLocale: 'ru',
  },
};

module.exports = nextConfig;  
