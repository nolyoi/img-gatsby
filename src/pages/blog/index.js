import * as React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { Helmet } from 'react-helmet';
import sal from 'sal.js';
import LatestPosts from '../../components/LatestPosts';


const BlogIndexPage = ({ data }) => {
  React.useEffect(() => {
    sal();
  }, []);


  const query = useStaticQuery(graphql`
    query MyQuery {
  allMarkdownRemark(filter: {frontmatter: {published_bool: {eq: true}}}) {
    nodes {
      frontmatter {
        title
        lead_image
        published_
      }
      html
    }
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=Mali:wght@600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XFF5TPVP9Y"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XFF5TPVP9Y');
          `}
        </script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-204995244-1"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-204995244-1');
          `}
        </script>
      </Helmet>
      <Nav menuItem="news" />

      <section className="bg-white bg-opacity-0 mt-0 w-full h-2/3">
        <div className="w-full h-2/3 bg-gray-900 bg-opacity-100 overflow-hidden text-center relative" style={{ backgroundImage: 'url(../../../news.jpeg)', backgroundSize: 'cover', backgroundPosition: 'top' }}>
          <div className="container m-auto pt-20 h-1/2">
            <div className="w-9/12 m-auto text-gray-300 mt-0 my-40 items-center content-center content-center h-2/3">
              <h1 className="ml-0 mt-20 mb-4 text-center font-sans text-4xl font-bold tracking-tight text-indigo-700 sm:text-4xl sm:leading-none"><span data-sal="fade"
                data-sal-delay="300"
                data-sal-duration="1500"
                data-sal-easing="ease-out-quint">IMG</span> <span data-sal="fade"
                  data-sal-delay="800"
                  data-sal-duration="2000"
                  data-sal-easing="ease-out-quint" className="text-gray-700 font-bold">Latest Announcements</span></h1>
              <p data-sal="fade"
                data-sal-delay="1000"
                data-sal-duration="2000"
                data-sal-easing="ease-out-quint" className="text-lg font-medium text-gray-700">Check below for the latest announcements from our office.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-0 lg:py-0 mb-20">
        <div className="container flex mx-auto ">

          <section className="w-2/3 text-gray-600 body-font relative my-20" id="blog">
            <h2 className="font-sans text-xl font-bold tracking-tight text-gray-800 sm:text-4xl sm:leading-none mb-14">Latest from our blog...</h2>

            {frontmatter.map(element => {
              return <div className="mb-20 mx-4" key={element.node.id}>
                <Link to={element.node.frontmatter.slug}>
                  <div className="h-96 bg-gray-800 bg-blend-overlay bg-opacity-20 rounded-lg" style={{ backgroundImage: `url(${element.node.frontmatter.lead_image?.replace("/static", "")})`, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                </Link>
                <div className="mb-4 mt-8">
                  <h2 className="mb-0 font-sans text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl sm:leading-none text-gray-800 hover:text-indigo-600"><Link to={element.node.frontmatter.slug} >{element.node.frontmatter.title}</Link></h2>
                  <span className="text-sm ml-2"><strong>by</strong> IMG Team <strong>on</strong> {element.node.frontmatter.published}</span>
                </div>

                <div className="mx-2">
                  <div dangerouslySetInnerHTML={{ __html: element.node.html }} />
                </div>
              </div>;
            })}
          </section>

          <section className="w-1/3 text-gray-600 body-font relative my-10 px-8" id="blog-sidebar">
            <div className="rounded-xl px-6 py-6 bg-green-50 drop-shadow-lg text-gray-500 mt-8">

              <div className="mb-4">
                <h2 className="font-sans font-bold text-lg tracking-tight text-gray-800 sm:leading-none mb-4">Latest Posts</h2>
              </div>
              <div className="pl-12 text-lg">
                <ul className="list-disc">
                  <LatestPosts />
                </ul>
              </div>
            </div>
            <div className="rounded-xl px-6 py-6 bg-gray-50 drop-shadow-lg text-gray-500 mt-8">

              <div className="mb-4">
                <h2 className="font-sans font-bold text-lg tracking-tight text-gray-800 sm:leading-none mb-4">Archive</h2>
              </div>
              <div className="pl-12 text-lg">
                <ul className="list-disc">
                  <li><a href="#" className="hover:text-indigo-600">January</a></li>
                  <li><a href="#" className="hover:text-indigo-600">February</a></li>
                  <li><a href="#" className="hover:text-indigo-600">March</a></li>
                  <li><a href="#" className="hover:text-indigo-600">April</a></li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>

  )
}

export default BlogIndexPage;