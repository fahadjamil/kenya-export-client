import React from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";
import "./PortalFrame.css";

const PortalFrame = (props) => {
  return (
    <React.Fragment>
      <div className="portal-header">
        <Header />
      </div>
      <div className="portal-content">
        <div className="portal-sidebar"><Sidebar /></div>
        <div className="portal-body">{props.children}</div>
      </div>
    </React.Fragment>
  );
};

export default PortalFrame;
