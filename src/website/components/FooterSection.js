import React from "react";
import { Link } from "react-router-dom";

import logo from "../../shared/assets/logo.png";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import "./FooterSection.css";

const FooterSection = () => {
  return (
    <section className="footer-section">
      <div className="container">
        <div className="footer-row row">
          <div className="col-md-3 logo-col">
            <img src={logo} />
          </div>
          <div className="col-md-3 footer-nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/testimonials">Testimonials</Link>
              </li>
              <li>
                <Link to="/faqs">FAQs</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 footer-social">
            <ul>
              <li>
                <FaFacebook /> Facebook
              </li>
              <li>
                <FaLinkedinIn /> LinkedIn
              </li>
              <li>
                <FaYoutube /> Youtube
              </li>
            </ul>
          </div>
          <div className="col-md-3 border-0">
            <ul>
              <li>
                <strong>Call us today?</strong>
              </li>
              <li>+44 (0) 1582 561 029</li>
              <li>+44 (0) 7949 531 238</li>
              <li>info@kenyaexports.co.uk</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>
          All Rights Reserved, &#169; 2021 <span>Kenya Export</span>
        </p>
      </div>
    </section>
  );
};

export default FooterSection;
