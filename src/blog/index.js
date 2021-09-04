import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { Helmet } from 'react-helmet';

export const query = graphql
  `
  query GetPosts {
    allMarkdownRemark {
      edges {
        node {
          id
          html
          frontmatter {
            title
            slug
            content
          }
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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-5NSD8J3W2V"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5NSD8J3W2V');
          `}
        </script>
      </Helmet>
      <Nav menuItem="news" />

      <section className="bg-white bg-opacity-0 mt-0 w-full h-2/3">
        <div className="w-full h-2/3 bg-gray-900 bg-opacity-100 overflow-hidden text-center relative" style={{ backgroundImage: 'url(./news.jpeg)', backgroundSize: 'cover', backgroundPosition: 'top' }}>
          <div className="container m-auto pt-20 h-1/2">
            <div className="w-9/12 mx-auto text-gray-300 mt-0 my-40 items-center content-center content-center h-2/3">
              <h1 className="ml-0 mt-10 mb-4 text-center font-sans text-4xl font-bold tracking-tight text-indigo-700 sm:text-4xl sm:leading-none"><span data-sal="fade"
                data-sal-delay="300"
                data-sal-duration="1500"
                data-sal-easing="ease-out-quint">IMG</span> <span data-sal="fade"
                  data-sal-delay="900"
                  data-sal-duration="2000"
                  data-sal-easing="ease-out-quint" className="text-gray-700 font-bold">Latest Announcements</span></h1>
            </div>
          </div>
        </div>
      </section>
      
      <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-0 lg:py-0 mb-20">
        <div className="container flex mx-auto ">
          <section className="w-2/3 text-gray-600 body-font relative my-20" id="blog">
            <h2 className="font-sans text-xl font-bold tracking-tight text-gray-800 sm:text-4xl sm:leading-none mb-8">Latest from our blog...</h2>
            <div className="mb-4">
              <h2 className="mb-0 font-sans text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl sm:leading-none text-gray-800 hover:text-indigo-600"><a href="#">{frontmatter.title}</a></h2>
              <span className="text-sm ml-2"><strong>by</strong> {frontmatter.author} <strong>on</strong> {frontmatter.date}</span>
            </div>
            <div className="mx-2">
              <MDXRenderer>{frontmatter.body}</MDXRenderer>
            </div>
          </section>

          <section className="w-1/3 text-gray-600 body-font relative my-20 px-8" id="blog-sidebar">
            <div className="mb-4">
              <h2 className="pl-4 font-sans text-md font-bold tracking-tight text-gray-800 sm:text-lg sm:leading-none">Posts by Month</h2>
            </div>
            <div className="pl-12">
              <ul class="list-disc">
                <li><a href="#" className="hover:text-indigo-600">January</a></li>
                <li><a href="#" className="hover:text-indigo-600">February</a></li>
                <li><a href="#" className="hover:text-indigo-600">March</a></li>
                <li><a href="#" className="hover:text-indigo-600">April</a></li>
              </ul>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>

  )
}

export default BlogIndexPage;