module.exports = {
  siteMetadata: {
    title: "Overwatered — The Free Plant Guide",
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
  ],
}
