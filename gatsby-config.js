/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Курс «Академическое письмо на стероидах» | Школа «Конспект»`,
    description: `Онлайн-лаборатория продвинутого академического письма. Научитесь писать статьи быстрее и глубже — от чтения литературы до автоматической сборки черновика`,
    keywords:
      'академическое письмо, метанавыки, написать статью, написать текст, zettelkasten, цеттелькастен, зеттелькастен, продуктивность, научная статья, Pandoc, Zotero, Obsidian, Markdown, нон-фикшн',
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
