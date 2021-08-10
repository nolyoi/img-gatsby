import * as React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

function ContactUs() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        ( <title>{`Internal Medicine and Geriatric - Contact our office today!`}</title> )
        <meta name="Description" CONTENT="Contact Internal Medicine and Geriatrics." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=Mali:wght@600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>

      <Nav menuItem="contact-us" />

      <section className="text-gray-600 body-font relative mt-10 mb-36">
        <div className="container md:items-center px-5 mx-auto flex lg:flex-row sm:flex-col flex-wrap">
          <div className="lg:w-1/2 md:w-4/5 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative lg:h-screen h-96">
            <iframe width="100%" height="100%" className="absolute inset-0" frameborder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Internal%20Medicine%20and%20Geriatrics%20Portage%20In+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>
            <div className="bg-white w-11/12 relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                <p className="mt-1">2640 Hamstrom Rd</p>
                <p className="mt-1">Portage, IN. 46368</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                <a className="text-indigo-500 leading-relaxed">contact@imgogportage.com</a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                <p className="leading-relaxed">(219)762-4423</p>
              </div>
            </div>
          </div>
          <div className="lg:w-5/12 md:w-full bg-white flex flex-col md:ml-auto w-full xs:px-12 sm:px-12 mt-20 mb-10 md:mt-10">
            <h2 className="mb-8 font sm:text-center-sans text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl sm:leading-none font-roboto md:text-center sm:w-full">Get in touch <span className="text-green-500 font-bold font-marker">today</span></h2>
            <h3 className="text-gray-900 text-2xl mb-8 font-medium title-font">By Telephone</h3>
            <p className="mb-12 text-5xl text-center transform -rotate-3"> <a href="tel:12197624423" className="text-indigo-500 cursor-pointer hover:text-orange-500 font-marker">(219)762-4423</a></p>

            <h3 className="text-gray-900 text-2xl mb-4 font-medium title-font">By E-mail</h3>
            <p className="leading-relaxed mb-5 text-gray-600 text-md">Use the form below to reach contact us via e-mail. If you need a quick response, please call us</p>
            <form action="https://getform.io/f/d7661c51-73c1-41e2-a669-580b50c55fb5" method="POST">
              <div className="relative mb-4">
                <input type="text" placeholder="Your name" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <input type="email" placeholder="Your e-mail address" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <input type="phone" placeholder="(219)555-5555" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <textarea id="message" placeholder="How can we help you?" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
              <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>
              <p className="text-xs text-gray-500 mt-3">We will do our best to get back to you ASAP. For a quicker response, please call.</p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ContactUs;
