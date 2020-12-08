import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = props => {
  console.log(props)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Articles</h1>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      {props.data.allMarkdownRemark.edges.map(({ node }) => (
        <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }
`

export default IndexPage
