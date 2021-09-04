module.exports = {
  siteMetadata: {
    siteUrl: "https://imgportage.com/",
    title: "Internal Medicine & Geriatrics",
  },
  plugins: [
    `gatsby-plugin-fontawesome-css`,
    // {
    //   resolve: `gatsby-plugin-scroll-reveal`,
    //   options: {
    //     threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
    //     once: true, // Defines if animation needs to be launched once
    //     disable: false, // Flag for disabling animations

    //     // Advanced Options
    //     selector: '[data-sal]', // Selector of the elements to be animated
    //     animateClassName: 'sal-animate', // Class name which triggers animation
    //     disabledClassName: 'sal-disabled', // Class name which defines the disabled state
    //     rootMargin: '0% 50%', // Corresponds to root's bounding box margin
    //     enterEventName: 'sal:in', // Enter event name
    //     exitEventName: 'sal:out', // Exit event name
    //   }
    // },
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    // "gatsby-plugin-sharp",
    // "gatsby-transformer-sharp",
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "images",
    //     path: "./src/images/",
    //   },
    //   __key: "images",
    // }, 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
