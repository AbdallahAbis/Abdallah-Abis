const info = require("./src/info")

module.exports = {
  siteMetadata: {
    title: info.siteTitle,
    siteUrl: info.siteUrl,
    description: info.siteDescription,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `work`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 864,
              linkImagesToOriginal: true,
              quality: 90,
              tracedSVG: { color: info.colors.background },
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Abis Abdallah`,
        short_name: `Abis`,
        start_url: `/`,
        background_color: `#090117`,
        theme_color: `#090117`,
        display: `minimal-ui`,
        icon: `src/assets/icons/siteIcons/icon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    "gatsby-plugin-react-helmet",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
