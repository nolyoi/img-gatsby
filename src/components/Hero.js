import * as React from 'react';
import HeroCarousel from 'react-hero-carousel';

function Hero() {
  return (
    <div className="bg-white bg-opacity-0 mt-0 w-full z-50">
    <HeroCarousel interval={7000} height="60vh">
    <img
      src="https://reliantmedicalgroup.org/wp-content/uploads/2014/04/family-header.png?x14269"
      width="100%"
    />
    <img
      src="http://old-www.islandhospital.com/wp-content/uploads/2015/10/Find-Doctor-Header-Images-2.jpg"
      width="100%"
    />
    <img
      src="https://reliantmedicalgroup.org/wp-content/uploads/2014/04/family-header.png?x14269"
      width="100%"
      
    />
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
