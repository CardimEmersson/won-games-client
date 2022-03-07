/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa');
const isProd = process.env.NODE_ENV === 'production';

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  }
});

module.exports = {
  images: {
    domains: ['source.unsplash.com']
  }
};
