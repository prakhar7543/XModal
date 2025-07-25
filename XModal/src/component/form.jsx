import React, { useEffect, useRef, useState } from "react";
import "./form.css";

export default function Form() {
  const [showModal, setShowModal] = useState(false);
  const [inputData, setInputData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    dob: "",
  });

  const modalRef = useRef();

  function validation() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
    const handleClickOutside = (e) => {
      if (
        showModal &&
        modalRef.current &&
        !modalRef.current.contains(e.target)
      ) {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  const handleOpenModal = () => setShowModal(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validation()) return;

    setInputData({
      username: "",
      email: "",
      phoneNumber: "",
      dob: "",
    });

    setShowModal(false);
  };

  const handleUsername = (e) => {
    setInputData((prev) => ({ ...prev, username: e.target.value }));
  };

  const handleEmail = (e) => {
    setInputData((prev) => ({ ...prev, email: e.target.value }));
  };

  const handlePhoneNumber = (e) => {
    setInputData((prev) => ({ ...prev, phoneNumber: e.target.value }));
  };

  const handleDob = (e) => {
    setInputData((prev) => ({ ...prev, dob: e.target.value }));
  };

  return (
    <div>
      <h1>User Details Modal</h1>
      <button
        onClick={handleOpenModal}
        style={{ backgroundColor: "#2196f3f7", color: "white" }}
      >
        Open Form
      </button>

      {showModal && (
        <div className="modal">
          <div className="modal-content" ref={modalRef}>
            <form onSubmit={handleSubmit}>
              <h1 style={{ marginTop: "15px", marginBottom: "15px" }}>
                Fill Details
              </h1>
              <div>
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  required
                  value={inputData.username}
                  onChange={handleUsername}
                />
              </div>
              <div>
                <label htmlFor="email">Email Address:</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={inputData.email}
                  onChange={handleEmail}
                />
              </div>
              <div>
                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={inputData.phoneNumber}
                  onChange={handlePhoneNumber}
                />
              </div>
              <div>
                <label htmlFor="dob">Date of Birth:</label>
                <input
                  type="date"
                  id="dob"
                  required
                  value={inputData.dob}
                  onChange={handleDob}
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
      )}
    </div>
  );
}
