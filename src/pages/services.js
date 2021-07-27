import * as React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

function Services() {
  return (
    <div>
      <Nav menuItem="services" />
      <Helmet>
        <meta charSet="utf-8" />
        ( <title>{`Internal Medicine and Geriatric - Browse our health services./title>`}</title> )
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=Mali:wght@600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>

      <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-0 lg:py-0">
        <h2 className="mt-20 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">Health Services</h2>
        <section className="text-gray-600 body-font">
          <div className="container px-5 pb-24 py-12 mx-auto">
            <p>
            Check Ups
Wellness Exams
MRI
Lab Services
Heart
Lung
Stroke
Diabetes
Kidney
EKG
Asthma
Headache
Infection
Liver Diseases
Impotence and Sexual Problems
Stomach
Arthritis
Blood Problems
High Blood Pressure
Stress
Adult Internal Medicine
Hypertension
Heart Disease
Telemedicine
            </p>
            <div className="flex flex-wrap -m-4 mt-20">
              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-16 rounded-lg overflow-hidden text-center relative">
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Primary Care</h1>
                  <p className="leading-relaxed mb-3">We offer a full range of services in order to provide our patients with the best health and wellness care to enjoy life to the fullest.</p>
                  <a className="text-indigo-500 inline-flex items-center">Learn More
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>

                </div>
              </div>
              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-16 rounded-lg overflow-hidden text-center relative">
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Preventative Care</h1>
                  <p className="leading-relaxed mb-3">Wellness exams, annual blood work, check ups, and more.</p>
                  <a className="text-indigo-500 inline-flex items-center">Learn More
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" stroke-linecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>

                </div>
              </div>
              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-16 rounded-lg overflow-hidden text-center relative">
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Behavioral Health</h1>
                  <p className="leading-relaxed mb-3">We provide Suboxone maintenance treatment along with counseling to those struggling with addiction.</p>
                  <a className="text-indigo-500 inline-flex items-center">Learn More
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" stroke-linecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
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

export default Services;
