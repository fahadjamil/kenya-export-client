import React from "react";
import { RiShipFill } from "react-icons/ri";
import { FaPlaneDeparture } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { FaLuggageCart, FaBox } from "react-icons/fa";

import img1 from "../../../shared/assets/s1.png";
import img2 from "../../../shared/assets/s2.png";
import img3 from "../../../shared/assets/s3.png";
import img4 from "../../../shared/assets/s4.png";
import img5 from "../../../shared/assets/s5.png";
import "./ServicesCards.css";

const ServicesCards = () => {
  return (
    <div className="container service-card-section">
      <div className="row box">
        <div className="col-md-4">
          <div className="service-card">
            <img className="service-card-image" src={img1} alt="Service Card 01" />
            <div className="service-card-text">
              <h4>By Sea</h4>
              <p>
                Customers have the option of sending cargo by Sea in our 40ft
                Container charged from £2.95 per kilo + £20 handling fee.
              </p>
              <div className="service-logo">
                <RiShipFill size={30} className="service-icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="service-card">
            <img className="service-card-image" src={img2} alt="Service Card 02" />
            <div className="service-card-text">
              <h4>By Air</h4>
              <p>
                All types of air cargo shipped excluding hazardous goods. Prices
                from £7.5 per kilo + £20 handling fee.
              </p>
              <div className="service-logo">
                <FaPlaneDeparture size={30} className="service-icon" />
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="service-card">
            <img className="service-card-image" src={img3} alt="Service Card 03" />
            <div className="service-card-text">
              <h4>Online Shopping</h4>
              <p>
                Shop from UK online stores such as eBay, Amazon, Alibaba,
                Gumtree, Autotrader etc and have the goods delivered to your
                door in Kenya.
              </p>
              <div className="service-logo">
                <MdShoppingCart size={30} className="service-icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="service-card">
            <img className="service-card-image" src={img4} alt="Service Card 04" />
            <div className="service-card-text">
              <h4>Excess Baggage</h4>
              <p>
                There are lots of costs associated to excess baggage with
                airlines contact us to save yourself some money.
              </p>
              <div className="service-logo">
                <FaLuggageCart size={30} className="service-icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="service-card">
            <img className="service-card-image" src={img5} alt="Service Card 05" />
            <div className="service-card-text">
              <h4>Collection Services</h4>
              <p>
                We collect from all over the UK, contact us to find out when we
                are next in your area.
              </p>
              <div className="service-logo">
                <FaBox size={30} className="service-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCards;
