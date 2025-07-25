// import React, { useEffect, useRef, useState } from "react";
// import "./form.css";

// export default function Form() {
//   let [showModal, setShowModal] = useState(false);
//   let [inputData, setInputData] = useState({
//     username: "",
//     email: "",
//     phoneNumber: "",
//     dob: "",
//   });

//   let modalRef = useRef();

//   function validation() {
//     let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(inputData.email)) {
//       alert("Invalid email. Please check your email address.");
//       return;
//     }

//     if (inputData.phoneNumber.length !== 10 || isNaN(inputData.phoneNumber)) {
//       alert("Invalid phone number. Please enter a 10-digit phone number.");
//       return;
//     }

//     if (!inputData.dob || new Date(inputData.dob) > new Date()) {
//       alert("Invalid date of birth. Please enter a valid past date.");
//       return;
//     }

//     return true;
//   }

//   useEffect(() => {

//     let handleClickOutside = (e) => {

//       if(modalRef.current && !modalRef.current.contains(e.target)){
//         handleCloseModal();
//       }
//     }

//       if(showModal){
//         document.addEventListener('mousedown', handleClickOutside);
//       }

//       return() => {
//         document.removeEventListener('mousedown', handleClickOutside);
//       }

//   }, [showModal])

//   let handleOpenModal = () => {
//     setShowModal(true);
//   };

//   let handleCloseModal = () => {
//     setShowModal(false);
//   };

//   let handleSubmit = (e) => {
//     e.preventDefault();

//     if (!validation()) {
//       return;
//     }

//     setInputData({
//       username: "",
//       email: "",
//       phoneNumber: "",
//       dob: "",
//     });

//     setShowModal(false);
//   };

//   let handleUsername = (e) => {
//     let val = e.target.value;
//     setInputData((prev) => ({
//       ...prev,
//       username: val,
//     }));
//   };

//   let handleEmail = (e) => {
//     let val = e.target.value;
//     setInputData((prev) => ({
//       ...prev,
//       email: val,
//     }));
//   };

//   let handlePhoneNumber = (e) => {
//     let val = e.target.value;
//     setInputData((prev) => ({
//       ...prev,
//       phoneNumber: val,
//     }));
//   };

//   let handleDob = (e) => {
//     let val = e.target.value;
//     setInputData((prev) => ({
//       ...prev,
//       dob: val,
//     }));
//   };

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <h1>User Details Modal</h1>
//         <button
//           onClick={handleOpenModal}
//           style={{ backgroundColor: "#2196f3f7", color: "white" }}
//         >
//           Open Form
//         </button>
//         </div>

//         {showModal && (
//           <div
//             className="modalBox"
//             onClick={(e) => {
//               if (e.target.classList.contains("modalBox")) {
//                 handleCloseModal();
//               }
//             }}
//           >
//             <div className="modalForm" ref={modalRef}>
//               <h1 style={{ marginTop: "15px" }}>Fill Details</h1>
//               <form onSubmit={handleSubmit}>
//                 <div>
//                   <label htmlFor="username">Username:</label>
//                   <input
//                     type="text"
//                     id="username"
//                     required
//                     onChange={handleUsername}
//                     value={inputData.username}
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="email">Email Address:</label>
//                   <input
//                     type="email"
//                     id="email"
//                     required
//                     onChange={handleEmail}
//                     value={inputData.email}
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="phone">Phone Number:</label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     required
//                     onChange={handlePhoneNumber}
//                     value={inputData.phoneNumber}
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="dob">Date of Birth:</label>
//                   <input
//                     type="date"
//                     id="dob"
//                     required
//                     onChange={handleDob}
//                     value={inputData.dob}
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="submit-button"
//                   style={{ backgroundColor: "#2196f3f7", color: "white" }}
//                 >
//                   Submit
//                 </button>
//               </form>
//             </div>
//           </div>
//         )}
      
//     </div>
//   );
// }


import React, { useEffect, useRef, useState } from "react";
import "./form.css";

export default function Form() {
  let [showModal, setShowModal] = useState(false);
  let [inputData, setInputData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    dob: "",
  });

  let modalRef = useRef();

  function validation() {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputData.email)) {
      alert("Invalid email. Please check your email address.");
      return false;
    }

    if (inputData.phoneNumber.length !== 10 || isNaN(inputData.phoneNumber)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return false;
    }

    if (!inputData.dob || new Date(inputData.dob) > new Date()) {
      alert("Invalid date of birth. Please enter a valid past date.");
      return false;
    }

    return true;
  }

  useEffect(() => {
    let handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        handleCloseModal();
      }
    };

    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  let handleOpenModal = () => {
    setShowModal(true);
  };

  let handleCloseModal = () => {
    setShowModal(false);
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    if (!validation()) {
      return;
    }

    setInputData({
      username: "",
      email: "",
      phoneNumber: "",
      dob: "",
    });

    setShowModal(false);
  };

  let handleUsername = (e) => {
    setInputData((prev) => ({ ...prev, username: e.target.value }));
  };

  let handleEmail = (e) => {
    setInputData((prev) => ({ ...prev, email: e.target.value }));
  };

  let handlePhoneNumber = (e) => {
    setInputData((prev) => ({ ...prev, phoneNumber: e.target.value }));
  };

  let handleDob = (e) => {
    setInputData((prev) => ({ ...prev, dob: e.target.value }));
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h1>User Details Modal</h1>
        <button
          onClick={handleOpenModal}
          style={{ backgroundColor: "#2196f3f7", color: "white" }}
        >
          Open Form
        </button>
      </div>

      {showModal && (
        <div className="modalBox">
          <div
            className="overlay"
            onClick={(e) => {
              if (e.target.classList.contains("overlay")) {
                handleCloseModal();
              }
            }}
          >
            <div className="modalForm overlay" ref={modalRef}>
              <h1 style={{ marginTop: "15px" }}>Fill Details</h1>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    id="username"
                    required
                    onChange={handleUsername}
                    value={inputData.username}
                  />
                </div>
                <div>
                  <label htmlFor="email">Email Address:</label>
                  <input
                    type="email"
                    id="email"
                    required
                    onChange={handleEmail}
                    value={inputData.email}
                  />
                </div>
                <div>
                  <label htmlFor="phone">Phone Number:</label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    onChange={handlePhoneNumber}
                    value={inputData.phoneNumber}
                  />
                </div>
                <div>
                  <label htmlFor="dob">Date of Birth:</label>
                  <input
                    type="date"
                    id="dob"
                    required
                    onChange={handleDob}
                    value={inputData.dob}
                  />
                </div>
                <button
                  type="submit"
                  className="submit-button"
                  style={{ backgroundColor: "#2196f3f7", color: "white" }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

