import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"

function Article(props) {
  const article = props.data.wpPost
  console.log(props)
  return (
    <Layout>
      <h1>{article.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
    </Layout>
  )
}

export default Article

export const query = graphql`
  query MyQuery($slug: String!) {
    wpPost(slug: { eq: $slug }) {
      title
      content
    }
  }
`
