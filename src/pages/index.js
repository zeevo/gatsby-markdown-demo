import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = props => {
  console.log(props)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Articles</h1>
      {props.data.allWpPost.edges.map(({ node }) => (
        <>
          <Link to={node.slug}>{node.title}</Link>
          <br />
        </>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allWpPost {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`

export default IndexPage
