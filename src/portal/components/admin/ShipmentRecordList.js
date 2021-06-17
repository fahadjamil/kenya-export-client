import React, { useState, useEffect, useContext } from "react";
import { RiShipFill } from "react-icons/ri";

import InnerHeadingFrame from "../shared/InnerHeadingFrame";
import requested from "../../../shared/assets/status_icons/requested_info.png";
import picked from "../../../shared/assets/status_icons/picked_info.png";
import warehouse from "../../../shared/assets/status_icons/warehouse_info.png";
import transit from "../../../shared/assets/status_icons/transit_info.png";
import nairobi from "../../../shared/assets/status_icons/nairobi_info.png";
import invoiced from "../../../shared/assets/status_icons/invoiced_info.png";
import delivered from "../../../shared/assets/status_icons/delivered_info.png";
import paid from "../../../shared/assets/status_icons/paid_info.png";
import SingleRecord from "./ShipmentDetail";
import "./ShipmentRecordList.css";
import { AuthContext } from "../../../shared/context/auth-context";
import { useHttpClient } from "../../../shared/hooks/http-hook";
import { Link } from "react-router-dom";

const ShipmentRecordList = () => {
  const auth = useContext(AuthContext);
  console.log(auth.userId);
  const [api, setapi] = useState(null);

  const [selectedDate, setSelectedDate] = useState(null);
  const { sendRequest } = useHttpClient();
  const ShipmentApi = async () => {
    try {
      const response = await sendRequest(
        `shipment/shipment_type/SHIP/${auth.userId}`
      );
      console.log(response.data.shipments);
      setapi(response.data.shipments);
    } catch (error) {}
  };
  useEffect(() => {
    ShipmentApi();
  }, []);
  console.log(api);
  return (
    <InnerHeadingFrame
      icon={<RiShipFill className="mt-3" size={45} />}
      heading="Shipment by Sea"
    >
      <div className="card-wrapper shadow">
        <div className="col-md-12 p-0">
          <div class="shipment-table-responsive">
            <div className="shipment-record-table-head">
              <div className="col-md-2">Shipment Code</div>
              <div className="col-md-2">Cbv No</div>
              <div className="col-md-2">Order Date</div>
              <div className="col-md-2">Place Of Transaction</div>
              <div className="col-md-2">Place Of Destination</div>
              <div className="col-md-2 text-right">Status</div>
            </div>
            <ul className="list-body-ul">
              {api?.map((user, index) => {
                return (
                  <Link to={"/shipment_detail/"+user.id}>
                    <li>
                      <div className="col">{user.shipmentCode}</div>
                      <div className="col">{user.cbvNo}</div>
                      <div className="col">{user.orderDate}</div>
                      <div className="col">{user.placeOfTransaction}</div>
                      <div className="col">{user.placeOfDestination}</div>

                      <div className="col text-right">
                        <img src={requested} width="30px" />
                      </div>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </InnerHeadingFrame>
  );
};

export default ShipmentRecordList;
