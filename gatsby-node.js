const path = require("path")
const { graphql } = require("gatsby")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allMdx {
            edges {
              node {
                id
                frontmatter {
                  slug
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.error(result.errors)
          reject(result.errors)
        }

        result.data.allMdx.edges.forEach(({ node }) => {
          createPage({
            path: `/guides/plants/${node.frontmatter.slug}`,
            component: path.resolve(`./src/components/plant.js`),
            context: { id: node.id },
          })
        })
      })
    )
  })
}
