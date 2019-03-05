module.exports = {
  siteMetadata: {
    title: "Overwatered, the free plant guide",
    description: "Overwatered is the free guide to plant ownership.",
    author: "@stevenpetryk",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "plants",
        path: `${__dirname}/src/content/plants`,
      },
    },
  ],
}
