// Add book appt button/explanation.

import * as React from 'react';
import { useState } from 'react';
import { Link } from 'gatsby';
import BookButton from './BookButton';

function Nav({ menuItem }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLink = ({ to, title, description, bgColor, direction = "left" }) => {
    if (isMenuOpen && menuItem === title.toLowerCase().replace(/\s/g, "-")) {
      return <Link to={to} aria-label={title} title="Learn about our practice and team" className="font-bold tracking-wide text-orange-600 transition-colors duration-200 hover:text-deep-purple-accent-400">
        {title}
      </Link>
    } else if (isMenuOpen) {
      return <Link to={to} aria-label={title} title={description} className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-orange-400">
        {title}
      </Link>
    } else if (menuItem === title.toLowerCase().replace(/\s/g, "-")) {
      return <Link to={to} aria-label={title} title={description} className="font-medium tracking-wide text-orange-400 transition-colors duration-200 hover:text-orange-500">
      {title}
    </Link>
    }

    return <Link to={to} aria-label={title} title={description} className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-300">
      {title}
    </Link>
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
    return navLink({ to: '/blog', title: 'News', bgColor: '#293749', description: 'Latest news and announcements from IMG.', direction: 'left' })
  }

  return (

    <section id="nav" className="bg-gray-50 text-gray-700 px-2 py-5 mx-auto max-w-full md:px-24 lg:px-0 shadow-xl mb-0 z-50">
      <div className="container mx-auto">
        <div className="relative flex items-center justify-between w-full">
          <Link to="/" aria-label="Internal Medicine and Geriatrics" title="Internal Medicine and Geriatrics" className="inline-flex items-center">
            <span className="w-8 text-5xl text-gray-700 sm:hidden hidden md:block lg:block" style={{ fontFamily: 'Segoe UI' }}>

              &#9764;&#xFE0E;
            </span>
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-700 uppercase pr-12 sm:ml-4">
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
              {locationsLink()}
            </li>
            <li>
              {blogLink()}
            </li>
            <li>
              {contactLink()}
            </li>
            <li>
              <BookButton nav="true" />
            </li>
          </ul>
          <div className="lg:hidden z-50">
            <button aria-label="Open Menu" title="Open Menu" className="p-2 mr-2 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={
                () => setIsMenuOpen(true)
              }>
              <svg className="w-5 text-orange-500" viewBox="0 0 24 24">
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
                          <span className="w-8 text-5xl text-gray-700 sm:hidden hidden md:block lg:block">
                          &#9764;&#xFE0E;
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
                          {locationsLink()}
                        </li>
                        <li>
                          {blogLink()}
                        </li>
                        <li>
                          {contactLink()}
                        </li>
                        <li className="text-center">
                          <BookButton nav="true" />
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )
            } </div>
        </div>
      </div>
    </section>
  );
}

export default Nav;
