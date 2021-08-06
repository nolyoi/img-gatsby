import * as React from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { Helmet } from "react-helmet";
import { Link } from 'gatsby';

function Index() {
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
      </Helmet>
      <Nav menuItem="index" />
      <Hero />
      <div className="flex flex-col mx-auto lg:mt-16 -mt-10">
        <div className="container px-4 py-16 mx-auto max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-0 lg:py-20">
          <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
            <div>
              <img className="object-cover w-full h-56 rounded sm:h-96" src="https://www.irishtimes.com/polopoly_fs/1.4141776.1579173983!/image/image.jpg_gen/derivatives/landscape_620/image.jpg" alt="" />
            </div>
            <div className="flex flex-col justify-center">
              <div className="max-w-full mb-6">
                <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Local doctors you can trust.
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  IMG is dedicated to providing high quality healthcare in a compassionate, ethical, and caring environment.
                </p>
              </div>
              <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
                <div className="bg-white border-l-4 shadow-sm border-indigo-500">
                  <div className="h-full p-5 border border-l-0 rounded-r">
                    <h6 className="mb-2 font-semibold leading-5">
                      I'll be sure to note that in my log
                    </h6>
                    <p className="text-sm text-gray-900">
                      Lookout flogging bilge rat main sheet bilge water nipper fluke
                      to go on account heave down.
                    </p>
                  </div>
                </div>
                <div className="bg-white border-l-4 shadow-sm border-indigo-600">
                  <div className="h-full p-5 border border-l-0 rounded-r">
                    <h6 className="mb-2 font-semibold leading-5">
                      A business big enough that it could be listed
                    </h6>
                    <p className="text-sm text-gray-900">
                      Those options are already baked in with this model shoot me an
                      email clear.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="text-gray-700">
          <div className="container flex flex-col items-center px-5 pt-8 mx-auto">
            <div className="flex flex-col w-full mb-8 text-left lg:text-center">
              <h1 className="mx-auto text-2xl font-semibold leading-none tracking-tighter text-black lg:w-1/2 sm:text-6xl title-font">
                Health Services
              </h1>
            </div>
          </div>
          <div className="container items-center px-5 pb-8 mx-auto lg:px-24">
            <div className="flex flex-wrap mb-12 text-left">
              <div className="w-full mx-auto lg:w-1/3">
                <div className="p-6">
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
                <div className="p-6">
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
                <div className="p-6">
                  {/* <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-black bg-gray-100 rounded-full">
                  </div> */}
                  <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font">
                    Geriatrics & Pediatrics
                  </h1>
                  <p className="mx-auto text-base font-medium leading-relaxed text-gray-700 ">We provide services for the physical, emotional and social well-being of children and elderly patients with medical and psychosocial problems.
                  </p>
                </div>
              </div>
              <div className="w-full justify-center float-right mt-4 pr-6 place-items-center">
                <div className="w-full self-center text-center">
                <Link to="/services" className="inline-flex items-center justify-center w-50 h-12 px-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-600 hover:bg-indigo-800 focus:shadow-outline focus:outline-none">View all services</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}

export default Index;