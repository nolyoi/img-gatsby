import * as React from 'react';
import { useState } from 'react';
import { Link } from "gatsby"

function Nav({ menuItem }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const aboutLink = () => {
    if (menuItem === "about") {
      return <Link to="/about-us" aria-label="About Us" title="Learn about our practice and team" className="font-bold nav-underline tracking-wide text-indigo-300 transition-colors duration-200 hover:text-deep-purple-accent-400">
        About Us
      </Link>
    } else {
      return <Link to="/about-us" aria-label="About Us" title="Learn about our practice and team" className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400">
        About Us
      </Link>
    }
  }

  const servicesLink = () => {
    if (menuItem === "services") {
      return <Link to="/services" aria-label="Our Services" title="More about our health services" className="font-bold nav-underline tracking-wide text-indigo-300 transition-colors duration-200 hover:text-deep-purple-accent-400">
        Services
      </Link>
    } else {
      return <Link to="/services" aria-label="Our Services" title="More about our health services" className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400">
        Services
      </Link>
    }
  }

  const locationsLink = () => {
    if (menuItem === "locations") {
      return <Link to="/locations" aria-label="Our Locations" title="Our locations" className="font-bold nav-underline tracking-wide text-indigo-300 transition-colors duration-200 hover:text-deep-purple-accent-400">
        Locations
      </Link>
    } else {
      return <Link to="/locations" aria-label="Our Locations" title="Our locations" className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400">
        Locations
      </Link>
    }
  }

  const contactLink = () => {
    if (menuItem === "contact") {
      return <Link to="/contact-us" aria-label="Contact Us" title="Contact Us" className="font-bold nav-underline tracking-wide text-indigo-300 transition-colors duration-200 hover:text-deep-purple-accent-400">
        Contact Us
      </Link>
    } else {
      return <Link to="/contact-us" aria-label="Contact Us" title="Contact Us" className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400">
        Contact Us
      </Link>
    }
  }

  return (
    <div className="bg-gray-800 text-white px-0 py-5 mx-auto max-w-full md:px-24 lg:px-0 shadow-lg mb-0 z-30">
      <div className="container mx-auto">
      <div className="relative flex items-center justify-between w-full">
        <Link to="/" aria-label="Internal Medicine and Geriatrics" title="Internal Medicine and Geriatrics" className="inline-flex items-center">
          <span className="w-8 text-5xl text-white">
            ☤
          </span>
          <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase pr-12">
            Internal Medicine & Geriatrics
          </span>
        </Link>
        <ul className="flex items-center hidden space-x-8 lg:flex">
          <li>
            {aboutLink()}
          </li>
          <li>
            {servicesLink()}
          </li>
          <li>
            <a href="/locations" aria-label="Product pricing" title="Product pricing" className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400">
              {locationsLink()}
            </a>
          </li>
          <li>
            <a href="/contact-us" aria-label="About us" title="About us" className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400">
              {contactLink()}
            </a>
          </li>
          <li>
            <a href="https://login.patientfusion.com/?defaultTab=login&redirect=https%3A%2F%2Fmy.patientfusion.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-600 hover:bg-indigo-800 focus:shadow-outline focus:outline-none" aria-label="Patient Login" title="Patient Login">
              Patient Login
            </a>
          </li>
        </ul>
        <div className="lg:hidden">
          <button aria-label="Open Menu" title="Open Menu" className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={
              () => setIsMenuOpen(true)
            }>
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path fill="currentColor" d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z" />
              <path fill="currentColor" d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z" />
              <path fill="currentColor" d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z" />
            </svg>
          </button>
          {
            isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link to="/" aria-label="Internal Medicine and Geriatrics" title="Internal Medicine and Geriatrics" className="inline-flex items-center">
                        <span className="w-8 text-5xl text-white">
                          ☤
                        </span>
                        <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
                          Internal Medicine & Geriatrics
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button aria-label="Close Menu" title="Close Menu" className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={
                          () => setIsMenuOpen(false)
                        }>
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        {aboutLink()}
                      </li>
                      <li>
                        {servicesLink()}
                      </li>
                      <li>
                        <a href="/locations" aria-label="Product pricing" title="Product pricing" className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400">
                          {locationsLink()} 
                        </a>
                      </li>
                      <li>
                        <a href="/contact-us" aria-label="About us" title="About us" className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400">
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a href="https://login.patientfusion.com/?defaultTab=login&redirect=https%3A%2F%2Fmy.patientfusion.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-600 hover:bg-indigo-800 focus:shadow-outline focus:outline-none" aria-label="Sign up" title="Sign up">
                          Patient Login
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )
          } </div>
      </div>
      </div> 
    </div>
  );
}

export default Nav;
