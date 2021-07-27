import * as React from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { Helmet } from 'react-helmet';

function AboutUs() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                ( <title>{`Internal Medicine and Geriatric - About Us</title>`}</title> )
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=Mali:wght@600&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            </Helmet>
            <Nav menuItem="about-us" />

            <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-0 lg:py-0">
                <section className="text-gray-600 body-font">
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                            <img className="object-cover object-center rounded" alt="hero" src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Flag_of_Indiana.svg" />
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 text-gray-900 font-bold tracking-tight">Serving Northwest Indiana for {new Date().getFullYear() - 1987} years
                            </h1>
                            <p className="mb-6 leading-relaxed">Our team of experienced medical professionals have been serving communities in the Northwest Indiana region since 1987. We now operate 3 offices in Portage and Gary Indiana.</p>

                            <p className="mb-8 leading-relaxed">IMG provides various services such as family, pediatric, and geriatric medicine as well as mental health and substance abuse services. Reach out to our friendly staff today for more information or to schedule an appointment!</p>

                            <div className="flex w-full justify-items-center items-center content-center">
                                <a href="/" className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-500 hover:bg-green-600 focus:shadow-outline focus:outline-none" aria-label="Sign up" title="Sign up">
                                    Contact us Today!
                                </a>
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
                                    <a className="text-indigo-500 inline-flex items-center">Learn More
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
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

            <Footer />
        </div>
    );
}

export default AboutUs;
