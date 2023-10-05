/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Конспект — онлайн-курс академического письма`,
    description: `На курсе вы научитесь оптимизировать процесс создания научных статей — от чтения литературы до автоматической сборки готовой к публикации статьи`,
    siteUrl: `https://konspekt.io`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-yandex-metrica`,
      options: {
        trackingId: '95127959',
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        trackHash: true,
        webvisor: true,
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
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
