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

function HavishSarma() {
  React.useEffect(() => {
    sal();
  }, []);

  return (
    <div>
      <Nav menuItem="about-us" />
      <Helmet>
        <meta charSet="utf-8" />
        ( <title>{`Internal Medicine and Geriatrics - About Havish Sarma`}</title> )
        <meta name="Description" content="About Harvish Sarma, Internal Medicine in Portage, Indiana." />
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

      {/* <section className="bg-white bg-opacity-0 mt-0 w-full h-1/2">
        <div className="w-full h-1/2 bg-gray-900 bg-opacity-100 overflow-hidden text-center relative" style={{ backgroundImage: 'url(../prenatal3.jpeg)', backgroundSize: 'cover', backgroundPosition: '0% 45%' }}>
          <div className="container mx-auto my-auto pt-20 h-1/2">
            <div className="w-9/12 mx-auto text-gray-300 mt-0 my-40 items-center content-center content-center h-1/2">
              <h1 className="mt-10 mb-4 pr-4 text-center font-sans text-4xl font-bold tracking-tight text-indigo-700 sm:text-4xl sm:leading-none"><span data-sal="fade"
                data-sal-delay="300"
                data-sal-duration="1500"
                data-sal-easing="ease-out-quint">IMG</span> <span data-sal="fade"
                  data-sal-delay="900"
                  data-sal-duration="2000"
                  data-sal-easing="ease-out-quint" className="text-white font-bold">HavishSarma Care</span></h1>
            </div>
          </div>
        </div>
      </section> */}

      <div className="px-4 px-10 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-0 lg:py-0 mb-20">
        <div className="container px-20 flex flex-col md:flex-row mx-auto ">
          <section className="w-full md:w-4/12 text-gray-600 body-font relative mb-20 mt-10 px-8" id="blog-sidebar">
            <h2 className="font-sans text-center text-xl font-bold tracking-tight text-gray-700 sm:text-3xl sm:leading-none mb-8">Havish Sarma, M.D.</h2>

            <div className="pl-4">
              <img src="../../sarma.jpeg" className="rounded-xl" />
            </div>

            <div className="mb-4">
              <h2 className="font-sans text-xl font-bold tracking-tight text-gray-700 sm:text-3xl sm:leading-none mb-8"></h2>
            </div>
            <div className="pl-4 text-white">
              <div className="rounded-xl px-6 py-6 bg-blue-50 drop-shadow-lg text-gray-500">
                {/* <h4 className="mb-4 text-xl font-bold tracking-wide">Address</h4> */}
                <p className="mb-4 "><strong className="tracking-wide">Education</strong><br />
                  - Loyola University <br />
                  - LECOM
                </p>
                <p>
                  <strong className="tracking-wide">Experience</strong><br />
                  - 10 years<br />
                  - Swedish Covenant Hospital<br />
                </p>
              </div>
              <div className="rounded-xl px-6 py-6 bg-yellow-50 drop-shadow-lg text-gray-500 mt-4">
                <p className="mb-4 "><strong className="tracking-wide">Contact Information</strong><br />
                  - <a href="tel:12197624423" className="hover:text-gray-700">(219) 762-4423</a> <br />
                  - <a href="mailto:contact@imgportage.com" className="hover:text-gray-700">contact@imgportage.com</a>
                </p>
              </div>
            </div>
          </section>

          <section className="w-full md:w-8/12 text-gray-600 body-font relative mb-20 mt-12 px-6 text-lg" id="blog">
            <h2 className="font-sans text-xl font-semibold tracking-tight text-gray-700 sm:text-3xl sm:leading-none mb-4">About</h2>

            <p className="mb-4 mt-0">Dr. Sarma grew up in the Northwest Indiana region and has been practicing in the area for nearly a decade. He attended Loyola Univeristy for his undergraduate studies in pyscology.  Thereafter, he completed his medical school at LECOM in Bradington, Florida.  Upon completing his residency in Internal Medicine at Swedish Covenant Hospital on the north side of Chicago, he joined the practice.</p>
            <p className="mb-4 mt-2">Dr. Sarma is interested in a wide array of internal medicine subspecialties including diabetes and hypertension.  He is also interested and enthused in geriatric health consultation.  Dr. Sarma is the medical director of two nursing homes and a hospice facility. He also consults depression and substance abuse disorder.</p>
            <p className="mb-4 mt-2">He and his wife enjoying spending time with thier two young children. In addition, he is an avid sports and music fan and enjoys travel during his time away from work.</p>

          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HavishSarma;

// Nutrition, Check ups, Mental Health, 