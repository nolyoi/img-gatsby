import * as React from 'react';
import HeroCarousel from 'react-hero-carousel';

function Hero() {
  return (
    <div className="bg-white bg-opacity-0 mt-0 w-full">
      <HeroCarousel interval={3000} height="600px">
        <div className="w-full bg-gray-800 shadow-xl bg-opacity-70 text-center relative bg-blend-overlay" style={{ backgroundImage: 'url(./recovery.webp)', backgroundSize: 'cover', backgroundPosition: 'center', height: '600px' }}>
          <div className="container mx-auto">
            <div className="w-8/12 mx-auto pt-14 text-gray-300">
              <img src="./suboxone.png" height="48%" className="h-48 float-right" />
              <h1 className="mt-10 mb-4 pr-8 font-sans text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl sm:leading-none">Struggling with Addiction? Call the <span className="text-indigo-600 font-bold">IMG Suboxone Clinic</span>!</h1>
              <p>Our Suboxone clinic is conveniently located just off of Willowcreek Ave in Portage, Indiana. If you are struggling with the diseas of addiction, please reach out to us today at <a href="tel:12192924501" className="font-bold text-orange-500 hover:text-indigo-300">(219) 292-4501</a>.</p>
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-200 overflow-hidden text-center relative" style={{ backgroundImage: 'url(./furly-bg.png)', height: '600px' }}>
          <div className="container mx-auto pt-10">
            <div className="w-8/12 mx-auto pt-14">
              <img src="./patel.jpeg" className="w-48 h-48 rounded-full float-left" alt="avatar" />
              <h1 className="mt-6 mb-4 font-sans text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl sm:leading-none">Welcome to our new doctor, <span className="text-indigo-600 font-bold">T. Patel, MD</span>!</h1>
              <p>Dr. Patel is a family practitioner who has just recently joined our practice.</p>
            </div>
          </div>
        </div>
      </HeroCarousel>
    </div>
    // <div className="flex bg-white bg-opacity-0 mt-4 lg:max-w-screen-xl mx-auto"
    //   style={
    //     { height: "600px" }
    //   }>
    //   <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
    //     <div>
    //       <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">Doctors that
    //         <span className="text-red-500 font-bold"> care</span>
    //       </h2>
    //       <p className="mt-2 text-sm text-gray-500 md:text-base">Internal Medicine & Geriatrics, in Portage, IN, is the area's leading physician serving Portage, Hobart, Valparaiso and surrounding areas since 1987. We offer checks ups, wellness exams, lab services and more.
    //       </p>
    //       <div className="flex justify-center lg:justify-start mt-6">
    //         <a className="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800" href="#">Contact Us</a>
    //         <a className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400" href="#">Learn More</a>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="hidden rounded sm:block lg:block lg:w-1/2">
    //     <div className="h-full rounded object-cover"
    //       style={
    //         {
    //           backgroundImage: "url(https://oldedelmarsurgical.com/wp-content/uploads/2019/02/doctor-patient-relationship.png)",
    //           backgroundSize: "cover"
    //         }
    //       }>
    //       <div className="h-full rounded bg-black opacity-25"></div>
    //     </div>
    //   </div>
    // </div>

  );
}

export default Hero;
