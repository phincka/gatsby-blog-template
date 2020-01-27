import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
//import { useStaticQuery, graphql } from "gatsby"
import '../css/main.scss'
import Articles from "../components/articles"

const IndexPage = () => {

    return (
        <Layout>
            
            <SEO title="Home" />
            <section className="posts_list">
                <Articles />
            </section>
        </Layout>
    )
}

export default IndexPage
