import { Link } from "gatsby"
import React from "react"
//import PropTypes from "prop-types"

const Header = () => (
  <header className="header">
    <nav className="header__nav">
      <Link className="header__nav--element" to="/">blog</Link>
      <Link className="header__nav--element" to="/secred/">portfolio</Link>
      <Link className="header__nav--element" to="/contact/">Kontakt</Link>
    </nav>
  </header>
)

export default Header
