import * as React from 'react';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';
import sal from 'sal.js';

function AboutUs() {
    React.useEffect(
        () => {
            sal();
        });

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
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-XFF5TPVP9Y"></script>
                <script>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-XFF5TPVP9Y');
                    `}
                </script>
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
                                <div className="relative flex items-center justify-center overflow-hidden object-cover object-center w-full h-48 mx-auto rounded-lg"><Link to="/about-us/shreyas-desai" className="absolute w-full h-full transition-all duration-500 hover:scale-110 ease-in-out transform bg-center bg-cover" style={{ backgroundImage: 'url("../../desai.jpeg")' }} alt="avatar"></Link></div>
                                <div className="mt-2">
                                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Shreyas Desai</h3>
                                    <p className="mt-0 font-medium text-gray-600 dark:text-gray-300">Doctor</p>
                                    <Link to="/about-us/shreyas-desai" className="text-orange-500 inline-flex items-center">Learn More
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>

                            <div data-sal="slide-left"
                                data-sal-delay="300"
                                data-sal-duration="1500"
                                data-sal-easing="ease-out-quint" className="w-full max-w-xs text-center">
                                <div className="relative flex items-center justify-center overflow-hidden object-cover object-center w-full h-48 mx-auto rounded-lg"><Link to="/about-us/havish-sarma" className="absolute w-full h-full transition-all duration-500 hover:scale-110 ease-in-out transform bg-center bg-cover" style={{ backgroundImage: 'url("../../sarma.jpeg")' }} alt="avatar"></Link></div>
                                <div className="mt-2">
                                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Havishakrishna Sarma</h3>
                                    <p className="mt-0 font-medium text-gray-600 dark:text-gray-300">Doctor</p>
                                    <Link to="/about-us/havish-sarma" className="text-orange-500 inline-flex items-center">Learn More
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>

                            <div data-sal="slide-left"
                                data-sal-delay="400"
                                data-sal-duration="1500"
                                data-sal-easing="ease-out-quint" className="w-full max-w-xs text-center">
                                <div className="relative flex items-center justify-center overflow-hidden object-cover object-center w-full h-48 mx-auto rounded-lg"><div className="absolute w-full h-full transition-all duration-500 hover:scale-110 ease-in-out transform bg-center bg-cover" style={{ backgroundImage: 'url("../../patel.jpeg")' }} alt="avatar"></div></div>

                                <div className="mt-2">
                                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Truptiben Patel</h3>
                                    <p className="mt-0 font-medium text-gray-600 dark:text-gray-300">Doctor</p>
                                    <a className="text-orange-500 inline-flex items-center">Learn More
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
                                <div className="relative flex items-center justify-center overflow-hidden object-cover object-center w-full h-48 mx-auto rounded-lg"><div className="absolute w-full h-full transition-all duration-500 hover:scale-110 ease-in-out transform bg-center bg-cover" style={{ backgroundImage: 'url("../../gayle.jpeg")' }} alt="avatar"></div></div>
                                <div className="mt-2">
                                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Gayle Voight-Block</h3>
                                    <p className="mt-0 font-medium text-gray-600 dark:text-gray-300">Nurse Practitioner</p>
                                    <a className="text-orange-500 inline-flex items-center">Learn More
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
                                <div className="relative flex items-center justify-center overflow-hidden object-cover object-center w-full h-48 mx-auto rounded-lg"><Link to="/about-us/christina-connelly" className="absolute w-full h-full transition-all duration-500 hover:scale-110 ease-in-out transform bg-center bg-cover" style={{ backgroundImage: 'url("../../christina.jpeg")' }} alt="avatar"></Link></div>
                                <div className="mt-2">
                                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Christina Connelly</h3>
                                    <p className="mt-0 font-medium text-gray-600 dark:text-gray-300">Nurse Practitioner</p>
                                    <Link to="/about-us/christina-connelly" className="text-orange-500 inline-flex items-center">Learn More
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>

                            <div data-sal="slide-right"
                                data-sal-delay="400"
                                data-sal-duration="1500"
                                data-sal-easing="ease-out-quint" className="w-full max-w-xs text-center">
                                <Link to="/about-us/mary-szymaszek"><img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src="../../mary.jpeg" alt="avatar" /></Link>
                                <div className="mt-2">
                                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Mary Szymaszek</h3>
                                    <p className="mt-0 font-medium text-gray-600 dark:text-gray-300">Nurse/Office Manager</p>
                                    <Link to="/about-us/mary-szymaszek" className="text-orange-500 inline-flex items-center">Learn More
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
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
