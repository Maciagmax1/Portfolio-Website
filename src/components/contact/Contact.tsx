import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { useState } from "react";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_uupvdvh",
      "template_1j9ii41",
      e.currentTarget,
      "wqEjxYC70c_FjD9Ts"
    );
    e.target.reset();
  };

  return (
    <section className="Contact" id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>maciagmax1@gmail.com</h5>
            <a href="mailto:maciagmax1@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>Max Maciag</h5>
            <a href="https://www.linkedin.com/in/max-maciag/" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows={7}
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
