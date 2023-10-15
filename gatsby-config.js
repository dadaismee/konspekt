/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Конспект — онлайн-курс академического письма`,
    description: `Научитесь писать статьи быстрее и глубже — от чтения литературы до автоматической сборки драфта`,
    keywords:
      'академическое письмо, метанавыки, написать статью, написать текст, Pandoc, Zotero, Obsidian, Markdown, нон-фикшн',
    siteUrl: `https://konspekt.io`,
  },
  plugins: [
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
