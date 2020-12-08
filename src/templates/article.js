import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"

function Article(props) {
  const article = props.data.allMarkdownRemark.edges[0].node
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: article.html }}></div>
    </Layout>
  )
}

export default Article

export const query = graphql`
  query MyQuery($slug: String!) {
    allMarkdownRemark(filter: { frontmatter: { slug: { eq: $slug } } }) {
      edges {
        node {
          frontmatter {
            slug
            title
          }
          html
        }
      }
    }
  }
`
