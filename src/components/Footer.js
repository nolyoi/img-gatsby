import * as React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faYelp } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className="flex items-end w-full mt-0 bg-white" style={{ backgroundImage: '/footer-bg.png' }}>
      <footer className="w-full text-white bg-gray-100 body-font" style={{ backgroundImage: "url('/footer-bg3.png')" }}>
        <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
          <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
            <a className="flex items-center justify-center font-medium text-white title-font md:justify-start">
              <span className="w-6 text-2xl text-white">
                ☤
              </span>
              Internal Medicine, & Geriatrics
            </a>
            <p className="mt-2 text-sm text-white">Quality care from friendly local professionals since 1987.</p>
            <div className="mt-4">
              <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                <a className="text-white cursor-pointer hover:text-indigo-500">
                  <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                </a>
                <a href="https://www.google.com/maps/place/Internal+Medicine+%26+Geriatrics/@41.5752737,-87.171095,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xcea1d974d7aad2d8!8m2!3d41.575274!4d-87.1688708?hl=en" target="_blank" className="ml-3 text-white cursor-pointer hover:text-indigo-500">
                  <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                </a>
                <a href="https://www.yelp.com/biz/internal-medicine-and-geriatrics-portage-2" target="_blank" className="ml-3 text-white cursor-pointer hover:text-indigo-500">
                  <FontAwesomeIcon icon={faYelp}></FontAwesomeIcon>
                </a>
              </span>
            </div>
          </div>
          <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">About</h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <Link to="/about-us" className="text-gray-400 cursor-pointer hover:text-white">About Us</Link>
                </li>
                <li className="mt-3">
                  <Link to="/locations" className="text-gray-400 cursor-pointer hover:text-white">Office Locations</Link>
                </li>
                <li className="mt-3">
                  <Link to="/about-us#staff" className="text-gray-400 cursor-pointer hover:text-white">Our Staff</Link>
                </li>
                <li className="mt-3">
                  <a className="text-gray-400 cursor-pointer hover:text-white">Contact Us</a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">Services</h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a className="text-gray-400 cursor-pointer hover:text-white">Family/General Practice</a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-400 cursor-pointer hover:text-white">Geriatric Medicine</a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-400 cursor-pointer hover:text-white">Pediatric Medicine</a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-400 cursor-pointer hover:text-white">Mental Health & Substance Abuse</a>
                </li>
              </nav>
            </div>

            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <nav className="mb-10 list-none">
                <li className="mt-0">
                  <Link to="/locations#portage" className="text-gray-400 cursor-pointer hover:text-white">
                    <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">Portage Office - Main</h2>
                    2640 Hamstrom Road
                    <br />
                    Portage, IN. 46368
                    <br />
                    +1 (219) 762-4423
                  </Link>
                </li>

                <li className="mt-6">
                  <Link to="/locations#suboxone" className="text-gray-400 cursor-pointer hover:text-white">
                    <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">Portage Office - Suboxone</h2>
                    3190 Lancer Street
                    <br />
                    Portage, IN. 46368
                    <br />
                    +1 (219) 292-4501
                  </Link>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <nav className="mb-10 list-none">
                <li className="mt-0">
                  <Link to="/locations#gary" className="text-gray-400 cursor-pointer hover:text-white">
                    <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">Gary Office</h2>
                    3535 Broadway
                    <br />
                    Gary, IN. 46408
                    <br />
                    +1 (219) 884-4900
                  </Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: '#0e131a' }}>
          <div className="container px-5 py-3 mx-auto">
            <p className="text-sm text-gray-500 xl:text-center">Website developed & hosted by <a href="https://nolanm.dev/" target="_blank">Nolan Mayersky</a>.
            </p>
            <p className="text-sm text-gray-500 capitalize xl:text-center">© {new Date().getFullYear()} <Link to="/">Internal Medicine & Geriatrics</Link>. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
