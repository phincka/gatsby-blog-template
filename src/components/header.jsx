import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="header">
    <nav>
      <Link to="/">Strona główna</Link>
      <Link to="/secred/">Tajne przepisy</Link>
      <Link to="/contact/">Kontakt</Link>

    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
