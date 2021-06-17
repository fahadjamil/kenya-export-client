import React from "react";

import AboutInfo from "../components/About/AboutInfo";
import AboutStats from "../components/About/AboutStats";
import FooterSection from "../components/FooterSection";

const About = () => {
  return (
    <React.Fragment>
      <AboutInfo />
      <AboutStats />
      <FooterSection />
    </React.Fragment>
  );
};

export default About;
