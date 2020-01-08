import { Link } from "gatsby"
//import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="header">
    <Link className="header--title" to="/">{siteTitle}</Link>
    <nav className="header__nav">
      <Link className="header__nav--element" to="/">Strona główna</Link>
      <Link className="header__nav--element" to="/secred/">Tajne przepisy</Link>
      <Link className="header__nav--element" to="/contact/">Kontakt</Link>
    </nav>
  </header>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
