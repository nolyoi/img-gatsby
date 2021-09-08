import * as React from 'react';
import { Link } from 'gatsby';
import sal from 'sal.js';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { Helmet } from 'react-helmet';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Pediatrics() {
  React.useEffect(() => {
    sal();
  }, []);

  return (
    <div>
      <Nav menuItem="services" />
      <Helmet>
        <meta charSet="utf-8" />
        ( <title>{`Internal Medicine and Pediatrics - Pediatric Medicine`}</title> )
        <meta name="Description" content="IMG provides geriatric health services in Portage and Gary Indiana." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=Mali:wght@600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-5NSD8J3W2V"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-5NSD8J3W2V');
          `}
        </script>
      </Helmet>

      <section className="bg-white bg-opacity-0 mt-0 w-full h-1/2 shadow-lg">
        <div className="w-full h-1/2 bg-gray-900 bg-opacity-100 overflow-hidden text-center relative" style={{ backgroundImage: 'url(../pediatrics-kids.jpeg)', backgroundSize: 'cover', backgroundPosition: '0% 10%' }}>
          <div className="container mx-auto my-auto pt-20 h-1/2">
            <div className="w-9/12 mx-auto text-gray-300 mt-0 my-40 items-center content-center content-center h-1/2">
              <h1 className="mt-20 pb-10 pr-8 text-center font-sans text-4xl font-bold tracking-tight text-indigo-600 sm:text-4xl sm:leading-none"><span data-sal="fade"
                data-sal-delay="300"
                data-sal-duration="1500"
                data-sal-easing="ease-out-quint" style={{ textShadow: '1px 1px 3px #888' }}>IMG</span> <span data-sal="fade"
                  data-sal-delay="900"
                  data-sal-duration="2000"
                  data-sal-easing="ease-out-quint" className="text-white font-bold" style={{ textShadow: '1px 1px 3px #666' }} >Pediatric Medicine</span></h1>
            {/* <p className="text-gray-800" style={{ textShadow: '1px 1px 3px #FFF' }}>Your child's health is as important to us as it is to you. We look forward to providing you with excellent medical care your child deserves.</p> */}
            </div>
          </div>
        </div>
      </section>

      <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-0 lg:py-0 mb-20">
        <div className="container flex mx-auto ">
          <section className="w-8/12 text-gray-600 body-font relative my-20" id="blog">
            <h2 className="font-sans text-xl font-bold tracking-tight text-gray-800 sm:text-3xl sm:leading-none mb-8">Primary Care</h2>

            <p className="mx-2 pb-4 text-lg">Pediatrics is the branch of medicine dealing with the health and medical care of infants, children, and adolescents from birth up to the age of 18.</p>
            <p className="mx-2 pb-4 text-lg">At IMG, we consider it both a great joy and responsibility to care for children. Most of us are parents ourselves, so we strive to be understanding and available to the families we are privileged to serve. We are honored that you have chosen us as your child's primary medical provider and are confident that you will be pleased with the quality of care and service that we can provide you and your family.</p>
            <p className="mx-2 pb-4 text-lg">A vital part of our service to children begins with our outstanding staff who works hard to manage and maintain a professional, caring and supportive environment for our patients in a timely manner. Our doctors are lifelong learners. Not only have they received advanced medical training in pediatrics, they continually pursue ongoing education to stay abreast of the latest in child health care.</p>
            <p className="mx-2 pb-4 text-lg">Your child's health is as important to us as it is to you. We look forward to providing you with excellent medical care your child deserves.</p>
            <p className="mx-2 mt-8 pb-4 text-2xl text-center transform -rotate-1"><Link to="/contact-us" className="inline-flex items-center mt-8 items-center justify-center w-50 h-10 px-8 font-semibold tracking-wide text-white transition duration-200 rounded shadow-lg bg-green-500 hover:bg-green-600 focus:shadow-outline focus:outline-none py-8"><FontAwesomeIcon icon={faCalendarAlt} size="lg" className="mr-4" /> <span className="mt-1">Book Now!</span></Link></p>
          </section>

          <section className="w-4/12 text-gray-600 body-font relative my-20 px-8" id="blog-sidebar">
            <div className="mb-4">
              <h2 className="font-sans text-xl font-bold tracking-tight text-gray-800 sm:text-3xl sm:leading-none mb-8">Information</h2>
            </div>
            <div className="pl-4">
              <h4 className="mb-4 text-xl font-bold">Address</h4>
              <p className="mb-4 text-xl"><strong>Portage Office:</strong> 2640 Hamstrom Road
                Portage, IN. 46368</p>
              <p className="mb-8 text-xl"><strong>Gary Office:</strong> 3535 Broadway
                Gary, IN. 46408</p>
              <h4 className="mb-4 text-xl"><strong>Office Hours</strong></h4>
              <table class="table-auto min-w-full mb-10">
                <tr><td>Monday:</td><td>9a-5p</td></tr>
                <tr><td>Tuesday:</td><td>9a-5p</td></tr>
                <tr><td className="pr=4">Wednesday:</td><td>9a-5p</td></tr>
                <tr><td>Thursday:</td><td>9a-5p</td></tr>
                <tr><td>Friday:</td><td>9a-4p</td></tr>
              </table>

            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Pediatrics;
