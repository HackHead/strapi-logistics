const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  i18n: {
    locales: ["ru", "en", "uk"],
    localeDetection: false,
    defaultLocale: 'ru',
  },
};

module.exports = nextConfig;  
