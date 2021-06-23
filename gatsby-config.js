/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Lora\:300,400i,400`,
          `Lato`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {},
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
