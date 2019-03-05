import React from "react"

import "./plant.css"

import Layout from "./layout"
import SEO from "./seo"
import MDXRenderer from "gatsby-mdx/mdx-renderer"

export default ({ data: { mdx } }) => (
  <>
    <Layout>
      <SEO
        title={`${mdx.frontmatter.display_name} care guide`}
        description={`Learn how to care for a ${mdx.frontmatter.display_name.toLowerCase()}.`}
        keywords={["rubber tree", "ficus elastica", "houseplant"]}
      />

      <div className="plant-guide">
        <div className="plant-summary">
          <div className="details">
            <h1>{mdx.frontmatter.display_name}</h1>
            <p className="taxonomic-name">{mdx.frontmatter.taxonomic_name}</p>
          </div>

          <img src={require(`../content/plants/${mdx.frontmatter.slug}.jpg`)} />
        </div>

        <MDXRenderer>{mdx.code.body}</MDXRenderer>
      </div>
    </Layout>
  </>
)

export const pageQuery = graphql`
  query PlantQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        slug
        display_name
        taxonomic_name
        watering_needs
        lighting_needs
        care_level
      }
      code {
        body
      }
    }
  }
`
