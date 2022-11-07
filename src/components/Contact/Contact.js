import React, { useRef } from "react";
import emailjs from "emailjs-com";

import "./Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sj26hjx",
        "template_97b3pb6",
        form.current,
        "1573wRxhxQIvyoB1r"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <form ref={form} onSubmit={sendEmail}>
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            tabIndex="1"
          />
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Your Email"
            required
            tabIndex="2"
          />
          <textarea
            className="form-control"
            name="message"
            rows="7"
            placeholder="Your Message..."
            required
            tabIndex="3"
          ></textarea>
          <button type="submit" className="btn">
            Send Message!
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
