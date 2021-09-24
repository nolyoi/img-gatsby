import * as React from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { Helmet } from 'react-helmet';
import sal from 'sal.js';
import { Link } from 'gatsby';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Services() {
  React.useEffect(() => {
    sal();
  }, []);

  return (
    <div>
      <Nav menuItem="services" />
      <Helmet>
        <meta charSet="utf-8" />
        ( <title>{`Internal Medicine and Geriatrics - Browse our health services.`}</title> )
        <meta name="Description" content="Internal Medicine and Geriatrics has been proudly serving Northwest Indiana for over 34 years with quality health care." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=Mali:wght@600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XFF5TPVP9Y"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-XFF5TPVP9Y');
          `}
        </script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-204995244-1"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-204995244-1');
          `}
        </script>
      </Helmet>

      <section className="bg-white bg-opacity-0 mt-0 w-full h-1/2">
        <div className="w-full h-1/2 bg-gray900 bg-opacity-95 overflow-hidden text-center relative" style={{ backgroundImage: 'url(../runner.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="container mx-auto my-auto py-40 h-full">
            <div className="w-9/12 mx-auto text-gray-300 mt-0 items-center content-center content-center h-full">
              <h1 className="ml-40 mt-10 mb-4 pr-8 text-center font-sans text-4xl font-bold tracking-tight text-gray-100 sm:text-4xl sm:leading-none"><span data-sal="fade"
                data-sal-delay="300"
                data-sal-duration="1500"
                data-sal-easing="ease-out-quint">IMG</span> <span data-sal="fade"
                  data-sal-delay="900"
                  data-sal-duration="2000"
                  data-sal-easing="ease-out-quint" className="text-white font-bold">Health Services</span></h1>
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
              data-sal-easing="ease-out-quint" className="text-gray-700 text-lg leading-relaxed mb-3">Here at IMG, we believe the most important part of healthcare is providing <Link to="/" className="text-blue-500 hover:text-blue-600">continuity of care</Link>. Being able to care for patients at all stages of life allows us to focus more individually on the patient. From pediatrics, to general/family, geriatrics, substance abuse, and more. We accept Medicare, Medicaid, most insurance, and cash payments.</p>

            <p data-sal="slide-up"
              data-sal-delay="300"
              data-sal-duration="1500"
              data-sal-easing="ease-out-quint" className="text-gray-700 text-lg leading-relaxed mb-3">To learn more, please click on one of the health services below.</p>
            {/* <p className="text-gray-700 leading-relaxed mb-3">
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
            </p> */}
            <div className="flex flex-wrap -m-8 mt-10">
              <div data-sal="slide-left"
                data-sal-delay="100"
                data-sal-duration="1500"
                data-sal-easing="ease-out-quint" className="mb-8 p-4 lg:w-1/3 md:w-1/2 w-full">
                <Link to="/services/primary-care">
                  <div className="h-full bg-gray-800 shadow-xl bg-opacity-95 hover:bg-opacity-100 hover:bg-blend-overlay px-8 pt-16 pb-16 rounded-lg overflow-hidden text-center relative bg-blend-overlay" style={{ backgroundImage: 'url(../primary-care.png)', backgroundPosition: 'center' }}>
                    <h1 className="title-font sm:text-2xl text-xl font-bold text-gray-100 mb-3">Primary Care</h1>
                    <p className="text-gray-100 leading-relaxed mb-3">We offer a full range of services in order to provide our patients with the best health and wellness care to enjoy life to the fullest.</p>
                    <Link to="/services/primary-care" className="text-blue-200 inline-flex items-center">Learn More
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
                  <Link to="/services/preventive-care" className="text-blue-200 inline-flex items-center">Learn More
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
                    <Link to="/services/suboxone-clinic" className="text-blue-200 inline-flex items-center">Learn More
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
                    <Link to="/services/prenatal" className="text-blue-200 inline-flex items-center">Learn More
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
                    <Link to="/services/pediatrics" className="text-blue-200 inline-flex items-center">Learn More
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
                    <Link to="/services/geriatrics" className="text-blue-200 inline-flex items-center">Learn More
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
      </div>
      <Footer />
    </div>
  );
}

export default Services;


// No Insurance - Reasonable Rate 
// Hospital, Home, Nursing Home, 