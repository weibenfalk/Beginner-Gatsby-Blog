import { useStaticQuery, graphql } from 'gatsby';

export const useSiteMetaDataQuery = () => {
  const data = useStaticQuery(graphql`
    query MetaDataQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);
  return data.site.siteMetadata;
};
