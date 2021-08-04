import * as React from 'react';
import HeroCarousel from 'react-hero-carousel';

function Hero() {
  return (
    <div className="bg-white bg-opacity-0 mt-0 w-full">
    <HeroCarousel interval={6000} height="380px">
    <div className="w-full bg-gray-800 overflow-hidden text-center relative bg-blend-overlay bg-opacity-50" style={{backgroundImage: 'url("https://reliantmedicalgroup.org/wp-content/uploads/2014/04/family-header.png?x14269")', backgroundPosition: 'center', backgroundSize: 'cover', height: '400px'}}>
      <div className="container mx-auto pt-10 grid grid-cols-3 gap-4">
        <div className="col-span-1">
        <div className="bg-indigo-600 bg-opacity-90 rounded-lg p-4">
        <h1 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">Welcome to our new GP, Dr. Patel!</h1>
        <button className="px-4 py-3 bg-white text-indigo-600 border-2 border-black text-xs font-semibold hover:border-white hover:text-white hover:bg-indigo-800" href="#">More</button>
        </div>
        </div>
      </div>
    </div>
    <div className="w-full bg-gray-800 overflow-hidden text-center relative bg-blend-overlay bg-opacity-50" style={{backgroundImage: 'url("http://old-www.islandhospital.com/wp-content/uploads/2015/10/Find-Doctor-Header-Images-2.jpg")', backgroundPosition: 'center', backgroundSize: 'cover', height: '400px'}}>
      <div className="container mx-auto pt-10">
        <h1 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">Welcome to our new GP, Dr. Patel!</h1>
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
