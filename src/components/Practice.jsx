import React, { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [msgError, setMsgError] = useState("");

  const [successMsg, setSuccessMsg] = useState("");

  // ✅ Name Validation
  const validateName = (value) => {
    if (!value.trim()) {
      setNameError("Name is required");
    } else {
      setNameError("");
    }
  };

  // ✅ Email Validation (Regex)
  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!value.trim()) {
      setEmailError("Email is required");
    } else if (!regex.test(value)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  // ✅ Message Validation
  const validateMsg = (value) => {
    if (!value.trim()) {
      setMsgError("Message is required");
    } else {
      setMsgError("");
    }
  };

  // ✅ Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // validate all fields
    validateName(name);
    validateEmail(email);
    validateMsg(msg);

    // check errors
    if (!name || !email || !msg) return;
    if (nameError || emailError || msgError) return;

    // success
    setSuccessMsg(`Thank you, ${name}`);

    // reset form
    setName("");
    setEmail("");
    setMsg("");
  };

  return (
    <div>
      <form
        className=" w-2xs flex flex-col justify-center items-center"
        onSubmit={handleSubmit}
      >
        <div className="item flex flex-col">
          <label htmlFor="name">Name:</label>
          <input
            className="border"
            id="name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              validateName(e.target.value);
            }}
          />
          {nameError && <p className="text-red-700">{nameError}</p>}
        </div>

        <div className="item flex flex-col">
          <label htmlFor="email">Email:</label>
          <input
            className="border"
            id="email"
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);
            }}
          />
          {emailError && <p className="text-red-700">{emailError}</p>}
        </div>

        <div className="item flex flex-col">
          <label htmlFor="msg">Message:</label>
          <input
            className="border"
            id="msg"
            type="text"
            value={msg}
            onChange={(e) => {
              setMsg(e.target.value);
              validateMsg(e.target.value);
            }}
          />
          {msgError && <p className="text-red-700">{msgError}</p>}
        </div>

        <button className="border bg-amber-300 mt-5 p-2 rounded" type="submit">
          Submit
        </button>
      </form>

      {/* ✅ Success Message */}
      {successMsg && <h1 className="font-bold">{successMsg}</h1>}
    </div>
  );
}

export default ContactForm;
