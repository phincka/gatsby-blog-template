import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
//import { useStaticQuery, graphql } from "gatsby"


const ReciptPage = (result) => {


    return (
        <Layout>
            {console.log(result)}
            <h1>{result.pageContext.title}</h1>
            <img src={result.pageContext.thumbnail.url} alt={result.pageContext.thumbnail.alt}/>
            <Link to="/"> Back </Link>

        </Layout>
    )
}


export default ReciptPage