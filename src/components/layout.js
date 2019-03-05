import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import Header from "./header"
import Footer from "./footer"

import "normalize.css"
import "./layout.css"

const Layout = ({ children }) => (
  <>
    <Helmet
      link={[
        { rel: "stylesheet", href: "https://use.typekit.net/yxv2omu.css" },
      ]}
    />

    <Header />

    <main>{children}</main>

    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
