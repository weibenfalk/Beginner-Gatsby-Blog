/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

// First create the slug for the posts and pages. This can also be a field from Frontmatter for simplicity
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `content`,
    });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

// Then create the indiviual Posts, posts archive pages and pages
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const content = await graphql(`
    {
      posts: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "post" } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }

      pages: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "page" } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  // Do nothing more if error
  if (content.error) return;

  const allPosts = content.data.posts.edges;
  const allPages = content.data.pages.edges;

  // Create the individual post pages
  allPosts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/Post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    });
  });

  // Create the archive pages
  const postsPerPage = 5;
  const numPages = Math.ceil(allPosts.length / postsPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/${i + 1}`,
      component: path.resolve('./src/templates/Home.js'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  // Create the individual pages
  allPages.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/Page.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    });
  });
};

// For absolute imports
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};
