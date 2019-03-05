import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Search from "./search"

import logo from "../images/logo.svg"

import "./header.css"

const Header = () => (
  <header role="main">
    <h1>
      <Link to="/">
        <img src={logo} alt="" />
        Overwatered
      </Link>
    </h1>

    <Search />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
