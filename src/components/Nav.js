import * as React from 'react';
import { useState } from 'react';
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import {
  ScrollingProvider,
  useScrollSection,
  Section,
} from 'react-scroll-section';

function Nav({ menuItem }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLink = ({ to, title, description, bgColor, direction = "left" }) => {
    if (isMenuOpen && menuItem === title.toLowerCase().replace(/\s/g, "-")) {
      return <a href="#" aria-label={title} title="Learn about our practice and team" className="font-bold tracking-wide text-indigo-600 transition-colors duration-200 hover:text-deep-purple-accent-400">
        {title}
      </a>
    } else if (isMenuOpen) {
      return <AniLink fade bg={bgColor} duration={0.8} direction={direction} to={to} aria-label={title} title={description} className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400">
        {title}
      </AniLink>
    } else if (menuItem === title.toLowerCase().replace(/\s/g, "-")) {
      return <a href="#" aria-label={title} title="Learn about our practice and team" className="font-bold nav-underline tracking-wide text-indigo-300 transition-colors duration-200 hover:text-deep-purple-accent-400">
        {title}
      </a>
    }

    return <AniLink fade bg={bgColor} duration={0.8} direction={direction} to={to} aria-label={title} title={description} className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400">
      {title}
    </AniLink>
  }

  const aboutLink = () => {
    return navLink({ to: '/about-us', title: 'About Us', bgColor: '#293749', description: 'Learn about our practice and team', direction: 'left' })
  }

  const servicesLink = () => {
    return navLink({ to: '/services', title: 'Services', bgColor: '#293749', description: 'Learn about our practice and team', direction: 'left' })
  }

  const locationsLink = () => {
    return navLink({ to: '/locations', title: 'Locations', bgColor: '#293749', description: 'Learn about our practice and team', direction: 'left' })
  }

  const contactLink = () => {
    return navLink({ to: '/contact-us', title: 'Contact Us', bgColor: '#293749', description: 'Learn about our practice and team', direction: 'left' })
  }

  const blogLink = () => {
    return navLink({ to: '/blog', title: 'Blog', bgColor: '#293749', description: 'Latest news and announcements from IMG.', direction: 'left' })
  }

  return (
    
    <Section id="nav" className="bg-gray-800 text-white px-2 py-5 mx-auto max-w-full md:px-24 lg:px-0 shadow-xl mb-0 z-50">
      <div className="container mx-auto">
        <div className="relative flex items-center justify-between w-full">
          <Link to="/" aria-label="Internal Medicine and Geriatrics" title="Internal Medicine and Geriatrics" className="inline-flex items-center">
            <span className="w-8 text-5xl text-white">
              	
              &#9764;&#xFE0E;
            </span>
            <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase pr-12" style={{ fontFamily: 'Segoe UI' }}>
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
                          {blogLink()}
                        </li>
            <li>
              {locationsLink()}
            </li>
            <li>
              {contactLink()}
            </li>
         
            <li>
              <a href="https://login.patientfusion.com/?defaultTab=login&redirect=https%3A%2F%2Fmy.patientfusion.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-600 hover:bg-indigo-800 focus:shadow-outline focus:outline-none" aria-label="Patient Login" title="Patient Login">
                Patient Login
              </a>
            </li>
          </ul>
          <div className="lg:hidden z-50">
            <button aria-label="Open Menu" title="Open Menu" className="p-2 mr-2 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={
                () => setIsMenuOpen(true)
              }>
              <svg className="w-5 text-indigo-300" viewBox="0 0 24 24">
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
                          <span className="w-8 text-5xl text-gray-700">
                            ☤
                          </span>
                          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
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
                          {blogLink()}
                        </li>
                        <li>
                          {locationsLink()}
                        </li>
                        <li>
                          {contactLink()}
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
    </Section>
  );
}

export default Nav;
