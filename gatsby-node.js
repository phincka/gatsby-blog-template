const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
    query {
        allDatoCmsArticle(sort: {fields: meta___createdAt}) {
            edges {
                node {
                    title
                    slug
                    shortDescription
                    content
                    meta {
                        publishedAt(formatString: "DD/MM/YYYY")
                    }
                }
            }
        }
    }
  `)
    result.data.allDatoCmsArticle.edges.forEach(({ node }) => {
        createPage({
            path: node.slug,
            component: path.resolve(`./src/pages/article-template.jsx`),
            context: {
                title: node.title,
                slug: node.slug,
                shortDescription: node.shortDescription,
                content: node.content,
            },
        })
    })
}


