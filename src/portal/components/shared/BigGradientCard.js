import React from "react";

import "./BigGradientCard.css";

const DashboardCard = (props) => {
  return (
    <div className="col-md-6 col-lg-4 col-sm-12 dashboard-gradient-card-outer">
      <div className={`dashboard-gradient-card ${props.color}`}>
        <div className="gradient-card-inner-icon">
          <div className="bg-icon-div">{props.icon}</div>
          <div className="d-flex align-items-center gradient-card-heading">
            <div>
              {props.icon}
            </div>
            <p className="m-0">{props.heading}</p>
          </div>
          <div className="row">
            <div className="col-6 pr-0">
              <div className="info-cell">
                <p>Today's Shipment</p>
                <div>
                  <h1>{props.today}</h1>
                  <p>
                    <small>More Info</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6 pl-0">
              <div className="info-cell">
                <p>Tomorrow's Shipment</p>
                <div>
                  <h1>{props.tomorrow}</h1>
                  <p>
                    <small>More Info</small>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-6 pr-0  ">
              <div className="info-cell">
                <p>Complete Shipment</p>
                <div>
                  <h1>{props.complete}</h1>
                  <p>
                    <small>More Info</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6 pl-0">
              <div className="info-cell">
                <p>Pending Shipment</p>
                <div>
                  <h1>{props.pending}</h1>
                  <p>
                    <small>More Info</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardCard;
