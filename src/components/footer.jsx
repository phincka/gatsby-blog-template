import React from "react"

const Footer = ({ siteAuthor }) => {
    return(
        <footer className="footer">
            <p className="footer--text">Created by <a className="footer--link" href="http://hincka.pl/">{ siteAuthor }</a>  © {new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer