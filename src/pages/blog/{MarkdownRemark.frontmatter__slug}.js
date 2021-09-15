import * as React from 'react';
import { graphql, navigate } from 'gatsby';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { Helmet } from 'react-helmet';
import sal from 'sal.js';

const SinglePost = ({ data }) => {
  React.useEffect(() => {
    sal();
  }, []);

  const { markdownRemark } = data
  let frontmatter = markdownRemark;

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

      <section className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-0 lg:py-0 mb-20">
        <div className="flex justify-center flex mx-auto">

          <div className="w-9/12 text-gray-600 body-font relative my-20" id="blog">
          <div className="mb-8">
                  <h2 className="mb-0 font-sans text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl sm:leading-none text-gray-800">{frontmatter.frontmatter.title}</h2>
                  <span className="text-sm ml-2"><strong>by</strong> IMG Team <strong>on</strong> {frontmatter.frontmatter.published}</span>
                </div>

               <div className="mb-20 mx-4" key={frontmatter.id}>
                <div className="h-96 bg-gray-8 hover:bg-blend-overlay rounded-lg" style={{ backgroundImage: `url(${frontmatter.frontmatter.lead_image?.replace("/static", "")})`, backgroundPosition: 'center', backgroundSize: 'cover'  }} />

                <div className="mx-2 mt-10">
                  <div dangerouslySetInnerHTML={{ __html: frontmatter.html }} />
                </div>
                <div className="mx-2 mt-10 text-center">
                  <button onClick={() => navigate(-1)} className="inline-flex mt-8 items-center justify-center w-50 h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-600 hover:bg-indigo-800 focus:shadow-outline focus:outline-none">Go Back</button>
                </div>
              </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>

  )
}

export const query = graphql`
query  ($id: String) {
   markdownRemark(id: {eq: $id}) {
      html
      frontmatter {
        lead_image
        published
        slug
        title
      }
      id
    }
  }
  `;


export default SinglePost;