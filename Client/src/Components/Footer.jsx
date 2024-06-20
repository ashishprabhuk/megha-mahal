import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import wave1 from "/wave1.svg";
import wave2 from "/wave2.svg";
import wave3 from "/wave3.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <img src={wave3} alt="wave1" />
      <footer
        className="text-light py-4" // Adjust padding for small screens using sm:py-6
        id="footer-box"
        style={{ backgroundColor: "#733646" }}
      >
        <Container>
          <Row>
            <Col md={6}>
              <h5>About Us</h5>
              <p>Meghaa Mahal.</p>
            </Col>
            <Col md={3}>
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/home" className="text-light">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/events" className="text-light">
                    Events
                  </a>
                </li>
                <li>
                  <a href="/gallery" className="text-light">
                    Gallery
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={3}>
              <h5>Contact Us</h5>
              <address>
                Sellur, Madurai
                <br />
                TamilNadu - 625002.
                <br />
                Phone: 9486363226, 9488463355
                <br />
                Email: hello@meghaamahal.com
              </address>
            </Col>
          </Row>
        </Container>
        <div
  className="text-center p-3 sm:py-5 mb-0 mb-sm-8 pb-sm-5" // Add mb-0 for default margin bottom, mb-sm-3 for margin bottom only in small screens
  style={{ backgroundColor: "#733646" }}
  id="copyright"
>
  © {new Date().getFullYear()} Meghaa Mahal
</div>
 
      </footer>
    </>
  );
};

export default Footer;
