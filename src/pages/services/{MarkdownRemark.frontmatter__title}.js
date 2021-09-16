// Add cont of care

import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import sal from 'sal.js';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { Helmet } from 'react-helmet';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BookButton from '../../components/BookButton';

function SinglePage({data}) {
  React.useEffect(() => {
    sal();
  }, []);

let frontmatter = query.allMarkdownRemark.edges[0]

  return (
    <div>
      <Nav menuItem="services" />
      <Helmet>
        <meta charSet="utf-8" />
        ( <title>{`Internal Medicine and Geriatrics - Primary Care & Family Practice`}</title> )
        <meta name="Description" content="IMG provides primary and family care services to Portage, Indiana and surrounding communities. Learn more about what we offer." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
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

      <section className="bg-white bg-opacity-0 mt-0 w-full h-1/2 shadow-lg">
        <div className="w-full h-1/2 bg-gray-900 bg-opacity-100 overflow-hidden text-center relative" style={{ backgroundImage: 'url(../../heart-bg.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="container mx-auto my-auto pt-20 h-1/2">
            <div className="w-9/12 mx-auto text-gray-300 mt-0 my-40 items-center content-center content-center h-1/2">
              <h1 className="mt-14 py-10 pl-10 text-center font-sans text-4xl font-bold tracking-tight text-indigo-700 sm:text-4xl sm:leading-none"><span data-sal="fade"
                data-sal-delay="300"
                data-sal-duration="1500"
                data-sal-easing="ease-out-quint"></span> <span data-sal="fade"
                  data-sal-delay="900"
                  data-sal-duration="2000"
                  data-sal-easing="ease-out-quint" className="text-white font-bold">Primary & Family Care</span></h1>
            </div>
          </div>
        </div>
      </section>

      <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-0 lg:py-0 mb-20">
        <div className="container flex flex-col md:flex-row mx-auto ">
          <section className="w-full md:w-8/12 text-gray-600 body-font relative my-20" id="primary-care">
            <h2 className="font-sans text-xl font-bold tracking-tight text-gray-800 sm:text-3xl sm:leading-none mb-8">Primary and Family Care</h2>
            <div className="relative flex rounded-lg items-center justify-center overflow-hidden object-fit mx-auto h-96 mr-8 mb-8">
            <div className="h-96 bg-gray-8 hover:bg-blend-overlay rounded-lg" style={{ backgroundImage: `url(${frontmatter.frontmatter.lead_image?.replace("/static", "")})`, backgroundPosition: 'center', backgroundSize: 'cover'  }} />
              </div>
            <div className="mx-2" dangerouslySetInnerHTML={{ __html: frontmatter.node.html }} />
            <div className="mx-2 mt-6 pl-8 py-6 text-lg rounded-xl bg-gray-50">
              <img src="../../medical-cross.png" className="h-40 float-right mr-8 mt-8" />
              <ul className="list-inside list-disc">
                <li>Nutrition Counseling</li>
                <li>First Aid Treatments</li>
                <li>School, College and Employment Physicals</li>
                <li>Blood Pressure Treatment</li>
                <li>Diabetes Management</li>
                <li>Immunizations</li>
                <li>Annual Wellness Visits</li>
                <li>And more!</li>
              </ul>
            </div>
            <BookButton />
          </section>

          <section className="w-full md:w-4/12 text-gray-600 body-font relative my-20 px-8" id="blog-sidebar">
            <div className="mb-4">
              <h2 className="font-sans text-xl font-bold tracking-tight text-gray-800 sm:text-3xl sm:leading-none mb-8"></h2>
            </div>
            <div className="pl-4 text-white">
              <div className="rounded-xl px-6 py-6 bg-blue-50 drop-shadow-lg text-gray-500">
                {/* <h4 className="mb-4 text-xl font-bold tracking-wide">Address</h4> */}
                <p className="mb-4 "><strong className="tracking-wide">Portage Office</strong><br /> 2640 Hamstrom Road
                  Portage, IN. 46368  <br />
                  (219) 762-4423</p>
                <p><strong className="tracking-wide">Gary Office</strong><br /> 1400 Broadway
                  Gary, IN. 46408 <br />
                  (219) 884-4900</p>
              </div>

              <div className="rounded-xl px-6 py-6 bg-green-50 drop-shadow-lg text-gray-500 mt-8">
                <h4 className="mb-2 tracking-wide"><strong>Office Hours</strong></h4>
                <div className="w-full">
                  <table class="table-auto w-11/12 mx-auto">
                    <tr><td>Monday:</td><td>9a-5p</td></tr>
                    <tr><td>Tuesday:</td><td>9a-5p</td></tr>
                    <tr><td className="pr=4">Wednesday:</td><td>9a-5p</td></tr>
                    <tr><td>Thursday:</td><td>9a-5p</td></tr>
                    <tr><td>Friday:</td><td>9a-4p</td></tr>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export const query = graphql`
query  ($title: String) {
  allMarkdownRemark(filter: {frontmatter: {title: {eq: $title}}}) {
    edges {
      node {
        html
        frontmatter {
          lead_image
          published_bool
          title
        }
      }
    }
  }
}
`;

export default PrimaryCare;
