const path = require("path")

module.exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const postTemplate = path.resolve(`src/templates/article.js`)

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: postTemplate,
        context: {
          slug: node.frontmatter.slug,
        },
      })
    })
  })
}
