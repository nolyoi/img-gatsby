import * as React from 'react';
import HeroCarousel from 'react-hero-carousel';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRecycle, faSyringe,faClinicMedical } from '@fortawesome/free-solid-svg-icons'

function Hero() {
  return (
    <div className="flex bg-white bg-opacity-0 mt-0 w-full h-screen">
      <HeroCarousel interval={12000}>
        {/* All info on one slide then sub-slides.
        Addiction
        Continuity of Care
         */}
        <div className="flex w-full h-screen bg-gray-800 overflow-hidden text-center relative" style={{ backgroundSize: 'cover', backgroundPosition: 'top' }}>
          <div className="my-auto flex flex-col lg:flex-row w-full justify-center">

            <div className="max-w-full mb-6" data-sal="slide-up"
                data-sal-delay="300"
                data-sal-duration="1500"
                data-sal-easing="ease-out-quint" className="max-w-sm mx-4 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <img className="object-cover object-center w-full h-56" src="./continuity.png" alt="avatar" />

              <div className="flex items-center px-6 py-3 bg-gray-900">
                <div className="mx-auto w-full">
                  <FontAwesomeIcon icon={faRecycle} className="mr-2 text-white" />

                  <h1 className="mx-2 text-lg font-semibold text-center text-white inline">Continuity of Care</h1>
                </div>
              </div>

              <div className="px-4 py-4">
                <p className="py-4 text-gray-700 dark:text-gray-400 text-left">IMG provides pediatric, family, and geriatric services. We are the only healthcare provider that provides care through all stages of life.</p>
              </div>
            </div>
            <div data-sal="slide-up"
                data-sal-delay="300"
                data-sal-duration="1500"
                data-sal-easing="ease-out-quint" className="max-w-sm mx-4 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <img className="object-cover object-center w-full h-56" src="./addiction.jpeg" alt="avatar" />

              <div className="flex items-center px-6 py-3 bg-gray-900">
                <div className="mx-auto w-full">
                  <FontAwesomeIcon icon={faSyringe} className="mr-2 text-white" />

                  <h1 className="mx-2 text-lg font-semibold text-center text-white inline">Substance Abuse</h1>
                </div>
              </div>
              <div className="px-4 py-4">
                <p className="py-4 text-gray-700 dark:text-gray-400 text-left">If you are struggling with the disease of addiction, please reach out to us today. Our suboxone clinic is located in Portage, Indiana.</p>
              </div>
            </div>
            <div data-sal="slide-up"
                data-sal-delay="300"
                data-sal-duration="1500"
                data-sal-easing="ease-out-quint" className="max-w-sm mx-4 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <img className="object-cover object-center w-full h-56" src="./placeholder-dr.jpeg" alt="avatar" />

              <div className="flex items-center px-6 py-3 bg-gray-900">
                <div className="mx-auto w-full">
                  <FontAwesomeIcon icon={faClinicMedical} className="mr-2 text-white" />
                  <h1 className="mx-2 mt-2 text-lg font-semibold text-center text-white inline">Family Practice</h1>
                </div>
              </div>
              <div className="px-4 py-4">
                <p className="py-4 text-gray-700 dark:text-gray-400 text-left">We now offer general/family services to provide our patients with the best health and wellness care. Welcome to our new doctor Truptiben Patel!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex my-auto justify-items-end items-center flex-row-reverse w-full h-screen bg-white bg-opacity-50 bg-blend-overlay overflow-hidden text-center relative" style={{ backgroundImage: 'url(./continuity.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'left' }}>
          <div className="w-6/12 pr-10 mt-60 text-gray-800 items-end content-center h-full">
            <h1 className="lg:mt-12 sm:mt-2 sm:mb-2 lg:mb-4 text-center font-sans text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl sm:leading-none">Continuity of <span className="text-red-600 font-bold">Care</span></h1>
            <p>IMG provides pediatric, family, and geriatric services. We are the only healthcare provider that provides care through all stages of life.</p>
            <Link to="/services" className="inline-flex mt-8 items-center justify-center w-50 h-10 px-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-600 hover:bg-indigo-800 focus:shadow-outline focus:outline-none">View all services</Link>
          </div>
        </div>
        <div className="flex w-full h-screen bg-gray-800 bg-opacity-70 overflow-hidden text-center relative" style={{ backgroundImage: 'url(./addiction.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="m-auto">
            <div className="w-9/12 mx-auto text-gray-300 items-center content-center h-full">
              <img src="./suboxone.png" height="48%" className="h-48 lg:float-right lg:mx-0 mx-auto lg:-mt-8 sm:mb-8 lg:mb-20 lg:pl-10" />
              <h1 className="lg:mt-12 sm:mt-2 sm:mb-2 lg:mb-4 lg:pr-8 text-center font-sans text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl sm:leading-none">Struggling with Addiction? Call the <span className="text-indigo-600 font-bold">IMG Suboxone Clinic</span>!</h1>
              <p>Our Suboxone clinic is conveniently located just off of Willowcreek Ave in Portage, Indiana. If you are struggling with the disease of addiction, please reach out to us today at <a href="tel:12192924501" className="font-bold text-orange-500 hover:text-indigo-300">(219) 292-4501</a>.</p>
              <Link to="/services/suboxone-clinic" className="inline-flex mt-8 items-center justify-center w-50 h-10 px-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-600 hover:bg-indigo-800 focus:shadow-outline focus:outline-none">Learn more</Link>
            </div>
          </div>
        </div>
        <div className="flex w-full h-screen bg-gray-800 bg-opacity-70 overflow-hidden text-center relative" style={{ backgroundImage: 'url(./glove-heart.jpeg)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'left', backgroundColor: '#EBEEED' }}>
          <div className="m-auto">
            <div className="w-9/12 mx-auto text-gray-800 items-center content-center h-full">
              <div className="relative flex items-center justify-center overflow-hidden object-cover object-center w-60 h-40 mx-auto rounded-xl"><img src="./patel.jpeg" className="absolute w-full " alt="avatar" /></div>
              <h1 className="lg:mt-12 sm:mt-2 sm:mb-2 lg:mb-4 lg:pr-8 text-center font-sans text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl sm:leading-none">Welcome to our new doctor, <span className="text-indigo-600 font-bold">Truptiben Patel, MD</span>!</h1>
              <p>Dr. Patel is a family practitioner who has just recently joined our practice.</p>
            </div>
          </div>
        </div>
      </HeroCarousel>
    </div>
  );
}

export default Hero;
