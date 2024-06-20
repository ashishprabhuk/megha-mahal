import React from "react";
import "./BookButton.css";
import { Link } from "react-router-dom";

export default function BookButton() {
  return (
    <div className="vert-box">
      <Link to="/events" className="blink">
        <span >Book a Mahal</span>
      </Link>
    </div>
  );
}
