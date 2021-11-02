module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "calypsocoffee.co",
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: "calypso-coffee-co",
        accessToken: "",
      },
    },
    "gatsby-plugin-sass",
  ],
};
