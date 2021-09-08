import * as React from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { Helmet } from 'react-helmet';
import sal from 'sal.js';

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
        <div className="w-full h-1/2 bg-gray-900 bg-opacity-100 overflow-hidden text-center relative" style={{ backgroundImage: 'url(../prenatal3.jpeg)', backgroundSize: 'cover', backgroundPosition: '0% 45%' }}>
          <div className="container mx-auto my-auto pt-20 h-1/2">
            <div className="w-9/12 mx-auto text-gray-300 mt-0 my-40 items-center content-center content-center h-1/2">
              <h1 className="mt-10 mb-4 pr-4 text-center font-sans text-4xl font-bold tracking-tight text-indigo-700 sm:text-4xl sm:leading-none"><span data-sal="fade"
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
        <div className="container flex mx-auto ">
          <section className="w-8/12 text-gray-600 body-font relative my-20" id="blog">
            <h2 className="font-sans text-xl font-bold tracking-tight text-gray-800 sm:text-3xl sm:leading-none mb-8">Prenatal Care</h2>

            <p className="mx-2 pb-4 text-lg">Having a healthy pregnancy is one of the best ways to promote a healthy birth. Getting early and regular prenatal care improves the chances of a healthy pregnancy. This care can begin even before pregnancy with a pre-pregnancy care visit.</p>
            <p className="mx-2 pb-4 text-lg">Pre-Pregnancy and prenatal care can help prevent complications and inform women about important steps they can take to protect their infant and ensure a healthy pregnancy. With regular prenatal care women can:</p>
            <ul className="mx-2 pl-8 py-6 text-lg list-inside list-disc rounded-xl bg-gray-50">
              <li className="mb-4">Reduce the risk of pregnancy complications. Following a healthy, safe diet; getting regular exercise as advised by a health care provider; and avoiding exposure to potentially harmful substances such as lead and radiation can help reduce the risk for problems during pregnancy and promote fetal health and development. Controlling existing conditions, such as high blood pressure and diabetes, is important to prevent serious complications and their effects.</li>
              <li className="mb-4">Reduce the fetus's and infant's risk for complications. Tobacco smoke and alcohol use during pregnancy have been shown to increase the risk for Sudden Infant Death Syndrome.6 Alcohol use also increases the risk for fetal alcohol spectrum disorders, which can cause a variety of problems such as abnormal facial features, having a small head, poor coordination, poor memory, intellectual disability, and problems with the heart, kidneys, or bones.7 According to one recent study supported by the NIH, these and other long-term problems can occur even with low levels of prenatal alcohol exposure.</li>
              <li className="mb-4">Help ensure the medications women take are safe. Women should not take certain medications, including some acne treatments11 and dietary and herbal supplements,12 during pregnancy because they can harm the fetus.</li>
            </ul>
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

export default Prenatal;
