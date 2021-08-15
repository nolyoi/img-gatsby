import * as React from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';
import sal from 'sal.js';

function AboutUs() {
    const [showDesai, setShowDesai] = React.useState(false);
    const [showChristina, setShowChristina] = React.useState(false);
    sal();

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                ( <title>{`Internal Medicine and Geriatrics - About Us`}</title> )
                <meta name="Description" content="About Internal Medicine and Geriatrics." />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=Mali:wght@600&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            </Helmet>

            <Nav menuItem="about-us" />

            <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-0 lg:py-0 mt-10">
                <section className="text-gray-600 body-font">
                    <div className="container mx-auto flex px-5 py-24 md:flex-col lg:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-full w-5/6 mb-10 md:mb-10">
                            <img data-sal="fade"
                                data-sal-delay="300"
                                data-sal-duration="1500"
                                data-sal-easing="ease-out-quint" className="object-cover object-center rounded" alt="hero" src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Flag_of_Indiana.svg" />
                        </div>
                        <div className="lg:flex-grow md:w-full lg:pl-24 flex flex-col md:items-start items-center text-left">
                            <h1 data-sal="slide-left"
                                data-sal-delay="350"
                                data-sal-duration="1500"
                                data-sal-easing="ease-out-quint" className="title-font sm:text-4xl text-3xl mb-4 text-gray-900 font-bold tracking-tight lg:text-left md:text-center md:mb-4 lg:-mt-8 md:mt-8 w-full">Serving Northwest Indiana for {new Date().getFullYear() - 1987} years
                            </h1>
                            <p data-sal="slide-left"
                                data-sal-delay="350"
                                data-sal-duration="1500"
                                data-sal-easing="ease-out-quint" className="mb-6 leading-relaxed">Our team of experienced medical professionals have been serving communities in the Northwest Indiana region since 1987. We now operate 3 offices in Portage and Gary Indiana.</p>

                            <p data-sal="slide-left"
                                data-sal-delay="350"
                                data-sal-duration="1500"
                                data-sal-easing="ease-out-quint" className="mb-8 leading-relaxed">IMG provides various services such as family, pediatric, and geriatric medicine as well as mental health and substance abuse services. Reach out to our friendly staff today for more information or to schedule an appointment!</p>

                            <div data-sal="slide-left"
                                data-sal-delay="450"
                                data-sal-duration="1500"
                                data-sal-easing="ease-out-quint" className="flex w-full justify-items-center items-center content-center">
                                <Link to="/contact-us" className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-500 hover:bg-green-600 focus:shadow-outline focus:outline-none" aria-label="Sign up" title="Sign up">
                                    <FontAwesomeIcon icon={faPaperPlane} className="mr-2" /> Contact us Today!
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container p-6 mx-auto bg-white dark:bg-gray-800 mt-10 mb-20" id="staff">
                    <h2 data-sal="slide-up"
                        data-sal-delay="400"
                        data-sal-duration="1500"
                        data-sal-easing="ease-out-quint" className="mb-6 font-sans text-3xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl sm:leading-none">Meet Our Team</h2>

                    <div className="flex items-center justify-center w-full">
                        <div className="grid gap-6 mt-8 sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-3">
                            <div className="w-full max-w-xs text-center">
                                <div className="relative flex items-center justify-center overflow-hidden object-cover object-center w-full h-48 mx-auto rounded-lg"><button onClick={() => setShowDesai(true)} className="absolute w-full h-full transition-all duration-500 hover:scale-110 ease-in-out transform bg-center bg-cover" style={{ backgroundImage: 'url("./desai.jpeg")' }} alt="avatar"></button></div>
                                <div className="mt-2">
                                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Shreyas Desai</h3>
                                    <p className="mt-0 font-medium text-gray-600 dark:text-gray-300">Doctor</p>
                                    <button onClick={() => setShowDesai(true)} className="text-indigo-500 inline-flex items-center">Learn More
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div data-sal="slide-left"
                                data-sal-delay="300"
                                data-sal-duration="1500"
                                data-sal-easing="ease-out-quint" className="w-full max-w-xs text-center">
                                <div className="relative flex items-center justify-center overflow-hidden object-cover object-center w-full h-48 mx-auto rounded-lg"><div className="absolute w-full h-full transition-all duration-500 hover:scale-110 ease-in-out transform bg-center bg-cover" style={{ backgroundImage: 'url("./sarma.jpeg")' }} alt="avatar"></div></div>
                                <div className="mt-2">
                                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Havishakrishna Sarma</h3>
                                    <p className="mt-0 font-medium text-gray-600 dark:text-gray-300">Doctor</p>
                                    <a className="text-indigo-500 inline-flex items-center">Learn More
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div data-sal="slide-left"
                                data-sal-delay="400"
                                data-sal-duration="1500"
                                data-sal-easing="ease-out-quint" className="w-full max-w-xs text-center">
                                <div className="relative flex items-center justify-center overflow-hidden object-cover object-center w-full h-48 mx-auto rounded-lg"><div className="absolute w-full h-full transition-all duration-500 hover:scale-110 ease-in-out transform bg-center bg-cover" style={{ backgroundImage: 'url("./patel.jpeg")' }} alt="avatar"></div></div>

                                <div className="mt-2">
                                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Truptiben Patel</h3>
                                    <p className="mt-0 font-medium text-gray-600 dark:text-gray-300">Doctor</p>
                                    <a className="text-indigo-500 inline-flex items-center">Learn More
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>

                                </div>
                            </div>

                            <div data-sal="slide-right"
                                data-sal-delay="300"
                                data-sal-duration="1500"
                                data-sal-easing="ease-out-quint" className="w-full max-w-xs text-center">
                                <div className="relative flex items-center justify-center overflow-hidden object-cover object-center w-full h-48 mx-auto rounded-lg"><div className="absolute w-full h-full transition-all duration-500 hover:scale-110 ease-in-out transform bg-center bg-cover" style={{ backgroundImage: 'url("./gayle.jpeg")' }} alt="avatar"></div></div>
                                <div className="mt-2">
                                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Gayle Voight-Block</h3>
                                    <p className="mt-0 font-medium text-gray-600 dark:text-gray-300">Nurse Practitioner</p>
                                    <a className="text-indigo-500 inline-flex items-center">Learn More
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div data-sal="slide-right"
                                data-sal-delay="350"
                                data-sal-duration="1500"
                                data-sal-easing="ease-out-quint" className="w-full max-w-xs text-center">
                                <div className="relative flex items-center justify-center overflow-hidden object-cover object-center w-full h-48 mx-auto rounded-lg"><button onClick={() => setShowChristina(true)} className="absolute w-full h-full transition-all duration-500 hover:scale-110 ease-in-out transform bg-center bg-cover" style={{ backgroundImage: 'url("./christina.jpeg")' }} alt="avatar"></button></div>
                                <div className="mt-2">
                                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Christina Connelly</h3>
                                    <p className="mt-0 font-medium text-gray-600 dark:text-gray-300">Nurse Practitioner</p>
                                    <button onClick={() => setShowChristina(true)} className="text-indigo-500 inline-flex items-center">Learn More
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div data-sal="slide-right"
                                data-sal-delay="400"
                                data-sal-duration="1500"
                                data-sal-easing="ease-out-quint" className="w-full max-w-xs text-center">
                                <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src="./mary.jpeg" alt="avatar" />
                                <div className="mt-2">
                                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Mary Szymaszek</h3>
                                    <p className="mt-0 font-medium text-gray-600 dark:text-gray-300">Nurse/Office Manager</p>
                                    <a className="text-indigo-500 inline-flex items-center">Learn More
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {showDesai ? (
                <div>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-dashed border-gray-300 rounded-t align-middle">
                                    <h3 className="text-3xl font-semibold mt-1">
                                        <FontAwesomeIcon icon={faHeartbeat} className="text-red-500 mr-2"></FontAwesomeIcon> Doctor Shreyas Desai
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-gray-200 hover:bg-red-500 rounded border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowDesai(false)}
                                    >
                                        <span className="text-gray-500 hover:text-white z-50 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="mt-2 mb-4">
                                    <span className="inline-block py-4 px-8 text-gray-500 text-lg">
                                        <img className="inline-block w-60 mr-8 mb-3 object-cover float-left h-60 rounded-full" src="./desai.jpeg" alt="avatar" />
                                        <h3 className="text-2xl font-semibold mt-1">
                                            About Dr. Desai
                                        </h3>
                                        <p className="mb-4 mt-2">Shreyas Desai is certified in Internal Medicine and Geriatric.s He has been in practice for 50 years practicing at Methodist, St. Mary, and Pinnacle hospitals. </p>
                                        
                                        <p className="mb-4 mt-2">He completed his training in Internal Medicine from Mount Sinai University. He went on to complete his Oncology training at Northwestern University.
                                        </p>

                                        <p className="mb-4 mt-2">
                                            Dr. Desai has experience in critical care, as well as a special focus in obesity medicine, the treatment of opiate dependence, and geriatric medicine. He places high value on individualized and continuity of care, strong family values, and preventative medicine.
                                        </p>
                                        <p className="mb-4 mt-2">
                                            Dr. Desai currently resides in Northwest Indiana. He is a father and grandfather with 5 grandchildren and 3 children. His children also work in medicine and law. Being part of the community has inspired him to make a positive impact on others and their health.
                                        </p>
                                    </span>
                                </div>

                                {/*footer*/}
                            </div>
                        </div>
                    </div>
                    <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
                </div>
            ) : null}

            {showChristina ? (
                <div>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-8 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-dashed border-gray-300 rounded-t align-middle">
                                    <h3 className="text-3xl font-semibold mt-1">
                                        <FontAwesomeIcon icon={faHeartbeat} className="text-red-500 mr-2"></FontAwesomeIcon> Christina Connelly, NP
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-gray-200 hover:bg-red-500 rounded border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowChristina(false)}
                                    >
                                        <span className="text-gray-500 hover:text-white z-50 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="mt-2">
                                    <span className="inline-block py-4 px-8 text-gray-500 text-lg">
                                        <img className="inline-block w-60 mr-8 mb-3 object-cover float-left h-60 rounded-full" src="./christina.jpeg" alt="avatar" />
                                        <h3 className="text-2xl font-semibold mt-1">
                                            About Dr. Connelly
                                        </h3>
                                        <p className="mb-4 mt-2">Christina Connelly is a certified <strong><i>Family Nurse Practitioner</i></strong>. She obtained her <i>Bachelor’s Degree</i> in Nursing from <strong>Indiana University</strong>. She went on to complete her <i>Master’s Degree</i> at <strong>Indiana Wesleyan University</strong> graduating in 2015. </p>

                                        <p className="mb-4 mt-2">As a Family Nurse Practitioner, she has practiced in a variety of inpatient and outpatient settings. She has also integrated telemedicine into her practice. Christina has experience in critical care, as well as a special focus in obesity medicine, the treatment of opiate dependence, and geriatric medicine.
                                            She places high value on individualized care, strong family values, and preventative medicine.</p>

                                        <p className="mb-4 mt-2">Christina was born and raised in Northwest Indiana and currently lives in Valparaiso with her husband and youngest daughter. Being part of the community herself, has inspired her to make a positive impact on others and their health.</p>
                                        <p className="mb-4 mt-2">In her spare time Christina enjoys spending time with her eldest sons, exploring the Dunes State Park, traveling, snorkeling and exercise of any kind.
                                        </p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
                </div>
            ) : null}

            <Footer />
        </div>
    );
}

export default AboutUs;
