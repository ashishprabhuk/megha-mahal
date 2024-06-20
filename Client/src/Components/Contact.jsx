import React from "react";
import Map from "./Map";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-box">
        <div className="contact-info">
          <p>Phone: 9486363226 ; 9488463355</p>
          <p>Email: hello@meghaamahal.com</p>
          <p>Address: sellur, madurai</p>
        </div>
        <div className="map-container">
          <Map />
        </div>
      </div>
    </div>
  );
}
