// Flyers

import * as React from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { Helmet } from "react-helmet";
import { Link } from 'gatsby';
import sal from 'sal.js';

function Index() {
  sal();

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        ( <title>{`Internal Medicine and Geriatric - Serving Northwest Indiana for ${(new Date().getFullYear() - 1987) + "+"} years.`}</title> )
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

      <Nav menuItem="index" />
      <Hero />
      
      <section className="flex flex-col m-auto h-screen lg:h-screen sm:h-full my-18 sm:mx-24">
        <div className="flex flex-wrap content-center container sm:h-full px-12 lg:px-0 m-auto max-w-xl md:max-w-full lg:max-w-screen-xl">
           <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
            <div>
              <img data-sal="slide-up"
                data-sal-delay="200"
                data-sal-duration="2000"
                data-sal-easing="ease-out-quint" className="object-cover w-full h-56 rounded sm:h-96 lg:pr-8" src="./stethoscope-heart.jpeg" alt="" />
            </div>
            <div className="flex flex-col justify-center">
              <div className="max-w-full mb-6">
                <h2 data-sal="slide-left"
                data-sal-delay="300"
                data-sal-duration="1500"
                data-sal-easing="ease-out-quint" className="mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Local doctors you can trust.
                </h2>
                <p data-sal="slide-left"
                data-sal-delay="300"
                data-sal-duration="1500"
                data-sal-easing="ease-out-quint" className="text-base text-gray-700 md:text-lg">
                  IMG has been caring for Northwest Indiana for over 34 years and is dedicated to providing high quality healthcare in a compassionate, ethical, and caring environment.
                </p>
              </div>
              <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
                <div data-sal="slide-left"
                data-sal-delay="350"
                data-sal-duration="1500"
                data-sal-easing="ease-out-quint" className="bg-white border-l-4 shadow-sm border-green-500">
                  <div className="h-full p-5 border border-l-0 rounded-r">
                    <h6 className="mb-2 font-semibold leading-5">
                      Continuity of care
                    </h6>
                    <p className="text-sm text-gray-900">
                      Our practice provides care to children through the elderly. We have the ability to care for our patients through all stages of their lives.
                    </p>
                  </div>
                </div>
                <div data-sal="slide-left"
                data-sal-delay="400"
                data-sal-duration="1500"
                data-sal-easing="ease-out-quint" className="bg-white border-l-4 shadow-sm border-blue-600">
                  <div className="h-full p-5 border border-l-0 rounded-r">
                    <h6 className="mb-2 font-semibold leading-5">
                      Serving our local community
                    </h6>
                    <p className="text-sm text-gray-900">
                      Internal Medicine & Geriatrics is locally owned and run. We aren't a big company and provide individual attention to all of our patients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>

        <section className="flex text-gray-700 h-screen lg:h-screen sm:h-full sm:my-24 sm:pt-12">
          <div className="m-auto">
          <div className="flex flex-col items-center px-5 pt-8">
            <div className="flex flex-col w-full mb-8 text-left lg:text-center">
              <h1 data-sal="fade"
                data-sal-delay="200"
                data-sal-duration="1500"
                data-sal-easing="ease-out-quint" className="mx-auto text-2xl font-semibold leading-none tracking-tighter text-black lg:w-1/2 sm:text-6xl title-font">
                Health Services
              </h1>
            </div>
          </div>
          <div className="container items-center px-5 pb-8 mx-auto lg:px-24 max-h-full">
            <div className="flex flex-wrap mb-12 text-left">
              <div className="w-full mx-auto lg:w-1/3">
                <div data-sal="slide-up"
                data-sal-delay="300"
                data-sal-duration="1500"
                data-sal-easing="ease-out-quint" className="p-6">
                  {/* <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-black bg-gray-100 rounded-full">
                  </div> */}
                  <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font">
                    Family & General Practice
                  </h1>
                  <p className="mx-auto text-base font-medium leading-relaxed text-gray-700 ">We offer a full range of services in order to provide our patients with the best health and wellness care to enjoy life to the fullest.
                  </p>
                </div>
              </div>
              <div className="w-full mx-auto lg:w-1/3">
                <div data-sal="slide-up"
                data-sal-delay="350"
                data-sal-duration="1500"
                data-sal-easing="ease-out-quint" className="p-6">
                  {/* <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-black bg-gray-100 rounded-full">
                  </div> */}
                  <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font">
                    Substance Abuse
                  </h1>
                  <p className="mx-auto text-base font-medium leading-relaxed text-gray-700 ">We provide Suboxone maintenance treatment along with counseling to those struggling with addiction.
                  </p>
                </div>
              </div>
              <div className="w-full mx-auto lg:w-1/3">
                <div data-sal="slide-up"
                data-sal-delay="400"
                data-sal-duration="1500"
                data-sal-easing="ease-out-quint" className="p-6">
                  {/* <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-black bg-gray-100 rounded-full">
                  </div> */}
                  <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font">
                    Geriatrics & Pediatrics
                  </h1>
                  <p className="mx-auto text-base font-medium leading-relaxed text-gray-700 ">We provide services for the physical, emotional and social well-being of children and elderly patients with medical and psychosocial problems.
                  </p>
                </div>
              </div>
              <div className="w-full justify-center float-right mt-8 lg:pr-6 md:pr-6 place-items-center">
                <div data-sal="slide-up"
                data-sal-delay="450"
                data-sal-duration="1500"
                data-sal-easing="ease-out-quint" className="w-full self-center text-center">
                <Link to="/services" className="inline-flex items-center justify-center w-50 h-12 px-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-600 hover:bg-indigo-800 focus:shadow-outline focus:outline-none">View all services</Link>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>
      <Footer />
    </div>
  );
}

export default Index;