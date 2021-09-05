import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { Helmet } from 'react-helmet';
import parse, { domToReact } from 'html-react-parser';

const BlogIndexPage = ({ data }) => {
  const query = useStaticQuery(graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___published, order: DESC}) {
    edges {
      node {
        id
        html
        frontmatter {
          content
          published
          title
          slug
          lead_image
        }
        excerpt
      }
    }
  }
  markdownRemark {
    id
  }
}
`);
  let frontmatter = [];
  query.allMarkdownRemark.edges.forEach(post => {
    frontmatter.push(post);
  });

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
        <div className="w-full h-2/3 bg-gray-900 bg-opacity-100 overflow-hidden text-center relative" style={{ backgroundImage: 'url(../../../news.jpeg)', backgroundSize: 'cover', backgroundPosition: 'top' }}>
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
                        <h2 className="font-sans text-xl font-bold tracking-tight text-gray-800 sm:text-4xl sm:leading-none mb-14">Latest from our blog...</h2>

          {frontmatter.map(element => {
            let body = element.node.html;

            return <div className="mb-20" key={element.node.id}>  
            <div className="h-96 bg-gray-800 bg-opacity-95 hover:bg-opacity-100 hover:bg-blend-overlay rounded-lg overflow-hidden text-center relative bg-blend-overlay" style={{ backgroundImage: element.node.frontmatter.lead_image?.replace("/static", ""), backgroundPosition: 'center' }}>
              <img className="rounded scale-50 object-cover object-top" src={element.node.frontmatter.lead_image?.replace("/static", "")} />
              </div>      
              <div className="mb-4 mt-8">
                <h2 className="mb-0 font-sans text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl sm:leading-none text-gray-800 hover:text-indigo-600"><a href="#">{element.node.frontmatter.title}</a></h2>
                <span className="text-sm ml-2"><strong>by</strong> IMG Team <strong>on</strong> {element.node.frontmatter.published}</span>
              </div>
              
              <div className="mx-2">
              <div dangerouslySetInnerHTML={{__html:  element.node.html}} />
              </div>
              </div>;
          })}
          </section>

          <section className="w-1/3 text-gray-600 body-font relative my-20 px-8" id="blog-sidebar">
            <div className="mb-4">
              <h2 className="pl-4 font-sans text-xl font-bold text-gray-800 sm:text-xl sm:leading-none">Posts by Month</h2>
            </div>
            <div className="pl-12 text-lg">
              <ul className="list-disc">
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