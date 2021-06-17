import React from "react";

import "./LoadingSpinner.css";

const LoadingSpinner = (props) => {
  return (
    <div className={`${props.asOverlay && "loading-spinner__overlay"}`}>
      <div
        className={`${props.small ? "lds-dual-ring-small" : "lds-dual-ring"} ${
          props.color
        }`}
      ></div>
    </div>
  );
};

export default LoadingSpinner;
