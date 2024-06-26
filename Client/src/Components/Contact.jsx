import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Map from "./Map";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import "./Contact.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
      }, (error) => {
        console.log(error.text);
        alert("Failed to send the message, please try again.");
      });
  };

  return (
    <div className="contact-container">
      <div className="contact-row">
        <div className="form-container">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <h2>Contact Us</h2>
            <label>Name</label>
            <input type="text" name="user_name" required />
            <label>Email</label>
            <input type="email" name="user_email" required />
            <label>Message</label>
            <textarea name="message" required />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="map-container">
          <Map />
        </div>
      </div>
      <div className="contact-box">
        <div className="contact-info">
          <p>
            <FaPhone className="icon" /><span id="details">Phone:</span> 9486363226, 9488463355
          </p>
          <p>
            <MdEmail className="icon" /><span id="details">Email:</span> <a id="email-id" href="mailto:hello@meghaamahal.com">hello@meghaamahal.com</a>
          </p>
          <p>
            <IoLocation className="icon" /><span id="details">Address:</span>28A/1 Suryarajyapuram 2nd East Main road, Sellur, Madurai - 625002
          </p>
        </div>
      </div>
    </div>
  );
}
