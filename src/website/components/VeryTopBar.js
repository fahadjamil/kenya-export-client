import React, { useEffect, useState } from "react";
import {
  FaPhoneAlt,
  FaTwitter,
  FaGooglePlusG,
  FaFacebookF,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import "./VeryTopBar.css";

const VeryTopBar = () => {
  const [showTopBar, setShowTopBar] = useState(true);
  useEffect(() => {
    setShowTopBar(window.innerWidth >= 992 ? true : false);
  }, []);

  return (
    <section className="very-top-bar">
      {showTopBar && (
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6">
              <div className="row justify-content-between align-items-center">
                <p className="m-0 font-weight-bold">Call us today?</p>
                <p className="m-0">
                  <FaPhoneAlt size={15} className="mr-2" />
                  +44 (0) 1582 561 092, +44 (0) 7949 531 238
                </p>
                <p className="m-0">
                  <MdEmail size={20} className="mr-2" />
                  info@Kenyaexports.co.uk
                </p>
              </div>
            </div>
            <div className="col-md-4 row justify-content-end align-items-center">
              <FaFacebookF size={15} className="social-icon" />
              <AiFillLinkedin size={17} className="social-icon" />
              <FaTwitter size={17} className="social-icon" />
              <FaGooglePlusG size={23} className="social-icon" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VeryTopBar;
