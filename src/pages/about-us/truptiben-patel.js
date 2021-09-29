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

      <div className="px-4 px-10 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-0 lg:py-0 mb-20">
        <div className="container px-20 flex flex-col md:flex-row mx-auto ">
          <section className="w-full md:w-4/12 text-gray-600 body-font relative mb-20 mt-10 px-8" id="blog-sidebar">
          <h2 className="font-sans text-center text-xl font-bold tracking-tight text-gray-700 sm:text-3xl sm:leading-none mb-8">Truptiben Patel, M.D.</h2>

            <div className="pl-4">
              <img src="../../patel.jpeg" className="rounded-xl" />
            </div>

            <div className="mb-4">
              <h2 className="font-sans text-xl font-bold tracking-tight text-gray-700 sm:text-3xl sm:leading-none mb-8"></h2>
            </div>
            <div className="pl-4 text-white">
              <div className="rounded-xl px-6 py-6 bg-blue-50 drop-shadow-lg text-gray-500 text-lg">
                {/* <h4 className="mb-4 text-xl font-bold tracking-wide">Address</h4> */}
                <p className="mb-4 "><strong className="tracking-wide">Education</strong><br /> 
                  - Howard University (Postgrad Residency) <br />
                  - Saint James School of Medicine (Doctor of Medicine) <br />
                  - Gujarat University (Chemistry)
                </p>
                {/* <p>
                  <strong className="tracking-wide">Experience</strong><br />
                  - 45 years<br />
                  - Methodist Hospital<br />
                  - St. Mary Hospital<br />
                  - Pinnacle Hospital
                </p> */}
              </div>
              <div className="rounded-xl px-6 py-6 bg-yellow-50 drop-shadow-lg text-gray-500 mt-4 text-lg">
                <p className="mb-4 "><strong className="tracking-wide">Contact Information</strong><br />
                  - <a href="tel:12197624423" className="hover:text-gray-700">(219) 762-4423</a> <br />
                  - <a href="mailto:contact@imgportage.com" className="hover:text-gray-700">contact@imgportage.com</a>
                </p>
              </div>
            </div>
          </section>

          <section className="w-full md:w-8/12 text-gray-600 body-font relative mb-20 mt-12 px-6 text-lg" id="blog">
            <h2 className="font-sans text-xl font-semibold tracking-tight text-gray-700 sm:text-3xl sm:leading-none mb-4">About</h2>

            <p className="mb-4 mt-0">Trupti Patel attended Gujarat University (Chemistry & Organic Chemistry), Saint James School of Medicine (Doctor of Medicine), and completed her postgraduate medical training at Howard University in Washington D.C. in 2020.</p>

            <p className="mb-4 mt-2">In her spare time, Trupti enjoys spending time with her family, travelling, listening to music, and cooking.</p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default TruptibenPatel;

