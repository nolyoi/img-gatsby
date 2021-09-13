import * as React from 'react';
import HeroCarousel from 'react-hero-carousel';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faInfo } from '@fortawesome/free-solid-svg-icons';
import BookButton from './BookButton';

function Hero() {
  return (
    <div>
      {/* <section className="bg-white bg-opacity-0 mt-0 w-full h-2/3">
        <div className="w-full h-2/3 bg-gray900 bg-opacity-95 overflow-hidden text-center relative" style={{ backgroundImage: 'url(../runner.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="container mx-auto my-auto pt-20 h-2/3">
            <div className="w-9/12 mx-auto text-gray-300 mt-0 my-40 items-center content-center content-center h-2/3">
              <h1 className="ml-40 mt-10 mb-4 pr-8 text-center font-sans text-4xl font-bold tracking-tight text-gray-100 sm:text-4xl sm:leading-none"><span data-sal="fade"
                data-sal-delay="300"
                data-sal-duration="1500"
                data-sal-easing="ease-out-quint">Welcome to</span> <span data-sal="fade"
                  data-sal-delay="900"
                  data-sal-duration="2000"
                  data-sal-easing="ease-out-quint" className="text-white font-bold">IMG</span></h1>
            </div>
          </div>
        </div>
      </section>

      <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-0 lg:py-0">
        <h2 data-sal="fade"
          data-sal-delay="300"
          data-sal-duration="1500"
          data-sal-easing="ease-out-quint" className="mt-20 mb-0 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">Health Services</h2>
        <section className="text-gray-600 body-font">
          <div className="container px-5 pb-20 py-6 mt-0 mx-auto">
            <p data-sal="slide-up"
              data-sal-delay="300"
              data-sal-duration="1500"
              data-sal-easing="ease-out-quint" className="text-gray-700 text-lg leading-relaxed mb-3">Here at IMG, we believe the most important part of healthcare is providing <Link to="/" className="text-indigo-500 hover:text-indigo-600">continuity of care</Link>. Being able to care for patients at all stages of life allows us to focus more individually on the patient. From pediatrics, to general/family, geriatrics, substance abuse, and more. We accept Medicare, Medicaid, most insurance, and cash payments.</p>

            <p data-sal="slide-up"
              data-sal-delay="300"
              data-sal-duration="1500"
              data-sal-easing="ease-out-quint" className="text-gray-700 text-lg leading-relaxed mb-3">To learn more, please click on one of the health services below.</p>
            <div className="flex flex-wrap -m-8 mt-10">
              <div data-sal="slide-left"
                data-sal-delay="100"
                data-sal-duration="1500"
                data-sal-easing="ease-out-quint" className="mb-8 p-4 lg:w-1/3 md:w-1/2 w-full">
                <Link to="/services/primary-care">
                  <div className="h-full bg-gray-800 shadow-xl bg-opacity-95 hover:bg-opacity-100 hover:bg-blend-overlay px-8 pt-16 pb-16 rounded-lg overflow-hidden text-center relative bg-blend-overlay" style={{ backgroundImage: 'url(../primary-care.png)', backgroundPosition: 'center' }}>
                    <h1 className="title-font sm:text-2xl text-xl font-bold text-gray-100 mb-3">Primary Care</h1>
                    <p className="text-gray-100 leading-relaxed mb-3">We offer a full range of services in order to provide our patients with the best health and wellness care to enjoy life to the fullest.</p>
                    <Link to="/services/primary-care" className="text-indigo-200 inline-flex items-center">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </Link>
              </div>
              <div data-sal="slide-left"
                data-sal-delay="200"
                data-sal-duration="1500"
                data-sal-easing="ease-out-quint" className="mb-8 p-4 lg:w-1/3 md:w-1/2 w-full">
                <Link to="/services/preventive-care">
                <div className="h-full bg-gray-800 shadow-xl bg-opacity-95 hover:bg-opacity-100 hover:bg-blend-overlay px-8 pt-16 pb-16 rounded-lg overflow-hidden text-center relative bg-blend-overlay" style={{ backgroundImage: 'url(../preventive-care.jpg)', backgroundPosition: 'center' }}>
                  <h1 className="title-font sm:text-2xl text-xl font-bold text-gray-100 mb-3">Preventive Care</h1>
                  <p className="text-gray-100 leading-relaxed mb-3">Wellness exams, annual blood work, check ups, and more. Our doctors are happy to help with your preventive care needs.</p>
                  <Link to="/services/preventive-care" className="text-indigo-200 inline-flex items-center">Learn More
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
                </Link>
              </div>
              <div data-sal="slide-left"
                data-sal-delay="300"
                data-sal-duration="1500"
                data-sal-easing="ease-out-quint" className="mb-8 p-4 lg:w-1/3 md:w-1/2 w-full">
                <Link to="/services/suboxone-clinic">
                  <div className="h-full bg-gray-800 shadow-xl bg-opacity-95 hover:bg-opacity-100 hover:bg-blend-overlay px-8 pt-16 pb-16 rounded-lg overflow-hidden text-center relative bg-blend-overlay" style={{ backgroundImage: 'url(../behavioral-health.jpg)', backgroundPosition: 'center' }}>
                    <h1 className="title-font sm:text-2xl text-xl font-bold text-gray-100 mb-3">Substance Abuse</h1>
                    <p className="text-gray-100 leading-relaxed mb-3">We provide Suboxone maintenance treatment along with counseling to those struggling with addiction.</p>
                    <Link to="/services/suboxone-clinic" className="text-indigo-200 inline-flex items-center">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </Link>
              </div>
              <div data-sal="slide-right"
                data-sal-delay="100"
                data-sal-duration="1500"
                data-sal-easing="ease-out-quint" className="mb-8 p-4 lg:w-1/3 md:w-1/2 w-full">
                <Link to="/services/prenatal">
                  <div className="h-full shadow-xl bg-gray-800 bg-opacity-95 hover:bg-opacity-100 hover:bg-blend-overlay px-8 pt-16 pb-16 rounded-lg overflow-hidden text-center relative bg-blend-overlay" style={{ backgroundImage: 'url(../prenatal.jpeg)', backgroundPosition: 'center' }}>

                    <h1 className="title-font sm:text-2xl text-xl font-bold text-gray-100 mb-3">Prenatal</h1>
                    <p className="text-gray-100 leading-relaxed mb-3">We provide Suboxone maintenance treatment along with counseling to those struggling with addiction.</p>
                    <Link to="/services/prenatal" className="text-indigo-200 inline-flex items-center">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>

                  </div>
                </Link>
              </div>
              <div data-sal="slide-right"
                data-sal-delay="200"
                data-sal-duration="1500"
                data-sal-easing="ease-out-quint" className="mb-8 p-4 lg:w-1/3 md:w-1/2 w-full">
                <Link to="/services/pediatrics">
                  <div className="h-full bg-gray-800 shadow-xl bg-opacity-95 hover:bg-opacity-100 hover:bg-blend-overlay px-8 pt-16 pb-16 rounded-lg overflow-hidden text-center relative bg-blend-overlay" style={{ backgroundImage: 'url(../pediatrics.jpeg)', backgroundPosition: 'center' }}>
                    <h1 className="title-font sm:text-2xl text-xl font-bold text-gray-100 mb-3">Pediatrics</h1>
                    <p className="text-gray-100 leading-relaxed mb-3">Our staff understand that it is a privilege to serve your family and to maintain and improve the health of your children.</p>
                    <Link to="/services/pediatrics" className="text-indigo-200 inline-flex items-center">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </Link>
              </div>

              <div data-sal="slide-right"
                data-sal-delay="300"
                data-sal-duration="1500"
                data-sal-easing="ease-out-quint" className="mb-8 p-4 lg:w-1/3 md:w-1/2 w-full">
                <Link to="/services/geriatrics">
                  <div className="h-full bg-gray-800 shadow-xl bg-opacity-95 hover:bg-opacity-100 hover:bg-blend-overlay px-8 pt-16 pb-16 rounded-lg overflow-hidden text-center relative bg-blend-overlay" style={{ backgroundImage: 'url(../geriatrics.jpeg)', backgroundPosition: 'center' }}>

                    <h1 className="title-font sm:text-2xl text-xl font-bold text-gray-100 mb-3">Geriatrics</h1>
                    <p className="text-gray-100 leading-relaxed mb-3">We provide services for the physical, emotional and social well-being of elderly patients with medical and psychosocial problems.</p>
                    <Link to="/services/geriatrics" className="text-indigo-200 inline-flex items-center">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div> */}

<div className="container flex flex-col-reverse md:flex-col mb-24 md:mt-24 mx-auto space-y-6 lg:h-128 lg:py-24 lg:flex-row lg:items-center lg:space-x-6 mt-10">
            <div data-sal="slide-right"
                                data-sal-delay="300"
                                data-sal-duration="1500"
                                data-sal-easing="ease-out-quint" className="w-full lg:w-1/2 mt-10 lg:mt-0">
                <div className="lg:max-w-lg">
                    <h1 className="text-2xl font-medium tracking-wide text-gray-800 dark:text-white lg:text-4xl">Schedule your next doctor appointment today</h1>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Being able to care for patients at all stages of life allows us to focus individually on the patient.</p>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">We accept Medicare, Medicaid, most insurance, and cash payments.</p>
                    <div className="grid gap-6 mt-8 sm:grid-cols-2">
                        <div className="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>

                            <span>Prenatal</span>
                        </div>

                        <div className="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>

                            <span>Pediatrics</span>
                        </div>

                        <div className="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>

                            <span>Primary Care</span>
                        </div>

                        <div className="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>

                            <span>Geriatrics</span>
                        </div>

                        <div className="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>

                            <span>Preventive Care</span>
                        </div>

                        <div className="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>

                            <span>Substance Abuse</span>
                        </div>
                        <div className="col-span-2 text-center mt-6">
                          <Link to="/services" className="inline-flex mb-4 items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-gray-700 transition duration-200 rounded bg-gray-100 hover:bg-gray-200 focus:shadow-outline focus:outline-none" aria-label="Book Appointment" title="Book Appointment"><FontAwesomeIcon icon={faInfo} size="md" className="mr-2" /> <span className="mt-1">Learn More</span></Link>
                            <BookButton nav="true" />
                        </div>
                    </div>
                </div>
            </div>
    
            <div className="flex items-center justify-center justify-items-center w-full bg-blend-overlay bg-white opacity-90 h-full mb-10 lg:mb-0 lg:w-1/2">
                <img data-sal="slide-left"
                                data-sal-delay="350"
                                data-sal-duration="1500"
                                data-sal-easing="ease-out-quint" className="object-cover object-center w-full h-96 max-w-2xl rounded-md" src="../dr-happy.jpeg" alt="glasses photo" />
            </div>
        </div>
      {/*  */}
    </div>
  );
}

export default Hero;
