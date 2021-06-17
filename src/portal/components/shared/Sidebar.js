import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { MdDashboard, MdShoppingCart, MdPerson } from "react-icons/md";
import{ImUserTie} from "react-icons/im";
import { RiShipFill, RiCoinsFill, RiShutDownFill } from "react-icons/ri";
import { FaPlaneDeparture, FaBoxes } from "react-icons/fa";
import { GrDocumentUpdate} from "react-icons/gr";

import { AuthContext } from "../../../shared/context/auth-context";
import "./Sidebar.css";

const Sidebar = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();

  const LogoutHandler = () => {
    auth.logout();
    console.log("Hello");
    history.push("/");
  };

  return (
    <ul className="sidebar-section">
      <li>
        <NavLink to="/dashboard">
          <MdDashboard size={25} />
          <p>Dashboard</p>
        </NavLink>
      </li>
      <li>
        <NavLink to="/shipment-form">
          <FaBoxes size={25} />
          <p>Shipment Form</p>
        </NavLink>
      </li>
      <li>
        <NavLink to="/by-ship">
          <RiShipFill size={25} />
          <p>Shipments by Sea</p>
        </NavLink>
      </li>
      <li>
        <NavLink to="/by-air">
          <FaPlaneDeparture size={25} />
          <p>Shipments by Air</p>
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile">
          <MdPerson size={28} />
          <p>Profile</p>
        </NavLink>
      </li>
     {auth.role === "admin" && <li>
        <NavLink to="/employees">
          <ImUserTie size={28} />
          <p>Employees</p>
        </NavLink>
      </li>}
      {auth.role === "admin" && <li>
        <NavLink to="/collection-update-view">
          <GrDocumentUpdate size={28} />
          <p>Collection Update View</p>
        </NavLink>
      </li>}

      {/* 
      <li>
        <NavLink to="/buy-n-ship">
          <MdShoppingCart size={25} />
          <p>Buy and Ship</p>
        </NavLink>
      </li>
      <li>
        <NavLink to="/revenue">
          <RiCoinsFill size={25} />
          <p>Revenue</p>
        </NavLink>
      </li>
      <li>
        <NavLink to="/customers">
          <BsPersonFill size={25} />
          <p>Customers</p>
        </NavLink>
      </li> */}
      <li>
        <button className="p-0" onClick={LogoutHandler}>
          <RiShutDownFill size={22} />
          <p>Logout</p>
        </button>
      </li>
    </ul>
  );
};

export default Sidebar;
