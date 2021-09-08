const siteUrl = process.env.URL || `https://imgportage.com`

module.exports = {
  siteMetadata: {
    siteUrl: `http://imgportage.com`,
    title: `Internal Medicine & Geriatrics`,
  },
  plugins: [
    `gatsby-plugin-fontawesome-css`,
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-sitemap`,
      // options: {
      //   query: `{
      //     site {
      //       siteMetadata {
      //         siteUrl
      //       }
      //     }
      //     allSitePage {
      //       edges {
      //         node {
      //           path
      //         }
      //       }
      //     }
      //     allMarkdownRemark {
      //       edges {
      //         node {
      //           fields {
      //             slug
      //           }
      //         }
      //       }
      //     }
      //   }`,
        
      //   serialize: ({ site, allSitePage, allMarkdownRemark }) => {
      //     let pages = []
      //     allSitePage.edges.map(edge => {
      //       pages.push({
      //         url: siteUrl+ "/" + edge.node.path,
      //         changefreq: `daily`,
      //         priority: 0.7,
      //       })
      //     })
      //     allMarkdownRemark.edges.map(edge => {
      //       pages.push({
      //         url: `${siteUrl}/${edge.node.fields.slug
      //           }`,
      //         changefreq: `daily`,
      //         priority: 0.7,
      //       })
      //     })
      //     return pages
      //   },
      // },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `testimonials`,
        path: `${__dirname}/src/content/testimonials`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/posts`,
        name: `post`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                "heading[depth=1]": "title",
                "heading[depth=2]": "subtitle",
                paragraph: "py-2 text-lg",
              }
            }
          }
        ]
      }
    },
  ],
};
