import Map from "./map.jpg";
import React, { useState } from "react";
import{ init } from 'emailjs-com';
init("user_coBxQOtlBGNQRzSFsk1qf");


const Contacts = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    sendFeedback("template_icl93zc", {
      name,
      company,
      phone,
      email,
      message,
    });
  };

  const sendFeedback = (templateId, variables) => {

    window.emailjs
      .send("service_dvrszpd", templateId, variables)
      .then((res) => {
        console.log('success !');
        setName("");
        setCompany("");
        setPhone("");
        setEmail("");
        setMessage("");
      })
      .catch(
        (err) =>
          document.querySelector('.form-message').innerHTML =
            "Une erreur s'est produite, veuillez réessayer.")
  };

  return (
        <div className="page" id="contact">
            <h2 id="Contacts">Contacts</h2>
    <form className="contact-form">
      <h2>Contact Me</h2>
      <div className="form-content">
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
          value={name}
          autoComplete="off"
        />
        <input
          type="text"
          id="company"
          name="company"
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Company"
          required
          value={company}
        />
        <input
          type="tel"
          id="phone"
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone Number"
          required
          value={phone}
        />
        <div className="email-content">
          <label id="not-mail">Email non valide</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            value={email}
            autoComplete="off"
          />
        </div>
        <textarea
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          value={message}
        />
      </div>
      <div className="wrap">
      <input
        className="button"
        type="button"
        value="Submit"
        onClick={handleSubmit}
      />
      </div>
      <div className="form-message"></div>
    </form>
    </div>
  );
};

export default Contacts;