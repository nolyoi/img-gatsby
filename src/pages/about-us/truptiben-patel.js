// Add cont of care

import * as React from 'react';
import { Link } from 'gatsby';
import sal from 'sal.js';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { Helmet } from 'react-helmet';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BookButton from '../../components/BookButton';

function TruptibenPatel() {
  React.useEffect(() => {
    sal();
  }, []);

  return (
    <div>
      <Nav menuItem="about-us" />
      <Helmet>
        <meta charSet="utf-8" />
        ( <title>{`Internal Medicine and Geriatrics - About Christina Connelly`}</title> )
        <meta name="Description" content="About Christina Connelly, Nurse Practitioner in Portage, Indiana." />
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

      {/* <section className="bg-white bg-opacity-0 mt-0 w-full h-1/2">
        <div className="w-full h-1/2 bg-gray-900 bg-opacity-100 overflow-hidden text-center relative" style={{ backgroundImage: 'url(../prenatal3.jpeg)', backgroundSize: 'cover', backgroundPosition: '0% 45%' }}>
          <div className="container mx-auto my-auto pt-20 h-1/2">
            <div className="w-9/12 mx-auto text-gray-300 mt-0 my-40 items-center content-center content-center h-1/2">
              <h1 className="mt-10 mb-4 pr-4 text-center font-sans text-4xl font-bold tracking-tight text-blue-700 sm:text-4xl sm:leading-none"><span data-sal="fade"
                data-sal-delay="300"
                data-sal-duration="1500"
                data-sal-easing="ease-out-quint">IMG</span> <span data-sal="fade"
                  data-sal-delay="900"
                  data-sal-duration="2000"
                  data-sal-easing="ease-out-quint" className="text-white font-bold">TruptibenPatel Care</span></h1>
            </div>
          </div>
        </div>
      </section> */}

      <div className="px-4 px-10 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-0 lg:py-0 mb-20">
        <div className="container px-20 flex flex-col md:flex-row mx-auto ">
          <section className="w-full md:w-4/12 text-gray-600 body-font relative mb-20 mt-10 px-8" id="blog-sidebar">
          <h2 className="font-sans text-center text-xl font-bold tracking-tight text-gray-700 sm:text-3xl sm:leading-none mb-8">Christina Connelly, N.P.</h2>

            <div className="pl-4">
              <img src="../../christina.jpeg" className="rounded-xl" />
            </div>

            <div className="mb-4">
              <h2 className="font-sans text-xl font-bold tracking-tight text-gray-700 sm:text-3xl sm:leading-none mb-8"></h2>
            </div>
            <div className="pl-4 text-white">
              <div className="rounded-xl px-6 py-6 bg-blue-50 drop-shadow-lg text-gray-500">
                {/* <h4 className="mb-4 text-xl font-bold tracking-wide">Address</h4> */}
                <p className="mb-4 "><strong className="tracking-wide">Education</strong><br /> 
                  - Indiana University <br />
                  - Indiana Wesleyan University (Masters)
                </p>
                {/* <p>
                  <strong className="tracking-wide">Experience</strong><br />
                  - 45 years<br />
                  - Methodist Hospital<br />
                  - St. Mary Hospital<br />
                  - Pinnacle Hospital
                </p> */}
              </div>
            </div>
          </section>

          <section className="w-full md:w-8/12 text-gray-600 body-font relative mb-20 mt-12 px-6 text-lg" id="blog">
            <h2 className="font-sans text-xl font-semibold tracking-tight text-gray-700 sm:text-3xl sm:leading-none mb-4">About</h2>

            <p className="mb-4 mt-0">Christina Connelly is a certified Family Nurse Practitioner. She obtained her Bachelor’s Degree in Nursing from Indiana University. She went on to complete her Master’s Degree at Indiana Wesleyan University graduating in 2015.</p>

            <p className="mb-4 mt-2">As a Family Nurse Practitioner, she has practiced in a variety of inpatient and outpatient settings. She has also integrated telemedicine into her practice. Christina has experience in critical care, as well as a special focus in obesity medicine, the treatment of opiate dependence, and geriatric medicine. She places high value on individualized care, strong family values, and preventative medicine.</p>

            <p className="mb-4 mt-2">Christina was born and raised in Northwest Indiana and currently lives in Valparaiso with her husband and youngest daughter. Being part of the community herself, has inspired her to make a positive impact on others and their health.</p>

            <p className="mb-4 mt-2">In her spare time Christina enjoys spending time with her eldest sons, exploring the Dunes State Park, traveling, snorkeling and exercise of any kind.</p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default TruptibenPatel;

