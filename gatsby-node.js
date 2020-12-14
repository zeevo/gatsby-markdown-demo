const path = require("path")

module.exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const postTemplate = path.resolve(`src/templates/article.js`)

  return graphql(`
    {
      allWpPost {
        edges {
          node {
            id
            content
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allWpPost.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: postTemplate,
        context: {
          slug: node.slug,
        },
      })
    })
  })
}
