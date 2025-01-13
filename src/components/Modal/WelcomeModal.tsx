import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const WelcomeModal: React.FC = () => {
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowModal(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8">
            <div className="flex justify-end items-center">
              <h2 className="text-2xl font-bold text-blue-800"></h2>
              <button
                className="text-gray-500  -mt-5 -mr-5 hover:text-red-700"
                onClick={closeModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="text-center">
              <div className="flex justify-center items-center pb-8">
                <img
                  className="   rounded-lg"
                  src="https://templatekit.tokomoo.com/gaveall/wp-content/uploads/sites/20/2021/01/Partner-02.png"
                ></img>
              </div>
              <h2 className="text-2xl font-bold text-blue-900 text-center">
                Join With Us
              </h2>
              <p className="py-5">
                Direct Relief works in the Bangladesh and internationally for
                medicine and healthcare support in post disaster situation.
              </p>
              <div className="flex justify-center items-center">
                <button
                  onClick={closeModal}
                  className="btn btn-wide btn-outline hover:bg-blue-900 hover:text-white uppercase  rounded-none text-blue-900 text-center"
                >
                  <Link to="/login" className="text-center">
                    Donate Now
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WelcomeModal;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const WelcomeModal: React.FC = () => {
//   const [showModal, setShowModal] = useState(false);

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setShowModal(true);
//     }, 5000);

//     return () => clearTimeout(timeout);
//   }, []);

//   return (
//     <div className="mx-auto">
//       {showModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white rounded-lg p-8 w-1/2">
//             <div className="flex justify-end items-center">
//               <h2 className="text-2xl font-bold text-blue-800"></h2>
//               <button
//                 className="text-gray-500  -mt-5 -mr-5 hover:text-red-700"
//                 onClick={closeModal}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>
//             </div>
//             <div className="text-center">
//               <div className="flex justify-center items-center pb-8">
//                 <img
//                   className="   rounded-lg"
//                   src="https://templatekit.tokomoo.com/gaveall/wp-content/uploads/sites/20/2021/01/Partner-02.png"
//                   alt="Partner Logo"
//                 />
//               </div>
//               <h2 className="text-2xl font-bold text-blue-900 text-center">
//                 Join With Us
//               </h2>
//               <p className="py-5 sm:w-1/2 mx-auto">
//                 Direct Relief works in the Bangladesh and internationally for{" "}
//                 medicine and healthcare support in post disaster situation.
//               </p>
//               <div className="flex justify-center items-center">
//                 <button
//                   onClick={closeModal}
//                   className="btn btn-wide btn-outline hover:bg-blue-900 hover:text-white uppercase  rounded-none text-blue-900 text-center"
//                 >
//                   <Link to="/login" className="text-center">
//                     Donate Now
//                   </Link>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default WelcomeModal;
