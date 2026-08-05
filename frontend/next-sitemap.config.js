/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.aadhyaearthmovers.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ["/admin/*", "/api/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
  transformRobotsTxt: async (config) => {
    return `User-agent: *\nAllow: /\n\nSitemap: ${config.siteUrl}/sitemap.xml`;
  },
};
