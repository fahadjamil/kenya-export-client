import React from "react";

import FooterSection from "../components/FooterSection";
import ServicesCards from "../components/Services/ServicesCards";
import ServicesBanner from "../components/Services/ServicesBanner";
import ServiceItems from "../components/Services/ServicesItems";
import OnlineShopping from "../components/Services/OnlineShopping";

const Services = () => {
  return (
    <React.Fragment>
      <ServicesCards />
      <ServicesBanner />
      <ServiceItems />
      <OnlineShopping />
      <FooterSection />
    </React.Fragment>
  );
};

export default Services;
