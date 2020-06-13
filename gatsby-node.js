exports.createPages = async ({actions, graphql, reporter}) => {
  const {createPage} = actions;

  const blogPostTemplate = require.resolve('./src/templates/blogTemplate.tsx');

  const result = await graphql(`
    {
      allMdx(sort: {fields: frontmatter___date, order: DESC}) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  result.data.allMdx.edges.forEach(({node}) => {
    createPage({
      path: `/wiki/${node.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    });
  });
};
