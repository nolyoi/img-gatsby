import * as React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

function Locations() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        ( <title>{`Internal Medicine and Geriatric - Our office locations in Northwest Indiana`}</title> )
        <meta name="Description" content="Our various locations in Portage and Gary Indiana." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
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

      <Nav menuItem="locations" />

      <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-0 lg:py-0">
        <div className="container mx-auto divide-y-2 divide-solid divide-grey-500">
          <section className="text-gray-600 body-font relative" id="portage">
            <h2 className="mt-20 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">Office Locations</h2>
            <div className="container px-5 py-24 mx-auto flex flex-wrap h-100">
              <div className="mx-auto w-100 lg:w-1/2 sm:w-1/2 mb-8 h-100 w-full rounded-lg sm:mr-10 p-10 flex items-end justify-start relative">
                <iframe width="100%" height="100%" className="relative inset-0 bg-gray-200" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Internal%20Medicine%20and%20Geriatrics%20Portage%20In+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>

              </div>
              <div className="my-auto h-100 lg:w-1/3 md:w-1/2 w-full bg-white flex flex-col md:ml-auto w-full md:py-2 mt-0 md:mt-0">
                <h2 className="mb-8 font-sans text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl sm:leading-none font-roboto">Portage Office</h2>
                <p className="mb-8 text-xl">2640 Hamstrom Road
                  Portage, IN. 46368</p>
                <h3 className="mb-4 text-xl tracking-wide"><strong>Office Hours</strong></h3>
                <table className="table-auto min-w-full mb-20">
                  <tr><td>Monday:</td><td>9a-5p</td></tr>
                  <tr><td>Tuesday:</td><td>9a-5p</td></tr>
                  <tr><td className="pr=4">Wednesday:</td><td>9a-5p</td></tr>
                  <tr><td>Thursday:</td><td>9a-5p</td></tr>
                  <tr><td>Friday:</td><td>9a-4p</td></tr>
                </table>

                <p className="mb-20 text-5xl"> <a href="tel:12197624423" className="text-indigo-500 cursor-pointer hover:text-orange-500 font-marker">(219)762-4423</a></p>
              </div>
            </div>
          </section>
          <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto flex flex-wrap h-100" id="gary">
              <div className="mx-auto w-100 lg:w-1/2 sm:w-1/2 mb-8 h-100 w-full rounded-lg sm:mr-10 p-10 flex items-end justify-start relative">
                <iframe width="100%" height="100%" className="relative inset-0 bg-gray-200" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=3535%20Broadway%20Gary%20In+(Internal%20Medicine)&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>

              </div>
              <div className="my-auto h-100 lg:w-1/3 md:w-1/2 w-full bg-white flex flex-col md:ml-auto w-full md:py-2 mt-0 md:mt-0">
                <h2 className="mb-8 font-sans text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl sm:leading-none font-roboto">Gary Office</h2>
                <p className="mb-8 text-xl">1400 Broadway
                  Gary, IN. 46408</p>
                <h3 className="mb-4 text-xl tracking-wide"><strong>Office Hours</strong></h3>
                <table className="table-auto min-w-full mb-20">
                  <tr><td>Monday:</td><td>9a-5p</td></tr>
                  <tr><td>Tuesday:</td><td>9a-5p</td></tr>
                  <tr><td className="pr=4">Wednesday:</td><td>9a-5p</td></tr>
                  <tr><td>Thursday:</td><td>9a-5p</td></tr>
                  <tr><td>Friday:</td><td>9a-4p</td></tr>
                </table>

                <p className="mb-20 text-5xl"> <a href="tel:882-2305" className="text-indigo-500 cursor-pointer hover:text-orange-500 font-marker">(219)882-2305</a></p>
              </div>
            </div>
          </section>
          <section className="text-gray-600 body-font relative" id="suboxone">
            <div className="container px-5 py-24 mx-auto flex flex-wrap h-100">
              <div className="mx-auto w-100 lg:w-1/2 sm:w-1/2 mb-8 h-100 w-full rounded-lg sm:mr-10 p-10 flex items-end justify-start relative">
                <iframe width="100%" height="100%" className="relative inset-0 bg-gray-200" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=New%20Beginnings%20Portage%20In%20Lancer+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>

              </div>
              <div className="my-auto h-100 lg:w-1/3 md:w-1/2 w-full bg-white flex flex-col md:ml-auto w-full md:py-2 mt-0 md:mt-0">
                <h2 className="mb-8 font-sans text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl sm:leading-none font-roboto">Suboxone Clinic</h2>
                <p className="mb-8 text-xl"> 3190 Lancer Street
                  Portage, IN. 46368</p>
                <h3 className="mb-4 text-xl tracking-wide"><strong>Office Hours</strong></h3>
                <table className="table-auto min-w-full mb-20">
                  <tr><td>Monday:</td><td>10a-6p</td></tr>
                  <tr><td>Tuesday:</td><td>11a-7p</td></tr>
                  <tr><td className="pr=4">Wednesday:</td><td>CLOSED</td></tr>
                  <tr><td>Thursday:</td><td>11a-7p</td></tr>
                  <tr><td>Friday:</td><td>11a-5p</td></tr>
                </table>

                <p className="mb-20 text-5xl"> <a href="tel:12192924501" className="text-indigo-500 cursor-pointer hover:text-orange-500 font-marker">(219)292-4501</a></p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Locations;