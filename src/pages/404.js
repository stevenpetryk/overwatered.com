import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/plant.css"

import image404 from "../images/404.jpg"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="plant-guide">
      <div className="plant-summary">
        <div className="details">
          <h1>There's nothing here.</h1>
          <p className="taxonomic-name">Errorus notfoundia</p>
        </div>

        <img src={image404} />
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
