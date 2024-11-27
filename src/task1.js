import React from "react";
import "./task1.css";
import logo from "./images/edusity.png";

function GreatStack() {
  return (
    <div>
      <nav className="container">
        <img
          src={logo}
          alt="logo"
          className="logo"

        />
        <ul className="mobile-menu">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#program">Program</a>
          </li>
          <li>
            <a href="#about-us">About us</a>
          </li>
          <li>
            <a href="#campus">Campus</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#contact-us" className="btn">
              Contact us
            </a>
          </li>
        </ul>

        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA"
          alt="menu icon"
          className="menu-icon"
        />
      </nav>
      <div className="header">
        <div className="text">
          <h1>We Ensure better education for a better world</h1>
          <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
          <button className="btn">Explore more</button>
       
        </div>

      </div>
    </div>

  );
}

export default GreatStack;
