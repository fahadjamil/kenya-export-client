import React from "react";
import { GiTruck, GiCommercialAirplane, GiCoins } from "react-icons/gi";

// import shipment from "../../../shared/assets/shipment.png";
// import airplane from "../../../shared/assets/airplane.svg";
// import poundSterling from "../../../shared/assets/pound-sterling.svg";

import "./ThreeSteps.css";

const ThreeSteps = () => {
  return (
    <section className="container threesteps-section">
      <h1 className="section-title">
        Send goods from the UK to Kenya in three easy steps
      </h1>
      <div className="row">
        <div className="col-12 col-lg-4 col-md-6">
          <div className="threestep-card">
            <div>
              <div className="icon-circle">
                {/* <img src={shipment} /> */}
                <GiTruck size={70} className="step-icon" />
              </div>
              <h3>We collect from you.</h3>
              <h6>
                Request collection or send goods to our dispatch centre. When
                shopping online, enter our UK address in the format shown below:
                Your Name &amp; Phone: e.g. UHURU KENYATTA 0722XXXXXX C\O
                KENEXPORTS LTD. UNIT 27B (door no) Park Avenue Ind. Estate
                Luton(City) Bedfordshire(County) LU3 3BP(Post Code)
              </h6>
            </div>
            <div className="step-number-space">
              <span className="step-number">01</span>
              <button className="step-click-btn">CLICK HERE</button>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 col-md-6">
          <div className="threestep-card">
            <div>
              <div className="icon-circle">
                {/* <img src={poundSterling} /> */}
                <GiCoins size={70} className="step-icon" />
              </div>
              <h3>Quote provided</h3>
              <h6>
                Goods are weighed based on the actual or volumetric weight -
                whichever is higher, and a quote provided By sea, price is £2.95
                per kilo + £20 handling fee. By Air, price from £7.5 per kilo +
                £20 handling fee.
              </h6>
            </div>
            <div className="step-number-space">
              <span className="step-number">02</span>
              <button className="step-click-btn">CLICK HERE</button>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 col-md-6">
          <div className="threestep-card">
            <div>
              <div className="icon-circle">
                <GiCommercialAirplane size={65} className="step-icon" />
                {/* <img src={airplane} /> */}
              </div>
              <h3>We collect from you.</h3>
              <h6>Dispatched by air every friday of by sea twice a month!</h6>
            </div>
            <div className="step-number-space">
              <span className="step-number">03</span>
              <button className="step-click-btn">CLICK HERE</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ThreeSteps;
