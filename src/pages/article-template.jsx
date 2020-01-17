import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import parse from 'html-react-parser';

const ArticleTemplate = (result) => {
    console.log(result)
    return (
        <Layout>
            <article className="article">
                <h1 className="article--title">{result.pageContext.title}</h1>
                <div className="article__content">
                    { parse(result.pageContext.content) } 
                </div>
                <Link className="article--link" to="/"> Powrót </Link>
            </article>
        </Layout>
    )
}


export default ArticleTemplate