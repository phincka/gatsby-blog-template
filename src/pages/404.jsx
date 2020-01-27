import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"


const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="NotFoundPage">
      <h1 className="NotFoundPage--title">Nic nie znaleziono... :c </h1>
    </div>
  </Layout>
)

export default NotFoundPage
