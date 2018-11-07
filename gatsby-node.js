const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'posts'
    })
    createNodeField({
      node,
      name: `slug`,
      value: `posts${slug}`
    })
  }
  
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve('src/template/post.js');
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `{
          allMarkdownRemark {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  path,
                  title
                }
              }
            }
          }
        }`
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create blog post pages.
        // result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        //   createPage({
        //     path: node.frontmatter.path,
        //     component: postTemplate,
        //     context: {
        //       test: node.frontmatter.path,
        //     },
        //   })
        // })
        result.data.allMarkdownRemark.edges.forEach(({node}) => {
            createPage({
              path: `${node.fields.slug}`, // required
              component: postTemplate,
              context: {
                  slug: node.fields.slug,
                  title: node.frontmatter.title
              },
            })
        })

        return
      })
    )
  })
}