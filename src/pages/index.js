// Flyers
// Add office, hospital, nursing home, home to cont of care.
import * as React from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { Helmet } from "react-helmet";
import { Link, useStaticQuery, graphql } from 'gatsby';
import sal from 'sal.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import BookButton from '../components/BookButton';

function Index() {
  React.useEffect(() => {
    sal();
  }, []);

  const scrollDiv = React.useRef(null);

  const query = useStaticQuery(graphql`
  query { allMarkdownRemark(filter: {frontmatter: {author: {ne: null}}}) {
          edges {
            node {
              id
              html
              frontmatter {
                author
                lead_image
                published
                slug
                title
              }
            }
          }
        }
      }
    `);

  let frontmatter = [];
  query.allMarkdownRemark.edges.forEach(post => {
    frontmatter.push(post);
  });

  const metaDesc = `IMG has been serving Northwest Indiana for ${(new Date().getFullYear() - 1987) + "+"} years. We provide pediatric, family, geriatric, suboxone treatment in Northwest Indiana.`

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        ( <title>{`Internal Medicine and Geriatric - Pediatric, family, geriatric, and substance abuse doctors in Portage, Indiana.`}</title> )
        <meta name="Description" content={metaDesc} />
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

      <Nav menuItem="index" />
      {/* Move to 3rd */}
      <section className="flex flex-col-reverse md:flex-row h-full md:h-screen w-full">
        <div className="w-full m-auto">
          <div className="w-full text-center">
            <h1 data-sal="fade"
              data-sal-delay="200"
              data-sal-duration="1500"
              data-sal-easing="ease-out-quint" className="mb-8 text-2xl font-semibold leading-none tracking-tighter text-black sm:text-6xl title-font">
              Health Services
            </h1>
          </div>

          <div data-sal="slide-right"
            data-sal-delay="300"
            data-sal-duration="1500"
            data-sal-easing="ease-out-quint" className="flex max-w-9/10 mx-auto overflow-hidden bg-white rounded-lg border-r-4 border-orange-400 shadow-sm">
            <div className="flex rounded-r w-full h-full">
              <div className="w-1/4 bg-cover" style={{ backgroundImage: 'url(../happy-fam7.jpeg)', backgroundPosition: 'center' }}></div>
              <div className="w-3/4 m-4">
                <h1 className="text-2xl font-bold text-gray-700">Family Medicine</h1>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">We offer a full range of services in order to provide our patients with the best health and wellness care to enjoy life to the fullest.</p>
                <div className="flex justify-between mt-3 float-right item-center">
                  <Link to="/services/primary-care" className="inline-flex px-2 py-1 text-xs font-medium text-orange-500 uppercase transition-colors duration-200 transform bg-orange-100 rounded hover:bg-orange-200 focus:outline-none focus:bg-gray-100">Learn More <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24"> <path d="M5 12h14M12 5l7 7-7 7"></path> </svg></Link>
                </div>
              </div>
            </div>

          </div>
          <div data-sal="slide-right"
            data-sal-delay="400"
            data-sal-duration="1500"
            data-sal-easing="ease-out-quint" className="flex mt-4 max-w-9/10 mx-auto overflow-hidden bg-white rounded-lg border-r-4 border-orange-300 shadow-sm">
            <div className="flex rounded-r w-full h-full">
              <div className="w-1/4 bg-cover" style={{ backgroundImage: 'url(../pediatrics2.jpeg)', backgroundPosition: 'center' }}></div>

              <div className="w-3/4 m-4">
                <h1 className="text-2xl font-bold text-gray-700">Pediatrics & Geriatrics</h1>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">We offer a full range of services in order to provide our patients with the best health and wellness care to enjoy life to the fullest.</p>
                <div className="flex justify-between mt-3 float-right item-center">
                  <Link to="/services" className="inline-flex px-2 py-1 text-xs font-medium text-orange-500 uppercase transition-colors duration-200 transform bg-orange-100 rounded hover:bg-orange-200 focus:outline-none focus:bg-gray-100">Learn More <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24"> <path d="M5 12h14M12 5l7 7-7 7"></path> </svg></Link>
                </div>
              </div>
            </div>
          </div>
          <div data-sal="slide-right"
            data-sal-delay="500"
            data-sal-duration="1500"
            data-sal-easing="ease-out-quint" className="flex mt-4 max-w-9/10 mx-auto overflow-hidden bg-white rounded-lg border-r-4 border-orange-200  shadow-sm">
            <div className="flex rounded-r w-full h-full">
              <div className="w-1/4 bg-cover" style={{ backgroundImage: 'url(../addiction.jpeg)', backgroundPosition: 'center' }}></div>

              <div className="w-3/4 m-4">
                <h1 className="text-2xl font-bold text-gray-700">Substance Abuse</h1>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">We provide Suboxone maintenance treatment along with counseling to those struggling with addiction.</p>
                <div className="flex justify-between mt-3 float-right item-center">
                  <Link to="https://newbeginnings.clinic/" className="inline-flex px-2 py-1 text-xs font-medium text-orange-500 uppercase transition-colors duration-200 transform bg-orange-100 rounded hover:bg-orange-200 focus:outline-none focus:bg-gray-100">Learn More <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24"> <path d="M5 12h14M12 5l7 7-7 7"></path> </svg></Link>
                </div>
              </div>
            </div>
          </div>

          <div data-sal="slide-up"
            data-sal-delay="400"
            data-sal-duration="2000"
            data-sal-easing="ease-out-quint" className="text-center mt-4">
            <Link to="/services" className="inline-flex items-center justify-center mt-4 w-50 h-12 px-4 font-medium tracking-wide text-white transition duration-200 rounded  bg-orange-300 hover:bg-orange-400 focus:shadow-outline focus:outline-none">All Health Services</Link>
          </div>
        </div>

        <div className="w-full md:block">
          <div className="flex items-center justify-center justify-items-center w-full h-96 md:h-full mb-10 lg:mb-0">
            <img data-sal="slide-left"
              data-sal-delay="350"
              data-sal-duration="1500"
              data-sal-easing="ease-out-quint" className="object-cover object-center md:object-bottom w-full h-96 md:h-full" src="../happy-fam8.jpeg" alt="glasses photo" />
          </div>
        </div>
      </section>

      <section className="flex flex-col h-full lg:h-screen lg:h-screen sm:h-full w-full my-0 via-blue-700 to-indigo-800 text-white" style={{backgroundImage: 'url(../fall4.jpeg)', backgroundPosition: 'top', backgroundSize: 'cover' }}>
        <div className="flex flex-wrap content-center container sm:h-full px-12 lg:px-0 m-auto max-w-xl md:max-w-full lg:max-w-screen-xl">
          <div className="grid gap-5 row-gap-8 lg:grid-cols-7">
            <div className="col-span-2 order-1 lg:order-1 m-auto flex flex-row">
              <img data-sal="slide-up"
                data-sal-delay="200"
                data-sal-duration="2000"
                data-sal-easing="ease-out-quint" className="object-contain h-full w-full" src="./continuity5.png" alt="" />
            </div>
            <div className="col-span-3 order-3 lg:order-2 flex flex-col justify-center">
              <div className="max-w-full mb-6 mt-6 lg:mt-0">
                <h2 data-sal="slide-right"
                  data-sal-delay="300"
                  data-sal-duration="1500"
                  data-sal-easing="ease-out-quint" className="mt-8 font-sans text-4xl text-center font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                  Continuity of <span className="text-orange-200">Care</span>
                </h2>
                <p data-sal="slide-right"
                  data-sal-delay="300"
                  data-sal-duration="1500"
                  data-sal-easing="ease-out-quint" className="text-base mt-8 text-white md:text-lg">
                  Being able to care for patients at all stages of life allows us to focus more individually on the patient. From prenatal and pediatrics to general/family and geriatrics.
                </p>
                <p data-sal="slide-right"
                  data-sal-delay="300"
                  data-sal-duration="1500"
                  data-sal-easing="ease-out-quint" className="text-base text-white md:text-lg mt-4">
                  Whether it's in our office, at the hospital, nursing home, or your own home, our doctors will be there.
                </p>
                <div data-sal="slide-up"
                  data-sal-delay="400"
                  data-sal-duration="2000"
                  data-sal-easing="ease-out-quint" className="text-center mt-8">
                  <Link to="/services" className="inline-flex items-center justify-center mt-4 w-50 h-12 px-4 font-medium tracking-wide text-orange-500 transition duration-200 rounded bg-orange-100 hover:bg-orange-200 focus:shadow-outline focus:outline-none uppercase">View Our Services</Link>
                </div>
              </div>
            </div>
            {/* Add 2nd circle (office, home, hospital, nursing home) */}
            <div className="col-span-2 order-2 lg:order-3 m-auto">

              <img data-sal="slide-up"
                data-sal-delay="200"
                data-sal-duration="2000"
                data-sal-easing="ease-out-quint" className="object-contain h-full w-full" src="./continuity6.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col h-full lg:h-screen lg:h-screen sm:h-full w-full my-24 bg-white via-blue-700 to-indigo-800 text-gray-700" style={{backgroundImage: 'url()', backgroundPosition: 'top', backgroundSize: 'cover' }}>
        <div className="flex flex-wrap content-center container sm:h-full px-12 lg:px-0 m-auto max-w-xl md:max-w-full lg:max-w-screen-xl">
          <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
            <div>
              <img data-sal="slide-up"
                data-sal-delay="200"
                data-sal-duration="2000"
                data-sal-easing="ease-out-quint" className="object-cover w-full h-56 rounded sm:h-96 lg:pr-8" src="./stethoscope-heart.jpeg" alt="" />
            </div>
            <div className="flex flex-col justify-center">
              <div className="max-w-full mb-6">
                <h2 data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-duration="1500"
                  data-sal-easing="ease-out-quint" className="mb-6 font-sans text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl sm:leading-none">
                  Local doctors you can trust.
                </h2>
                <p data-sal="slide-up"
                  data-sal-delay="350"
                  data-sal-duration="1500"
                  data-sal-easing="ease-out-quint" className="text-base text-gray-700 md:text-lg">
                  IMG has been caring for Northwest Indiana for over 34 years and is dedicated to providing high quality healthcare in a compassionate, ethical, and caring environment.
                </p>
              </div>
              <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
                <div data-sal="slide-left"
                  data-sal-delay="350"
                  data-sal-duration="1500"
                  data-sal-easing="ease-out-quint" className="bg-white border-l-4 shadow-sm border-orange-400">
                  <div className="h-full p-5 rounded-r">
                    <h6 className="mb-2 font-semibold leading-5">
                      Continuity of care
                    </h6>
                    <p className="text-sm text-gray-900">
                      Our practice provides care to children through the elderly. We have the ability to care for our patients through all stages of their lives.
                    </p>
                  </div>
                </div>
                <div data-sal="slide-left"
                  data-sal-delay="400"
                  data-sal-duration="1500"
                  data-sal-easing="ease-out-quint" className="bg-white border-l-4 shadow-sm border-orange-300">
                  <div className="h-full p-5 rounded-r">
                    <h6 className="mb-2 font-semibold leading-5">
                      Serving our local community
                    </h6>
                    <p className="text-sm text-gray-900">
                      Internal Medicine & Geriatrics is locally owned and run. We aren't a big company and provide individual attention to all of our patients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Move to position 1 */}
      {/* <section className="flex m-auto text-gray-700 h-full md:h-screen lg:h-screen sm:h-full sm:my-24 sm:pt-12 sm:mx-24">
        <div className="m-auto">
          <div className="flex flex-col items-center px-5 pt-8">
            <div className="flex flex-col w-full mb-8 text-left lg:text-center">
              <h1 data-sal="fade"
                data-sal-delay="200"
                data-sal-duration="1500"
                data-sal-easing="ease-out-quint" className="mx-auto mb-4 text-2xl font-semibold leading-none tracking-tighter text-black lg:w-1/2 sm:text-6xl title-font">
                Health Services
              </h1>
              <p data-sal="fade"
                data-sal-delay="200"
                data-sal-duration="1500"
                data-sal-easing="ease-out-quint" className="text-large">
                We believe continuity of care is the most important part of healthcare. IMG provides care through all stages of life.
              </p>
            </div>
          </div>
          <div className="container items-center px-5 pb-8 mb-10 mt-2 mx-auto lg:px-24 max-h-full">
            <div className="flex flex-wrap mb-12 text-left">
              <div className="w-full mx-auto lg:w-1/3">
                <Link to="/services/primary-care">
                  <div data-sal="slide-up"
                    data-sal-delay="300"
                    data-sal-duration="1500"
                    data-sal-easing="ease-out-quint" className="p-6">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-full h-50 mx-auto mb-5 text-black bg-gray-100 rounded-full">
                      <img src="../heart-bg.jpeg" />
                    </div>
                    <h1 className="text-center mx-auto mb-4 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font">
                      Family & General Practice
                    </h1>
                    <p className="mx-auto text-base font-medium leading-relaxed text-gray-700 ">We offer a full range of services in order to provide our patients with the best health and wellness care to enjoy life to the fullest.
                    </p>
                  </div>
                </Link>
              </div>

              <div className="w-full mx-auto lg:w-1/3">
                <Link to="/services">
                  <div data-sal="slide-up"
                    data-sal-delay="400"
                    data-sal-duration="1500"
                    data-sal-easing="ease-out-quint" className="p-6">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-full h-50 mx-auto mb-5 text-black bg-gray-100 rounded-full">
                      <img src="../pediatrics2.jpeg" />
                    </div>
                    <h1 className="text-center mx-auto mb-4 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font">
                      Pediatrics & Geriatrics
                    </h1>
                    <p className="mx-auto text-base font-medium leading-relaxed text-gray-700 ">We provide services for the physical, emotional and social well-being of children and elderly patients with medical and psychosocial problems.
                    </p>
                  </div>
                </Link>
              </div>

              <div className="w-full mx-auto lg:w-1/3">
                <Link to="/services/suboxone-clinic">
                  <div data-sal="slide-up"
                    data-sal-delay="350"
                    data-sal-duration="1500"
                    data-sal-easing="ease-out-quint" className="p-6">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-full h-50 mx-auto mb-5 text-black bg-gray-100 rounded-full">
                      <img src="../addiction.jpeg" />
                    </div>
                    <h1 className="text-center mx-auto mb-4 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font">
                      Substance Abuse
                    </h1>
                    <p className="mx-auto text-base font-medium leading-relaxed text-gray-700 ">We provide Suboxone maintenance treatment along with counseling to those struggling with addiction.
                    </p>
                  </div>
                </Link>
              </div>

              <div className="w-full justify-center float-right mt-10 lg:pr-6 md:pr-6 place-items-center">
                <div data-sal="slide-up"
                  data-sal-delay="450"
                  data-sal-duration="1500"
                  data-sal-easing="ease-out-quint" className="w-full self-center text-center">
                  <Link to="/services" className="inline-flex items-center justify-center w-50 h-12 px-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-orange-600 hover:bg-orange-800 focus:shadow-outline focus:outline-none">View all services</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="flex flex-col m-auto text-gray-700 h-full md:h-screen lg:h-screen sm:h-full my-24 sm:pt-12 md:mx-0 mx-24">
        <div className="mx-auto text-center"><h1 data-sal="slide-up"
          data-sal-delay="200"
          data-sal-duration="1500"
          data-sal-easing="ease-out-quint" className="mx-auto mb-4 text-2xl font-semibold tracking-tighter text-black sm:text-6xl title-font">
          What Our Patients Say
        </h1>
          <p data-sal="slide-up"
            data-sal-delay="300"
            data-sal-duration="1500"
            data-sal-easing="ease-out-quint" className="text-large">We have been serving the Northwest Indiana area for over 34 years, see what our patients have to say.</p>  </div>
        <div className="container grid grid-cols-12 gap-4 mx-auto">
          <div data-sal="slide-right"
            data-sal-delay="400"
            data-sal-duration="1500"
            data-sal-easing="ease-out-quint" className="my-auto md:col-span-2 col-span-12 md:col-start-2 mt-20 mx-auto text-center">
            <img src="../blonde-lady.jpeg" className="rounded-full object-cover w-44 h-44 mt-6 ml-6 m-auto" />
          </div>
          <div data-sal="slide-left"
            data-sal-delay="400"
            data-sal-duration="1500"
            data-sal-easing="ease-out-quint" className="md:col-span-8 col-span-12 mt-20 rounded-2xl bg-yellow-50 w-full h-2/3 py-12 rounded-xl overflow-hidden" style={{ backgroundImage: "url('../quotation-mark3.png')", backgroundSize: '30%', backgroundRepeat: 'no-repeat', backgroundPosition: 'right' }}>

            <div className=" w-full px-5 mx-auto lg:px-24">

              {frontmatter.map(element => {
                return <div>
                  <div className="" dangerouslySetInnerHTML={{ __html: element.node.html }} />
                  <p className="text-sm float-right">- {element.node.frontmatter.author}</p>
                </div>
              })}
            </div>
          </div>
        </div>


      </section>

      <Footer />
    </div>
  );
}

export default Index;


// The medical needs of elderly are diffferent because as bodies age, the need for maintaining health also changes. To remain functional and independent proper excercises and bringing balance in life is important. Preventive care including blood work, xrays, and vaccination are important for a long healthy life. 
// Cardiac health, cancer screening, nutrition, mobility, mental health, dementia, adult vaccination, fall prevention, 