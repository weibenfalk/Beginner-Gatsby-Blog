import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'components/Layout';
import Hero from 'components/Hero';
import BlogPostCard from 'components/BlogPostCard';
import PageNavigation from 'components/PageNavigation';
import SEO from 'components/SEO';

const IndexPage = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <main>
        <PageNavigation
          currentPage={pageContext.currentPage}
          numPages={pageContext.numPages}
        />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <BlogPostCard
              key={node.fields.slug}
              slug={node.fields.slug}
              title={title}
              date={node.frontmatter.date}
              readingTime={node.fields.readingTime.text}
              excerpt={node.excerpt}
              image={node.frontmatter.image.childImageSharp.fluid}
            />
          );
        })}
      </main>
    </Layout>
  );
};

export default IndexPage;

// Below: Set both maxWidth and maxHeight to crop image
export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: { frontmatter: { type: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            readingTime {
              text
            }
          }
          frontmatter {
            title
            date
            image {
              childImageSharp {
                fluid(maxWidth: 200, maxHeight: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`;
