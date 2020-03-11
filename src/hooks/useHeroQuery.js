import { useStaticQuery, graphql } from 'gatsby';

export const useHeroQuery = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      markdownRemark(frontmatter: { mdType: { eq: "hero" } }) {
        frontmatter {
          heroImage {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          heroImageText
          heroImageBtnText
          heroImageBtnLink
        }
      }
    }
  `);
  return data.markdownRemark.frontmatter;
};
