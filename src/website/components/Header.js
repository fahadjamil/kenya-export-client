import React, { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";

import { AuthContext } from "../../shared/context/auth-context";
import logo from "../../shared/assets/logo.png";
import "./Header.css";
import MobileNav from "./MobileNav";

const Header = () => {
  const auth = useContext(AuthContext);

  const [activeNav, setActiveNav] = useState(false);

  const activeNavHandler = () => {
    setActiveNav((prevMode) => !prevMode);
  };

  return (
    <React.Fragment>
      <MobileNav
        activeNav={activeNav}
        activeNavHandler={activeNavHandler}
        className="mobile-nav-outer"
      />
      <div className="container px-0 nav-bar">
        <nav className="nav-content py-3">
          <Link to="/">
            <img src={logo} alt="Kenya Express Logo" />
          </Link>
          <ul className="navbar-links">
            <li className="header-link">
              <NavLink className="nav-link" to="/" exact>
                Home
                <div></div>
              </NavLink>
            </li>
            <li className="header-link">
              <NavLink className="nav-link" to="/about">
                About
                <div></div>
              </NavLink>
            </li>
            <li className="header-link">
              <NavLink className="nav-link" to="/services">
                Services
                <div></div>
              </NavLink>
            </li>
            <li className="header-link">
              <NavLink className="nav-link" to="/testimonials">
                Testimonials
                <div></div>
              </NavLink>
            </li>
            <li className="header-link">
              <NavLink className="nav-link" to="/faqs">
                FAQs
                <div></div>
              </NavLink>
            </li>
            <li className="header-link">
              <NavLink className="nav-link" to="/contact">
                Contact
                <div></div>
              </NavLink>
            </li>
            <li>
              <div className="search-box">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search"
                />
                <button type="text" className="btn">
                  <BsSearch size={16} />
                </button>
              </div>
            </li>
            <li className="login-li-btn">
              {auth.token ? (
                <Link className="nav-link" to="/dashboard">
                  <BsFillPersonLinesFill className="login-icon" size={18} />
                  <span className="login-text">Account</span>
                </Link>
              ) : (
                <Link className="nav-link" to="/auth">
                  <BsFillPersonLinesFill className="login-icon" size={18} />
                  <span className="login-text">Login</span>
                </Link>
              )}
            </li>
            <li className="hamburger">
              <button className="nav-link" onClick={activeNavHandler}>
                <CgMenuRight size={30} />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
};
export default Header;
