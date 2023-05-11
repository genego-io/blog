import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const ArchivesPage = ({ data, location }) => {
  const siteTitle = "Archives"
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <Link to={post.fields.slug} itemProp="url">
                {title}
              </Link>
              <small>{post.frontmatter.date}</small>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default ArchivesPage

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
        }
      }
    }
  }
`
