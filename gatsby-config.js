module.exports = {
  siteMetadata: {
    title: `Lawn and Order`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`, 
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-json`,
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: path.join(__dirname, `data`),
      },
    },
  ]
}
