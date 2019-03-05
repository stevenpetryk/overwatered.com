import React from "react"

import "./footer.css"

export default () => (
  <footer role="main">
    <p>
      All content on this site is licensed under the Creative Commons
      Attribution-NonCommercial (CC-BY-NC) license.
    </p>
    <p>© {new Date().getFullYear()}</p>
  </footer>
)
