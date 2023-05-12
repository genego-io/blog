import * as React from "react"
import {Link, graphql} from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({
                              data: {previous, next, site, markdownRemark: post},
                              location,
                          }) => {
    const siteTitle = site.siteMetadata?.title || `Title`

    return (
        <Layout location={location} title={siteTitle}>
            <article
                className="blog-post"
                itemScope
                itemType="http://schema.org/Article"
            >
                <hr/>
                <header>
                    <h1 style={{fontSize: "1.2em"}} itemProp="headline">{post.frontmatter.title}</h1>
                    <p style={{fontSize: "1em", marginTop: "0.3em"}}>
                        {post.frontmatter.date} <br/>
                        {
                            post.frontmatter.series && post.frontmatter.part &&
                            <span style={{fontSize: "0.95em"}}><strong>Series:</strong> <a
                                href={`/series/`}>{post.frontmatter.series}</a> ~ <strong>Part:</strong> {post.frontmatter.part}
      </span>
                        }
                        <hr/>
                    </p>
                </header>
                <section
                    dangerouslySetInnerHTML={{__html: post.html}}
                    itemProp="articleBody"
                />
                <hr/>
                <footer>
                    <Bio/>
                </footer>
            </article>
            <nav className="blog-post-nav">
                <ul
                    style={{
                        display: `flex`,
                        flexWrap: `wrap`,
                        justifyContent: `space-between`,
                        listStyle: `none`,
                        padding: 0,
                    }}
                >
                    <li>
                        {previous && (
                            <Link to={previous.fields.slug} rel="prev">
                                ← {previous.frontmatter.title}
                            </Link>
                        )}
                    </li>
                    <li>
                        {next && (
                            <Link to={next.fields.slug} rel="next">
                                {next.frontmatter.title} →
                            </Link>
                        )}
                    </li>
                </ul>
            </nav>
        </Layout>
    )
}

export const Head = ({data: {markdownRemark: post}}) => {
    return (
        <Seo
            title={post.frontmatter.title}
            description={post.frontmatter.description || post.excerpt}
        />
    )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        series
        part
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`