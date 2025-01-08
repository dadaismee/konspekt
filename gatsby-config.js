/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Курс «Система письма»`,
    description: `Практический курс продвинутых техник и инструментов академического письма. Оптимизируете чтение и научитесь писать статьи быстрее и глубже — от чтения литературы до автоматической сборки черновика`,
    keywords:
      'академическое письмо, курс, курс академического письма, написать статью, шевченко, валерий шевченко, написать текст, zettelkasten, цеттелькастен, зеттелькастен, продуктивность, научная статья, Pandoc, Zotero, Obsidian, Markdown, нон-фикшн',
    siteUrl: `https://konspekt.io`,
  },
  plugins: [
     {
      resolve: "gatsby-plugin-carrotquest",
      options: {
        carrotquestId: "63783-5e7ebf08607ba92f5f125df1d2",
        mobileDelay: 2000, // Optional. Задержка для mobile devices.
        desktopDelay: 500, // Optional. Задержка для other devices.
      },
    },
    {
      resolve: `gatsby-plugin-amplitude-analytics`,
      options: {
        apiKey: "85f4e64dc470c0cf2d82b5e53b906d40",
        head: true,
        respectDNT: true,
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        eventTypes: {
          outboundLinkClick: 'OUTBOUND_LINK_CLICK',
          pageView: 'PAGE_VIEW',
        },
        amplitudeConfig: {
          saveEvents: true,
          includeUtm: true,
          includeReferrer: true
        },
        environments: ["production"],
      },
    },
    {
      resolve: `gatsby-plugin-yandex-metrika`,
      options: {
        trackingId: process.env.YANDEX_METRICA,
        webvisor: true,
        trackHash: true,
        afterBody: true,
        defer: false,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/assets/logo-with-bg.png"
      }
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    'gatsby-plugin-anchor-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: './src/assets/',
      },
      __key: 'assets',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pageData',
        path: './src/pageData/',
      },
      __key: 'pageData',
    },
  ],
};
