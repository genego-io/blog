import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: ASC }
      filter: { frontmatter: { series: { ne: null } } }
    ) {
      group(field: frontmatter___series) {
        fieldValue
        edges {
          node {
            frontmatter {
              title
              part
            }
            fields {
              slug
            }
          }
        }
      }
    }
  }
`

const Series = ({ data, location }) => {
  const siteTitle = "Series"

  return (
    <Layout location={location} title={siteTitle}>
      {data.allMarkdownRemark.group.map((series) => (
        <div key={series.fieldValue}>
          <h2 style={{ fontSize: "1.2em" }}>{series.fieldValue}</h2>
          <ul style={{ marginLeft: "20px" }}>
            {series.edges.map(({ node }) => (
              <li key={node.fields.slug}>
                <Link to={node.fields.slug}>
                  Part {node.frontmatter.part}: {node.frontmatter.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Layout>
  )
}

export default Series
