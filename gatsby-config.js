module.exports = {
  siteMetadata: {
    title: `Paweł Hincka`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Paweł Hincka`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        //icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Signika`,
            variants: [`700`]
          },
          {
            family: `Roboto Condensed`,
            variants: [`700`]
          },
          {
            family: `Ubuntu Condensed`,
            variants: [`400`, `700`]
          },
        ],
      }
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `99692ab2cd0734e4ba099fe2c556c1`,
        previewMode: false,
        disableLiveReload: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
