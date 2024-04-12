import React, { useState } from "react";
import Header from "../../components/shared/Layout/Header";
import './contact.css';

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
     // name: name.value,
    //  email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:8080/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <Header/>,
    <form onSubmit={handleSubmit}>
     
     <div className="email">
        <label className="heading" htmlFor="message">Message:</label>
        <textarea className="texta "id="message" required />

       <p align="center"> <button type="submit" className="buton">{status}</button></p>
      </div>
     
    </form>
  );
};

export default ContactForm;