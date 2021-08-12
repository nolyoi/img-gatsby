import * as React from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { Helmet } from 'react-helmet';
import sal from 'sal.js';

function Clinic() {
  sal();

  return (
    <div>
      <Nav menuItem="services" />
      <Helmet>
        <meta charSet="utf-8" />
        ( <title>{`Internal Medicine and Geriatrics - Browse our health services.`}</title> )
        <meta name="Description" CONTENT="Internal Medicine and Geriatrics has been proudly serving Northwest Indiana for over 34 years with quality health care." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=Mali:wght@600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>

      <section className="bg-white bg-opacity-0 mt-0 w-full h-1/2">
        <div className="w-full h-1/2 bg-gray900 bg-opacity-95 overflow-hidden text-center relative" style={{ backgroundImage: 'url(./runner.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="container mx-auto my-auto pt-20 h-1/2">
            <div className="w-9/12 mx-auto text-gray-300 mt-0 my-40 items-center content-center content-center h-1/2">
              <h1 className="ml-40 mt-10 mb-4 pr-8 text-center font-sans text-4xl font-bold tracking-tight text-gray-100 sm:text-4xl sm:leading-none"><span data-sal="fade"
                data-sal-delay="300"
                data-sal-duration="1500"
                data-sal-easing="ease-out-quint">IMG</span> <span data-sal="fade"
                  data-sal-delay="900"
                  data-sal-duration="2000"
                  data-sal-easing="ease-out-quint" className="text-white font-bold">Health Clinic</span></h1>
            </div>
          </div>
        </div>
      </section>

      <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-0 lg:py-0">
        <h2 data-sal="fade"
          data-sal-delay="300"
          data-sal-duration="1500"
          data-sal-easing="ease-out-quint" className="mt-20 mb-0 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">Suboxone Clinic</h2>
        <section className="text-gray-600 body-font">
          <div className="container px-5 pb-20 py-6 mt-0 mx-auto">
            <p data-sal="slide-up"
              data-sal-delay="300"
              data-sal-duration="1500"
              data-sal-easing="ease-out-quint" className="text-gray-700 leading-relaxed mb-3">IMG is here throughout all stages of life providing continuity of care. From pediatrics, to general/family, geriatrics, substance abuse, and more.</p>
            {/* <p className="text-gray-700 leading-relaxed mb-3">
              Check Ups
              Wellness Exams
              MRI
              Lab Clinic
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
            </p> */}
           </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Clinic;
