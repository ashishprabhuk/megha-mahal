import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from "/meghaa-logo.png";
import wave4 from "/wave4.svg";

export default function Header() {
  return (
    <div>
      <nav>
        <Navbar className="nav" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/" className="megha-logo text-light">
              <img
                alt=""
                src={logo}
                width="30"
                height="50"
                className="d-inline-block  mx-auto mx-lg-0" 
              />{" "}
              <span className="meghaa">Meghaa</span> Mahal
            </Navbar.Brand>
            <Nav className="me-end ms-auto gap-2">
              <CustomNavLink to="/" exact>
                Home
              </CustomNavLink>
              <CustomNavLink to="/events">Events</CustomNavLink>
              <CustomNavLink to="/gallery">Gallery</CustomNavLink>
            </Nav>
          </Container>
        </Navbar>
      </nav>
    </div>
  );
}

const CustomNavLink = ({ to, exact, children }) => (
  <Nav.Link
    as={NavLink}
    to={to}
    exact={exact}
    activeClassName="active"
    className="d-none d-lg-block"
  >
    {children}
  </Nav.Link>
);
