import React from "react";
import { GiCargoShip, GiStopwatch } from "react-icons/gi";

// import cargoShip from "../../../shared/assets/cargo-ship.png";
// import watch from "../../../shared/assets/Outline.png";
import "./CollectionUpdate.css";

const CollectionUpdate = () => {
  return (
    <section className="collection-update-secion">
      <div className="container">
        <h1>COLLECTION UPDATES</h1>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="collection-card">
              <div>
                <GiCargoShip size={80} className="update-icon" />
                {/* <img src={cargoShip} /> */}
                <h5>
                  NEXT SEA <span>SHIPMENT</span>
                </h5>
              </div>
              <p>Next sea shipment on 15th August</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="collection-card">
              <div>
                <GiStopwatch size={80} className="update-icon" />
                {/* <img src={watch} /> */}
                <h5>
                  NEXT SEA <span>SHIPMENT DEADLINE</span>
                </h5>
              </div>
              <p>Next sea shipment deadline on 17th July</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="collection-card">
              <div>
                <GiCargoShip size={80} className="update-icon" />
                {/* <img src={cargoShip} /> */}
                <h5>
                  NEXT SEA <span>SHIPMENT</span>
                </h5>
              </div>
              <p>Next sea shipment on 15th August</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="collection-card">
              <div>
                <GiStopwatch size={80} className="update-icon" />
                {/* <img src={watch} /> */}
                <h5>
                  NEXT SEA <span>SHIPMENT DEADLINE</span>
                </h5>
              </div>
              <p>Next sea shipment deadline on 17th July</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CollectionUpdate;
