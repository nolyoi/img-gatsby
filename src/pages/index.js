import * as React from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { Helmet } from "react-helmet"

function Index() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        ( <title>{`Internal Medicine and Geriatric - Serving Northwest Indiana for ${(new Date().getFullYear() - 1987) + "+"} years.</title>`}</title> )v
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=Mali:wght@600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      <Nav menuItem="index" />
      <Hero />
      <div className="flex flex-col mx-auto">
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
            <div className="flex flex-col w-full mb-12 text-left lg:text-center">
              <h2 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font">a great header right here</h2>
              <h1 className="mx-auto text-2xl font-semibold leading-none tracking-tighter text-black lg:w-1/2 sm:text-6xl title-font">
                A Long headline to switch your visitors into customers.
              </h1>
            </div>
          </div>
          <div className="container items-center px-5 pb-8 mx-auto lg:px-24">
            <div className="flex flex-wrap mb-12 text-left">
              <div className="w-full mx-auto lg:w-1/3">
                <div className="p-6">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-black bg-gray-100 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 icon icon-tabler icon-tabler-aperture" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <circle cx="12" cy="12" r="9"></circle>
                      <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                      <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)"></line>
                      <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)"></line>
                      <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)"></line>
                      <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)"></line>
                    </svg>
                  </div>
                  <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font">
                    Family & General Practice
                  </h1>
                  <p className="mx-auto text-base font-medium leading-relaxed text-gray-700 ">You're about to launch soon and must be 100% focused on your product. Don't loose precious days designing, coding the landing page and testing .
                  </p>
                </div>
              </div>
              <div className="w-full mx-auto lg:w-1/3">
                <div className="p-6">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-black bg-gray-100 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 icon icon-tabler icon-tabler-aperture" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <circle cx="12" cy="12" r="9"></circle>
                      <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                      <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)"></line>
                      <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)"></line>
                      <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)"></line>
                      <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)"></line>
                    </svg>
                  </div>
                  <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font">
                    Mental Health & Substance Abuse
                  </h1>
                  <p className="mx-auto text-base font-medium leading-relaxed text-gray-700 ">You're about to launch soon and must be 100% focused on your product. Don't loose precious days designing, coding the landing page and testing .
                  </p>
                </div>
              </div>
              <div className="w-full mx-auto lg:w-1/3">
                <div className="p-6">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-black bg-gray-100 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 icon icon-tabler icon-tabler-aperture" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <circle cx="12" cy="12" r="9"></circle>
                      <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                      <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)"></line>
                      <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)"></line>
                      <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)"></line>
                      <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)"></line>
                    </svg>
                  </div>
                  <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font">
                    Geriatrics & Pediatrics
                  </h1>
                  <p className="mx-auto text-base font-medium leading-relaxed text-gray-700 ">You're about to launch soon and must be 100% focused on your product. Don't loose precious days designing, coding the landing page and testing .
                  </p>
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