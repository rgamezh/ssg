const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')
const fs = require("fs")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 2000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              category
              subcategory
              serie
              description
              type
              tags
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const allMarkdown = result.data.allMarkdownRemark.edges
    const products = []
    const subcategories = []
    const store = []
    let data = {}
    allMarkdown.forEach(edge => {
      const id = edge.node.id
      const slug = _.deburr(edge.node.fields.slug)
      
      if( edge.node.frontmatter.type === "subcategory" ) {
        subcategories.push(edge.node)
      }

      if(edge.node.frontmatter.templateKey != null) {
        createPage({
          path: slug,
          title: edge.node.frontmatter.title,
          tags: edge.node.frontmatter.tags,
          component: path.resolve(
            `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
          ),
          // additional data can be passed via context
          context: {
            id,
            slug,
          },
        })

      }
    })

    subcategories.forEach(node => {
      
    })
    /*
    const productPerPage = 12
    const numPages  = Math.ceil( products.length / productPerPage )
    for ( let currentPage=1; currentPage <= numPages; currentPage++ ) {
      const pathSuffix = ( currentPage>1? currentPage : '' )
    }
    
    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach(edge => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach(tag => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag,
        },
      })
    })*/
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

function writeJSON(data, store, type) {
  store[data.frontmatter.title] = data
  fs.writeFileSync(`public/${type}.json`, JSON.stringify(store))
}
