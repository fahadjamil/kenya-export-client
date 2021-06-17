import React, { useEffect, useState } from "react";

import "./Input.css";

const Dropdown = (props) => {
  return (
    <div className="custom-input-div">
      <select>{props.children}</select>
      <label
        className={`custom-input-label ${props.value ? "active" : "inactive"}`}
      >
        {props.label}
      </label>
    </div>
  );
};

export default Dropdown;
