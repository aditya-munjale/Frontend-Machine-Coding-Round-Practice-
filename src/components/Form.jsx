import React, { useState } from "react";

const Form = () => {
  const [searchName, setSearchName] = useState("");
  const [searchEmail, setSearchEmail] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const [formSubmit, setFormSubmit] = useState("");
  const [hideSubmit, setHideSubmit] = useState("");

  const validateName = (value) => {
    if (value.trim().length < 10) {
      setNameError("Username must contain atleast 10 characters");
    } else {
      setNameError("");
    }
  };

  const validateEmail = (value) => {
    if (!value.includes("@")) {
      setEmailError("Invalid email");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nameError && !emailError && searchName && searchEmail) {
      setFormSubmit("Form Submitted Successfully");
    } else {
      setHideSubmit("Submit btn is hide");
    }
  };

  const isDisabled = nameError || emailError || !searchName || !searchEmail;

  return (
    <form>
      <div className="min-h-screen flex items-center justify-center bg-red-100">
        <div className="bg-white p-6 rounded-lg shadow-md w-80 space-y-4 ">
          <div className="flex flex-col">
            <label>Enter name</label>
            <input
              placeholder="enter name"
              type="text"
              className="border border-grey-300 p-1 rounded"
              value={searchName}
              onChange={(e) => {
                setSearchName(e.target.value);
                validateName(e.target.value);
              }}
            ></input>
            {nameError && (
              <p className="text-red-400 text-sm mt-1">{nameError}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label>Enter email</label>
            <input
              placeholder="enter email"
              type="email"
              className="border border-grey-300 p-1 rounded "
              value={searchEmail}
              onChange={(e) => {
                setSearchEmail(e.target.value);
                validateEmail(e.target.value);
              }}
            ></input>
            {emailError && (
              <p className="text-red-500 text-md mt-1">{emailError}</p>
            )}
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              disabled={isDisabled}
              className={`p-3 rounded text-white ${
                isDisabled
                  ? "bg-gray-800 cursor-not-allowed"
                  : "bg-green-400 hover:bg-green-800 "
              }`}
            >
              Submit
            </button>
          </div>
          {formSubmit && (
            <p className="text-green-500 text-md pl-8 mt-1">{formSubmit}</p>
          )}
        </div>
      </div>
    </form>
  );
};

export default Form;
