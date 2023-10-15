exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  const openGraphImage = createOpenGraphImage(createPage, {
    path: '/src/assets/og.png',
    component: path.resolve(`src/templates/index.og-image.js`),
    size: {
      width: 400,
      height: 50,
    },
    waitCondition: 'networkidle0',
    context: {
      description: 'Konspekt OpenGraph Image',
    },
  });
};
