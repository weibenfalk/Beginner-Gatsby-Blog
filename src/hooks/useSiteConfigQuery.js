import { useStaticQuery, graphql } from 'gatsby';

export const useSiteConfigQuery = () => {
  const data = useStaticQuery(graphql`
    query ConfigQuery {
      markdownRemark(frontmatter: { mdType: { eq: "config" } }) {
        frontmatter {
          logo {
            publicURL
          }
          menu {
            id
            name
            link
          }
        }
      }
    }
  `);
  return data.markdownRemark.frontmatter;
};
