import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Articles from "../components/articles"

import '../css/main.scss'


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
