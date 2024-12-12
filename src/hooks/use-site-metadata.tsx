// Thanks to @link https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-seo-component
import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          image
        }
      }
    }
  `)

  return data.site.siteMetadata
}