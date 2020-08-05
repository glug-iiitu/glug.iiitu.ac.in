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

  // Create blog posts pages.
  const posts = result.data.allMdx.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: `/wiki/${post.node.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        slug: post.node.frontmatter.slug,
        previous,
        next,
      },
    });
  });

  // Create blog post list pages
  const postsPerPage = 3;
  const numPages = Math.ceil(posts.length / postsPerPage);

  Array.from({length: numPages}).forEach((_, i) => {
    createPage({
      path: i === 0 ? 'wiki/' : `/wiki/${i + 1}`,
      component: require.resolve('./src/templates/blog-list.tsx'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  // result.data.allMdx.edges.forEach(({ node }) => {
  //   createPage({
  //     path: `/wiki/${node.frontmatter.slug}`,
  //     component: blogPostTemplate,
  //     context: {
  //       // additional data can be passed via context
  //       slug: node.frontmatter.slug,
  //     },
  //   });
  // });
};
