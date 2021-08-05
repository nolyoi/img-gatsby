import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { Helmet } from 'react-helmet';

export const query = graphql
  `
    query SITE_INDEX_QUERY {
        site {
            siteMetadata {
                title
                description
            }
        }
        allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { published: { eq: true } } }
        ) {
            nodes {
                id
                body
            frontmatter {
                title
                date(formatString: "MMMM Do, YYYY.")
                author
            }
            }
        }
    }
`

const BlogIndexPage = ({ data }) => {
  const { frontmatter, body } = data.allMdx.nodes[0];
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        ( <title>{`Internal Medicine and Geriatric - Latest news from IMG`}</title> )
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=Mali:wght@600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      <Nav menuItem="blog" />

      <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-0 lg:py-0">
        <div className="container mx-auto divide-y-2 divide-solid divide-grey-500">
          <section className="text-gray-600 body-font relative my-20" id="portage">
            <h2 className="mt-20 font-sans text-xl font-bold tracking-tight text-gray-800 sm:text-4xl sm:leading-none mb-8">Latest from our blog...</h2>
            <div className="mb-4">
              <h2 className="mb-0 font-sans text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl sm:leading-none text-gray-800 hover:text-indigo-600"><a href="#">{frontmatter.title}</a></h2>
              <span className="text-sm ml-2"><strong>by</strong> {frontmatter.author} <strong>on</strong> {frontmatter.date}</span>
            </div>
            <div className="mx-2">
              <MDXRenderer>{body}</MDXRenderer>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>

  )
}

export default BlogIndexPage;