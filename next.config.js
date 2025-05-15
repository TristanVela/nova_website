const withNextIntl = require('next-intl/plugin')('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const config = {
  // Configuración adicional de Next.js si es necesaria
};

module.exports = withNextIntl(config);
