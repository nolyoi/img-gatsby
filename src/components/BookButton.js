// Add book appt button/explanation.
import * as React from 'react';
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare, faIdBadge } from '@fortawesome/free-solid-svg-icons';


function BookButton({ nav }) {
  const [showModal, setShowModal] = React.useState(false);

  function getButton() {
    if (nav) {
        return <button onClick={() => setShowModal(true)} className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-600 hover:bg-indigo-700 focus:shadow-outline focus:outline-none" aria-label="Book Appointment" title="Book Appointment"><FontAwesomeIcon icon={faCalendarAlt} size="md" className="mr-2" /> <span className="mt-1">Book Now!</span></button>
    }
    return <div className="text-center mt-8">
    <button onClick={() => setShowModal(true)} className="inline-flex transform -rotate-1 text-2xl items-center mt-8 items-center justify-center w-50 h-10 px-8 font-semibold tracking-wide text-white transition duration-200 rounded-xl shadow-lg bg-green-500 hover:bg-green-600 focus:shadow-outline focus:outline-none py-8"><FontAwesomeIcon icon={faCalendarAlt} size="lg" className="mr-4" /> <span className="mt-1">Book Now!</span></button>
  </div>

  }

  return (
    <div>
      {getButton(nav)}

      {showModal ? (
        <div>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-8 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-dashed border-gray-300 rounded-t align-middle">
                  <h3 className="text-3xl font-semibold mt-1 text-gray-600">
                    <FontAwesomeIcon icon={faCalendarAlt} className="text-gray-600 mr-2"></FontAwesomeIcon> Book an Appointment
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
                  <span className="inline-block py-4 px-8 text-gray-500 text-lg text-center">
                    <p className="mb-4 mt-2">New patients can click the button below to fill out the new patient form. This will help speed up your visit! You can then call and set up an appointment.</p>
                    <p className="mb-4 mt-2">Current patients are able to book through Practice Fusion.</p>
                    <div className="flex flex-row justify-items-center justify-center text-center mt-8 mb-4"> 
                      <a href="https://form.jotform.com/212516599423056" target="blank" rel="noreferrer" className="mr-4 inline-flex text-xl items-center items-center justify-center w-50 h-10 px-8 font-semibold tracking-wide text-white transition duration-200 rounded-xl shadow-lg bg-indigo-600 hover:bg-indigo-700 focus:shadow-outline focus:outline-none py-8"><FontAwesomeIcon icon={faPlusSquare} size="lg" className="mr-4" /> <span className="mt-1">New Patient</span></a>
                      <p className="my-auto mr-4">
                        or
                        </p>
                      <Link to="https://login.patientfusion.com/?defaultTab=login&redirect=https%3A%2F%2Fmy.patientfusion.com" className="inline-flex text-xl items-center items-center justify-center w-50 h-10 px-8 font-semibold tracking-wide text-white transition duration-200 rounded-xl shadow-lg bg-indigo-600 hover:bg-indigo-700 focus:shadow-outline focus:outline-none py-8" target="blank"><FontAwesomeIcon icon={faIdBadge} size="lg" className="mr-4" /> <span className="mt-1">Current Patient</span></Link>
                    </div>

                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
        </div>
      ) : null}
    </div>
  );
}

export default BookButton;