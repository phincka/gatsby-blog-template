const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
    query {
        allDatoCmsRecip {
            edges {
                node {
                    title
                    slug
                    shortDescription
                    content
                    thumbnail {
                        url
                        alt
                    }
                }
            }
        }
    }
  `)
    result.data.allDatoCmsRecip.edges.forEach(({ node }) => {
        createPage({
            path: node.slug,
            component: path.resolve(`./src/pages/recipt-view.jsx`),
            context: {
                title: node.title,
                slug: node.slug,
                shortDescription: node.shortDescription,
                content: node.content,
                thumbnail: {
                    url: node.thumbnail.url,
                    alt: node.thumbnail.alt
                }
            },
        })
    })
}
/*


query Pages {
        gcms {
          solutionses {
            text
            slug
            title
          }
        }
      }


      */