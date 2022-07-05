/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || 'https://qosqomposta.com/',
  generateRobotsTxt: true, // (optional)
};

module.exports = config;
