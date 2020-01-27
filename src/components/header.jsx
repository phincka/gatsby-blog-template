import { Link } from "gatsby"
import React from "react"


const Header = () => (
  <header className="header">
    <nav className="header__nav">
      <Link className="header__nav--element" to="/">blog</Link>
      <Link className="header__nav--element" to="/">portfolio</Link>
    </nav>
  </header>
)


export default Header
