import React from "react";
import Header from "./Header";

import "./SecondarySlider.css";

const SecondarySlider = (props) => {
  let slide;
  if (props.path === "/about") slide = "ABOUT";
  else if (props.path === "/services") slide = "SERVICES";
  else if (props.path === "/testimonials") slide = "TESTIMONIALS";
  else if (props.path === "/faqs") slide = "FAQS";
  else if (props.path === "/contact") slide = "CONTACT";
  else slide = "default";

  return (
    <section className={`secondary-slider p-0 ${slide}`}>
      <Header />
      <div className="h-100 d-flex align-items-center">
        <div className="container">
          <h1>{slide}</h1>
        </div>
      </div>
    </section>
  );
};
export default SecondarySlider;
