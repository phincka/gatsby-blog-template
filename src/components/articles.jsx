import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const Articles = () => {
    const data = useStaticQuery(graphql`
        query ListingRecipts {
            allDatoCmsArticle {
                edges {
                    node {
                        id
                        title
                        slug
                        shortDescription
                        meta {
                            publishedAt(formatString: "DD/MM/YYYY")
                        }
                    }
                }
            }
        }

    `)

    const articlesMap = data.allDatoCmsArticle.edges.map(({ node }) => {
        return (
            <article key={node.id} className="posts_list__single">
                <h5 className="posts_list__single--date">{node.meta.publishedAt}</h5>
                <h2 className="posts_list__single--title">{node.title}</h2>
                <p className="posts_list__single--shortDescription">{node.shortDescription}</p>
                <Link className="posts_list__single--button" to={node.slug}> Więcej...</Link>
            </article>
        ) 
    })

    return articlesMap
}


export default Articles
