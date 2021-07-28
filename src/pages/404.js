import * as React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

function NotFoundPage() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        ( <title>{`Internal Medicine and Geriatric - 404!`}</title> )v
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=Mali:wght@600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      <Nav menuItem="contact-us" />
      <section className="text-gray-600 body-font relative">
        <div className="container md:items-center px-5 py-24 mx-auto flex sm:flex-col flex-wrap">
          <div><img src="./404.png" /></div>
          <div className="text-2xl font-bold text-blueGray-400"><Link to="/">Return home</Link></div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default NotFoundPage;
