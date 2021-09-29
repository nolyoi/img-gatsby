
import * as React from 'react';
import { Link } from 'gatsby';
import sal from 'sal.js';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { Helmet } from 'react-helmet';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BookButton from '../../components/BookButton';

function Clinic() {
  React.useEffect(() => {
    sal();
  }, []);

  return (
    <div>
      <Nav menuItem="services" />
      <Helmet>
        <meta charSet="utf-8" />
        ( <title>{`Internal Medicine and Geriatrics - Suboxone Clinic located in Portage, Indiana.`}</title> )
        <meta name="Description" content="The IMG Suboxone Clinic provides maintenance treatment for substance abuse. " />
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

      <section className="bg-white bg-opacity-0 mt-0 w-full h-1/2">
        <div className="w-full h-1/2 bg-gray-900 bg-opacity-100 overflow-hidden text-center relative" style={{ backgroundImage: 'url(../../happy-people4.jpeg)', backgroundSize: 'cover', backgroundPosition: '0% 40%' }}>
          <div className="container mx-auto my-auto pt-20 h-1/2">
            <div className="w-9/12 mx-auto text-gray-300 mt-0 my-40 items-center content-center content-center h-1/2">
              <h1 className="mt-14 mb-4 pr-8 text-center font-sans text-4xl font-bold tracking-tight text-orange-400 sm:text-4xl sm:leading-none"><span data-sal="fade"
                data-sal-delay="300"
                data-sal-duration="1500"
                data-sal-easing="ease-out-quint">IMG</span> <span data-sal="fade"
                  data-sal-delay="900"
                  data-sal-duration="2000"
                  data-sal-easing="ease-out-quint" className="text-white font-bold">Suboxone Clinic</span></h1>
            </div>
          </div>
        </div>
      </section>

      <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-0 lg:py-0 mb-20 flex">
        <div className="container flex flex-col md:flex-row mx-auto ">
          <section className="w-full md:w-8/12 text-gray-600 body-font relative my-20" id="blog">
            <h2 className="font-sans text-xl font-bold tracking-tight text-gray-800 sm:text-3xl sm:leading-none mb-8">Suboxone Clinic</h2>
            <p className="mx-2 pb-4 text-lg">If you or a loved one are suffering from drug addiction or alcohol addiction, call or chat with us to schedule an appointment with our outpatient Merrillville, IN addiction treatment center today. We offer addiction treatment as well as in-person clinic visits.</p>
            <p className="mx-2 pb-4 text-lg">Our approach is evidence based and we can get you started on drug rehab medication-assisted treatment (MAT) program immediately. </p>
            <p className="mx-2 pb-4 text-lg"> Our opioid and alcohol addiction treatment programs include the use of buprenorphine (such as Suboxone) or naltrexone (Vivitrol) as part of an individualized treatment plan led by our trained medical staff. Our patients are treated with dignity, compassion and respect. We accept Medicare, Medicaid, most insurance, and cash payments.</p>
            <h2 className="font-sans text-xl font-bold tracking-tight text-gray-800 sm:text-xl sm:leading-none mb-4 mt-8 mx-2">Treatment Program</h2>
            <img className="h-40 float-right" src="../../suboxone.png" />
            <ul className="mx-8">
              <li className="mx-2 pb-4 text-lg"><strong>INDUCTION</strong><br />
                The goal of an induction is to help you transition off of opiods and comfortably induce (start) onto our opioid addiction treatment medicine called buprenorphine (Suboxone). At the first visit, you meet with a doctor and his treatment team, create an individualized treatment plan, and are induced on to the prescribed medication. Our staff also works to reduce the cost of the prescribed medication through insurance and other discount programs.
              </li>
              <li className="mx-2 pb-4 text-lg"><strong>ACUTE STABILIZATION</strong><br />
                Over the first week of treatment, the doctor will help you stabilize and become comfortable by optimizing the daily dosage of medication. Our doctors stay in constant contact through the week, monitoring the transition, and stabilizing your body on the proper dosage. Once you are stable and comfortable, you and your doctor can finalize your customized ongoing treatment plan.
              </li>
              <li className="mx-2 pb-4 text-lg"><strong>MAINTENANCE</strong><br />
                Medically-assisted treatment (MAT) can last from six (6) months to a lifetime depending on your addiction and long term goals. At New Beginnings, we continue to monitor and manage the medication on a weekly, bi-weekly, or monthly basis.
              </li>
              <li className="mx-2 pb-4 text-lg"><strong>TAPERING</strong><br />
                When you are ready to reduce the prescribed medication, we work with therapists and counselors to develop a taper program that will ensure a comfortable, successful completion of your medical treatment. Our philosophy is to carefully and slowly taper your medication to ensure stability and success.
              </li>
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
                <p>
                  <strong className="tracking-wide">Office Information</strong>
                </p>
                <p className="mt-2">
                  3190 Lancer Street
                  <br />
                  Portage, IN. 46368  </p>
                <p className="mt-2"><a href="tel:12192924501" className="mt-4">(219) 292-4501</a>
                </p>
              </div>

              <div className="rounded-xl px-6 py-6 bg-green-50 drop-shadow-lg text-gray-500 mt-8 text-lg">

                <h4 className="mb-2 tracking-wide"><strong>Office Hours</strong></h4>
                <div className="w-full">
                  <table class="table-auto w-11/12 mx-auto">
                    <tr><td>Monday:</td><td>10a-6p</td></tr>
                    <tr><td>Tuesday:</td><td>11a-7p</td></tr>
                    <tr><td className="pr=4">Wednesday:</td><td>CLOSED</td></tr>
                    <tr><td>Thursday:</td><td>11a-7p</td></tr>
                    <tr><td>Friday:</td><td>11a-5p</td></tr>
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

export default Clinic;
