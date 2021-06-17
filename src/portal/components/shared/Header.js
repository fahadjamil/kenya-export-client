import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../shared/assets/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="row justify-content-between align-items-center m-0">
      <Link to="/">
        <img src={logo} alt="Kenya Express Logo" />
      </Link>
      {/* <input
          type="search"
          id="form1"
          className="form-control search-bar"
          placeholder="Type in to search"
          aria-label="Search"
        ></input> */}
      <div className="profile-dropdown d-flex align-items-center">
        {/* <img
          src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png"
          alt="Profile Picture"
          className="profile-picture"
        />
        <h5 className="profile-name">John Doe</h5> */}
      </div>
    </div>
  );
};
export default Header;
