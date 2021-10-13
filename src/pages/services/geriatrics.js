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

function Geriatrics() {
  React.useEffect(() => {
    sal();
  }, []);

  return (
    <div>
      <Nav menuItem="services" />
      <Helmet>
        <meta charSet="utf-8" />
        ( <title>{`Internal Medicine and Geriatrics - Geriatric Medicine`}</title> )
        <meta name="Description" content="IMG provides geriatric health services in Portage and Gary Indiana." />
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

      <section className="bg-white bg-opacity-0 mt-0 w-full h-1/2">
        <div className="w-full h-1/2 bg-gray-900 bg-opacity-100 overflow-hidden text-center relative" style={{ backgroundImage: 'url(../geriatrics-man-woman.jpeg)', backgroundSize: 'cover', backgroundPosition: '0% 55%' }}>
          <div className="container mx-auto my-auto py-10 h-1/2">
            <div className="w-9/12 mx-auto text-gray-300 mt-0 py-32 items-center content-center content-center h-1/2">
              <h1 className="mt-10 mb-4 pr-8 text-center font-sans text-4xl font-bold tracking-tight text-orange-700 sm:text-4xl sm:leading-none"><span data-sal="fade"
                data-sal-delay="300"
                data-sal-duration="1500"
                data-sal-easing="ease-out-quint">IMG</span> <span data-sal="fade"
                  data-sal-delay="900"
                  data-sal-duration="2000"
                  data-sal-easing="ease-out-quint" className="text-white font-bold">Geriatric Medicine</span></h1>
            </div>
          </div>
        </div>
      </section>

      <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-0 lg:py-0 mb-20">
        <div className="container flex flex-col md:flex-row mx-auto ">
          <section className="w-full md:w-8/12 text-gray-600 body-font relative my-20" id="blog">
            <h2 className="font-sans text-xl font-bold tracking-tight text-gray-800 sm:text-3xl sm:leading-none mb-8">Geriatric Medicine</h2>
            <div className="relative flex rounded-lg items-center justify-center overflow-hidden object-fit mx-auto h-96 mr-8 mb-8"><img src="../../geriatrics2.png" className="object-cover object-center w-full " alt="avatar" /></div>
            <p className="mx-2 pb-4 text-lg">Geriatrics is the branch of healthcare that focuses on our unique needs as we age. Just as pediatricians specialize in the health needs of children, geriatricians specialize in the health needs of older people.</p>
            <p className="mx-2 pb-4 text-lg">Our bodies change over time, and our health care needs to adapt with us. Geriatrics is the specialty focused on the high-quality, person-centered care we all need as we age. “High-quality care” aims to improve health, independence, and quality of life for older people. “Person-centered care” puts our personal values and preferences at the heart of our care decisions.</p>
            <p className="mx-2 pb-4 text-lg">The medical needs of elderly are diffferent because as bodies age, the need for maintaining health also changes. To remain functional and independent proper excercises and bringing balance in life is important. Preventive care including blood work, xrays, and vaccination are important for a long healthy life.</p>
            
            <div className="mx-2 pl-8 py-6 text-lg rounded-xl bg-gray-50">
              <img src="../../medical-cross.png" className="h-40 float-right mr-8 mt-8" />
              <ul className="list-inside list-disc">
                <li>Cardiac Health</li>
                <li>Cancer Screening</li>
                <li>Nutrition</li>
                <li>Mobility</li>
                <li>Mental Health</li>
                <li>Adult Immunizations</li>
                <li>Annual Wellness Visits</li>
                <li>And more!</li>
              </ul>
            </div>
            <BookButton />
          </section>

          <section className="w-full md:w-4/12 text-gray-600 body-font relative my-20 px-8" id="blog-sidebar text-lg">
            <div className="mb-4">
              <h2 className="font-sans text-xl font-bold tracking-tight text-gray-800 sm:text-3xl sm:leading-none mb-8"></h2>
            </div>
            <div className="pl-4 text-white">
              <div className="rounded-xl px-6 py-6 bg-blue-50 drop-shadow-lg text-gray-500 text-lg">
                {/* <h4 className="mb-4 text-xl font-bold tracking-wide">Address</h4> */}
                <p className="mb-4 "><strong className="tracking-wide">Portage Office</strong><br /> 2640 Hamstrom Rd.

                  Portage, IN. 46368  <br />
                  (219) 762-4423</p>
                <p><strong className="tracking-wide">Gary Office</strong><br /> 1400 Broadway
                  Gary, IN. 46408 <br />
                  (219) 882-2305

</p>
              </div>

              <div className="rounded-xl px-6 py-6 bg-green-50 drop-shadow-lg text-gray-500 mt-8 text-lg">

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

export default Geriatrics;
