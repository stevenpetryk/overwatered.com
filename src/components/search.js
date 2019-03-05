import React, { useState, useMemo } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Fuse from "fuse.js"

import "./search.css"

export default () => {
  const pages = useAllPages()
  const [query, setQuery] = useState("")
  const fuseResults = useFuse(pages, query)

  return (
    <div className="search">
      <input
        type="search"
        onChange={event => setQuery(event.target.value)}
        value={query}
        placeholder="Find a plant or guide"
      />

      {fuseResults.length ? (
        <ul className="search-results">
          {fuseResults.map(({ item }) => (
            <li key={item.node.frontmatter.slug}>
              <Link to={item.node.frontmatter.slug}>
                <img
                  src={require(`../content/plants/${
                    item.node.frontmatter.image.relativePath
                  }`)}
                  alt=""
                />

                <div>
                  <p>{item.node.frontmatter.display_name}</p>
                  <p>{item.node.frontmatter.taxonomic_name}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

function useFuse(data, query) {
  const fuse = useMemo(
    () =>
      new Fuse(data.allMdx.edges, {
        shouldSort: true,
        includeMatches: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
          "node.frontmatter.display_name",
          "node.frontmatter.taxonomic_name",
        ],
      }),
    data
  )

  return fuse.search(query)
}

function useAllPages() {
  return useStaticQuery(graphql`
    {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              slug
              image {
                relativePath
              }
              display_name
              taxonomic_name
            }
          }
        }
      }
    }
  `)
}
