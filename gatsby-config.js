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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-116787485-1",
        head: false,
        anonymize: false,
        respectDNT: false,
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/img/favicon.png",
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: true,
          favicons: true,
          firefox: true,
          twitter: true,
          yandex: false,
          windows: true 
        }
      }
    }
  ]
}
