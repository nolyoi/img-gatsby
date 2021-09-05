import * as React from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { Helmet } from 'react-helmet';
import sal from 'sal.js';
import { Link } from 'gatsby';

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
        <meta name="Description" content="IMG provides primary and family care services." />
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

      <section className="bg-white bg-opacity-0 mt-0 w-full h-1/2">
        <div className="w-full h-1/2 bg-gray-900 bg-opacity-100 overflow-hidden text-center relative" style={{ backgroundImage: 'url(../heart-bg.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="container mx-auto my-auto pt-20 h-1/2">
            <div className="w-9/12 mx-auto text-gray-300 mt-0 my-40 items-center content-center content-center h-1/2">
              <h1 className="mt-14 py-10 pl-10 text-center font-sans text-4xl font-bold tracking-tight text-indigo-700 sm:text-4xl sm:leading-none"><span data-sal="fade"
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
        <div className="container flex mx-auto ">
          <section className="w-8/12 text-gray-600 body-font relative my-20" id="blog">
            <h2 className="font-sans text-xl font-bold tracking-tight text-gray-800 sm:text-3xl sm:leading-none mb-8">Primary and Family Care</h2>
            <div className="relative flex items-center justify-center overflow-hidden object-cover object-center w-60 h-40 mx-auto rounded float-left mr-8"><img src="../teddy-bear.jpeg" className="absolute w-full " alt="avatar" /></div>
            <p className="mx-2 pb-4 text-lg">We offer a full range of services in order to provide our patients with the best health and wellness care to enjoy life to the fullest.</p>
            <p className="mx-2 pb-4 text-lg">For the best medical care in Portage, Indiana and the surrounding Northwest Indiana area, <Link to="/book-appointment/current-patient" className="text-indigo-600 hover:text-orange-600">schedule an appointment with us today</Link>. </p>
            <p className="mx-2 pb-4 text-lg">We strive to stay up-to-date with new medical information regarding common health concerns. Our staff is committed to providing our patients with access to high quality care and ensuring a trusting relationship with them.</p>
            <p className="mx-2 pb-4 text-lg"> At our practice we make sure that our patients get a detailed explanation of their current health condition in terms they understand. We know how important it is to stay healthy, both inside and out, and our team makes every effort to ensure you remain in peak physical health.</p>
            <p className="mx-2 pb-4 text-lg">Internal Medicine & Geriatrics proudly offers pediatric, family, and adult medical services, focusing on Preventive and Primary Care health needs, including but not limited to:</p>

            <ul className="mx-2 pl-8 py-6 text-lg list-inside list-disc rounded-xl bg-gray-50">
              <li>Nutrition Counseling</li>
              <li>First Aid Treatments</li>
              <li>School, College and Employment Physicals</li>
              <li>Blood Pressure Treatment</li>
              <li>Diabetes Management</li>
              <li>Immunizations</li>
              <li>Annual Wellness Visits</li>
              <li>And more!</li>
            </ul>
            <p className="mx-2 pb-4 text-lg"></p>
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

export default PrimaryCare;
