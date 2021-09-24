// Add cont of care

import * as React from 'react';
import { Link } from 'gatsby';
import sal from 'sal.js';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { Helmet } from 'react-helmet';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BookButton from '../../components/BookButton';

function PrimaryCare() {
  React.useEffect(() => {
    sal();
  }, []);

  return (
    <div>
      <Nav menuItem="services" />
      <Helmet>
        <meta charSet="utf-8" />
        ( <title>{`Internal Medicine and Geriatrics - Primary Care & Family Practice`}</title> )
        <meta name="Description" content="IMG provides primary and family care services to Portage, Indiana and surrounding communities. Learn more about what we offer." />
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

      <section className="bg-white bg-opacity-0 mt-0 w-full h-2/3 shadow-lg">
        <div className="w-full h-full bg-gray-900 bg-opacity-100 overflow-hidden text-center relative" style={{ backgroundImage: 'url(../../primary-care2.jpeg)', backgroundSize: 'cover', backgroundPosition: 'top' }}>
          <div className="m-auto h-full h-2/3">
            <div className="w-9/12 mx-auto text-gray-300 mt-0 py-52 items-center content-center content-center h-full">
              <h1 className="mt-0 py-10 pl-10 text-center font-sans text-4xl font-bold tracking-tight text-blue-700 sm:text-4xl sm:leading-none"><span data-sal="fade"
                data-sal-delay="300"
                data-sal-duration="1500"
                data-sal-easing="ease-out-quint"></span> <span data-sal="fade"
                  data-sal-delay="900"
                  data-sal-duration="2000"
                  data-sal-easing="ease-out-quint" className="text-white font-bold">Primary & Family Care</span></h1>
            </div>
          </div>
        </div>
      </section>

      <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-0 lg:py-0 mb-20">
        <div className="container flex flex-col md:flex-row mx-auto ">
          <section className="w-full md:w-8/12 text-gray-600 body-font relative my-20" id="primary-care">
            <h2 className="font-sans text-xl font-bold tracking-tight text-gray-800 sm:text-3xl sm:leading-none mb-8">Primary and Family Care</h2>
            <div className="relative flex rounded-lg items-center justify-center overflow-hidden object-fit mx-auto h-96 mr-8 mb-8"><img src="../../happy-people.jpeg" className="object-cover object-center w-full " alt="avatar" /></div>
            <p className="mx-2 pb-4 text-lg">We offer a full range of services in order to provide our patients with the best health and wellness care to enjoy life to the fullest.</p>
            <p className="mx-2 pb-4 text-lg">For the best medical care in Portage, Indiana and the surrounding Northwest Indiana area, <Link to="/book-appointment/current-patient" className="text-blue-600 hover:text-blue-600">schedule an appointment with us today</Link>. </p>
            <p className="mx-2 pb-4 text-lg">We strive to stay up-to-date with new medical information regarding common health concerns. Our staff is committed to providing our patients with access to high quality care and ensuring a trusting relationship with them.</p>
            <p className="mx-2 pb-4 text-lg"> At our practice we make sure that our patients get a detailed explanation of their current health condition in terms they understand. We know how important it is to stay healthy, both inside and out, and our team makes every effort to ensure you remain in peak physical health.</p>
            <p className="mx-2 pb-4 text-lg">Internal Medicine & Geriatrics proudly offers pediatric, family, and adult medical services, focusing on Preventive and Primary Care health needs, including but not limited to:</p>

            <div className="mx-2 pl-8 py-6 text-lg rounded-xl bg-gray-50">
              <img src="../../medical-cross.png" className="h-40 float-right mr-8 mt-8" />
              <ul className="list-inside list-disc">
                <li>Nutrition Counseling</li>
                <li>First Aid Treatments</li>
                <li>School, College and Employment Physicals</li>
                <li>Blood Pressure Treatment</li>
                <li>Diabetes Management</li>
                <li>Immunizations</li>
                <li>Annual Wellness Visits</li>
                <li>And more!</li>
              </ul>
            </div>
            <BookButton />
          </section>

          <section className="w-full md:w-4/12 text-gray-600 body-font relative my-20 px-8" id="blog-sidebar">
            <div className="mb-4">
              <h2 className="font-sans text-xl font-bold tracking-tight text-gray-800 sm:text-3xl sm:leading-none mb-8"></h2>
            </div>
            <div className="pl-4 text-white">
              <div className="rounded-xl px-6 py-6 bg-blue-50 drop-shadow-lg text-gray-500">
                {/* <h4 className="mb-4 text-xl font-bold tracking-wide">Address</h4> */}
                <p className="mb-4 "><strong className="tracking-wide">Portage Office</strong><br /> 2640 Hamstrom Road
                  Portage, IN. 46368  <br />
                  (219) 762-4423</p>
                <p><strong className="tracking-wide">Gary Office</strong><br /> 1400 Broadway
                  Gary, IN. 46408 <br />
                  (219) 884-4900</p>
              </div>

              <div className="rounded-xl px-6 py-6 bg-green-50 drop-shadow-lg text-gray-500 mt-8">
                <h4 className="mb-2 tracking-wide"><strong>Office Hours</strong></h4>
                <div className="w-full">
                  <table class="table-auto w-11/12 mx-auto">
                    <tr><td>Monday:</td><td>9a-5p</td></tr>
                    <tr><td>Tuesday:</td><td>9a-5p</td></tr>
                    <tr><td className="pr=4">Wednesday:</td><td>9a-5p</td></tr>
                    <tr><td>Thursday:</td><td>9a-5p</td></tr>
                    <tr><td>Friday:</td><td>9a-4p</td></tr>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PrimaryCare;
