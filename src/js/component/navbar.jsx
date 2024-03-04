import React from "react";
import NavLinks from "./NavLinks";
import "../../styles/navbar.css";

const Navbar = () => {
  const navLinks = ["Home", "About", "Services", "Contact"];

  return (
    <nav className="navbar navbar-expand-sm navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          Start Bootstrap
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <NavLinks links={navLinks} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
