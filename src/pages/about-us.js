import * as React from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';

function AboutUs() {
    const [showModal, setShowModal] = React.useState(false);

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                ( <title>{`Internal Medicine and Geriatric - About Us`}</title> )
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=Mali:wght@600&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            </Helmet>
            <Nav menuItem="about-us" />

            <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-0 lg:py-0">
                <section className="text-gray-600 body-font">
                    <div className="container mx-auto flex px-5 py-24 md:flex-col lg:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-full w-5/6 mb-10 md:mb-10">
                            <img className="object-cover object-center rounded" alt="hero" src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Flag_of_Indiana.svg" />
                        </div>
                        <div className="lg:flex-grow md:w-full lg:pl-24 flex flex-col md:items-start items-center text-left">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 text-gray-900 font-bold tracking-tight md:text-center w-full">Serving Northwest Indiana for {new Date().getFullYear() - 1987} years
                            </h1>
                            <p className="mb-6 leading-relaxed">Our team of experienced medical professionals have been serving communities in the Northwest Indiana region since 1987. We now operate 3 offices in Portage and Gary Indiana.</p>

                            <p className="mb-8 leading-relaxed">IMG provides various services such as family, pediatric, and geriatric medicine as well as mental health and substance abuse services. Reach out to our friendly staff today for more information or to schedule an appointment!</p>

                            <div className="flex w-full justify-items-center items-center content-center">
                                <Link to="/contact-us" className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-500 hover:bg-green-600 focus:shadow-outline focus:outline-none" aria-label="Sign up" title="Sign up">
                                    <FontAwesomeIcon icon={faPaperPlane} className="mr-2"/> Contact us Today!
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container p-6 mx-auto bg-white dark:bg-gray-800" id="staff">
                    <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl sm:leading-none">Meet Our Team</h2>

                    <div className="flex items-center justify-center w-full">
                        <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                            <div className="w-full max-w-xs text-center">
                                <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src="./desai.jpeg" alt="avatar" />
                                <div className="mt-2">
                                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Shreyas Desai</h3>
                                    <p className="mt-0 font-medium text-gray-600 dark:text-gray-300">Doctor</p>
                                    <button onClick={() => setShowModal(true)} className="text-indigo-500 inline-flex items-center">Learn More
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="w-full max-w-xs text-center">
                                <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src="./sarma.jpeg" alt="avatar" />
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

                            <div className="w-full max-w-xs text-center">
                                <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src="./christina.jpeg" alt="avatar" />
                                <div className="mt-2">
                                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Christina Vlamos</h3>
                                    <p className="mt-0 font-medium text-gray-600 dark:text-gray-300">Nurse Practitioner</p>
                                    <a className="text-indigo-500 inline-flex items-center">Learn More
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div className="w-full max-w-xs text-center">
                                <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="avatar" />
                                <div className="mt-2">
                                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Gayle</h3>
                                    <p className="mt-0 font-medium text-gray-600 dark:text-gray-300">Doctor</p>
                                    <a className="text-indigo-500 inline-flex items-center">Learn More
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div className="w-full max-w-xs text-center">
                                <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="avatar" />
                                <div className="mt-2">
                                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Patel</h3>
                                    <p className="mt-0 font-medium text-gray-600 dark:text-gray-300">Doctor</p>
                                    <a className="text-indigo-500 inline-flex items-center">Learn More
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div className="w-full max-w-xs text-center">
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
            {showModal ? (
                <div>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-dashed border-gray-300 rounded-t align-middle">
                                    <h3 className="text-3xl font-semibold mt-1">
                                        Doctor Shreyas Desai
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-gray-200 hover:bg-red-500 rounded border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="text-gray-500 hover:text-white z-50 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="mt-2">
                                    <span className="inline-block py-4 px-8 text-blueGray-500 text-lg">
                                        <img className="inline-block w-60 mr-8 mb-3 object-cover float-left h-60 rounded-full" src="./desai.jpeg" alt="avatar" />
                                        <p className="mb-4 mt-2">I always felt like I could do anything. That’s the main
                                        thing people are controlled by! Thoughts- their perception
                                        of themselves! They're slowed down by their perception of
                                        themselves. If you're taught you can’t do anything, you
                                        won’t do anything. I was taught I could do everything.
                                        </p>
                                        <p>I always felt like I could do anything. That’s the main
                                        thing people are controlled by! Thoughts- their perception
                                        of themselves! They're slowed down by their perception of
                                        themselves. If you're taught you can’t do anything, you
                                        won’t do anything. I was taught I could do everything.
                                        </p>
                                    </span>
                                </div>

                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 rounded-b">
                                    <button
                                        className="bg-gray-700 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Back
                                    </button>
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
