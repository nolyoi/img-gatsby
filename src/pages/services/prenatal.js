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

function Prenatal() {
  React.useEffect(() => {
    sal();
  }, []);

  return (
    <div>
      <Nav menuItem="services" />
      <Helmet>
        <meta charSet="utf-8" />
        ( <title>{`Internal Medicine and Geriatrics -  Prenatal Care`}</title> )
        <meta name="Description" content="Prenatal care is important for both you and the health of your unborn baby. IMG provcides prenatal services." />
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

      <section className="bg-white bg-opacity-0 mt-0 w-full h-1/2">
        <div className="w-full h-1/2 bg-gray-900 bg-opacity-100 overflow-hidden text-center relative" style={{ backgroundImage: 'url(../prenatal3.jpeg)', backgroundSize: 'cover', backgroundPosition: '0% 45%' }}>
          <div className="container mx-auto my-auto pt-20 h-1/2">
            <div className="w-9/12 mx-auto text-gray-300 mt-0 my-40 items-center content-center content-center h-1/2">
              <h1 className="mt-10 mb-4 pr-4 text-center font-sans text-4xl font-bold tracking-tight text-orange-700 sm:text-4xl sm:leading-none"><span data-sal="fade"
                data-sal-delay="300"
                data-sal-duration="1500"
                data-sal-easing="ease-out-quint">IMG</span> <span data-sal="fade"
                  data-sal-delay="900"
                  data-sal-duration="2000"
                  data-sal-easing="ease-out-quint" className="text-white font-bold">Prenatal Care</span></h1>
            </div>
          </div>
        </div>
      </section>

      <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-0 lg:py-0 mb-20">
        <div className="container flex flex-col md:flex-row mx-auto ">
          <section className="w-full md:w-8/12 text-gray-600 body-font relative my-20" id="blog">
            <h2 className="font-sans text-xl font-bold tracking-tight text-gray-800 sm:text-3xl sm:leading-none mb-8">Prenatal Care</h2>

            <p className="mx-2 pb-4 text-lg">Having a healthy pregnancy is one of the best ways to promote a healthy birth. Getting early and regular prenatal care improves the chances of a healthy pregnancy. This care can begin even before pregnancy with a pre-pregnancy care visit.</p>
            <p className="mx-2 pb-4 text-lg">Pre-Pregnancy and prenatal care can help prevent complications and inform women about important steps they can take to protect their infant and ensure a healthy pregnancy. With regular prenatal care women can:</p>
            <ul className="mx-2 pl-8 py-6 text-lg list-inside list-disc rounded-xl bg-gray-50">
              <li className="mb-4">Reduce the risk of pregnancy complications. Following a healthy, safe diet; getting regular exercise as advised by a health care provider; and avoiding exposure to potentially harmful substances such as lead and radiation can help reduce the risk for problems during pregnancy and promote fetal health and development. Controlling existing conditions, such as high blood pressure and diabetes, is important to prevent serious complications and their effects.</li>
              <li className="mb-4">Reduce the fetus's and infant's risk for complications. Tobacco smoke and alcohol use during pregnancy have been shown to increase the risk for Sudden Infant Death Syndrome. Alcohol use also increases the risk for fetal alcohol spectrum disorders, which can cause a variety of problems such as abnormal facial features, having a small head, poor coordination, poor memory, intellectual disability, and problems with the heart, kidneys, or bones.7 According to one recent study supported by the NIH, these and other long-term problems can occur even with low levels of prenatal alcohol exposure.</li>
              <li className="mb-4">Help ensure the medications women take are safe. Women should not take certain medications, including some acne treatments and dietary and herbal supplements during pregnancy because they can harm the fetus.</li>
            </ul>
            <BookButton />
          </section>

          <section className="w-full md:w-4/12 text-gray-600 body-font relative my-20 px-8" id="blog-sidebar text-lg">
            <div className="mb-4">
              <h2 className="font-sans text-xl font-bold tracking-tight text-gray-800 sm:text-3xl sm:leading-none mb-8"></h2>
            </div>
            <div className="pl-4 text-white">
              <div className="rounded-xl px-6 py-6 bg-blue-50 drop-shadow-lg text-gray-500 text-lg">
                {/* <h4 className="mb-4 text-xl font-bold tracking-wide">Address</h4> */}
                <p className="mb-4 "><strong className="tracking-wide">Portage Office</strong><br /> 2640 Hamstrom Rd.

                  Portage, IN. 46368  <br />
                  (219) 762-4423</p>
                <p><strong className="tracking-wide">Gary Office</strong><br /> 1400 Broadway
                  Gary, IN. 46408 <br />
                  (219) 882-2305

</p>
              </div>

              <div className="rounded-xl px-6 py-6 bg-green-50 drop-shadow-lg text-gray-500 mt-8 text-lg">

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

export default Prenatal;

// Nutrition, Check ups, Mental Health, 