import React from "react";

import CollectionUpdate from "../components/Home/CollectionUpdates";
import FooterSection from "../components/FooterSection";
import Newsletter from "../components/Home/Newsletter";
import NextDayService from "../components/Home/NextDayService";
import OnlineShopping from "../components/Home/OnlineShopping";
import ThreeSteps from "../components/Home/ThreeSteps";

import "./Home.css";

const Home = () => {
  return (
    <React.Fragment>
      <ThreeSteps />
      <NextDayService />
      <OnlineShopping />
      <Newsletter />
      <CollectionUpdate />
      <FooterSection />
    </React.Fragment>
  );
};
export default Home;
