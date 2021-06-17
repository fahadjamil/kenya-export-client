import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { RiFileEditLine } from "react-icons/ri";
import { AuthContext } from "../../../shared/context/auth-context";
import { useHttpClient } from "../../../shared/hooks/http-hook";

import InnerHeadingFrame from "../shared/InnerHeadingFrame";
import "./ShipmentDetail.css";

const ShipmentDetail = () => {
  const { id } = useParams();
  const [api, setapi] = useState(null);
  const auth = useContext(AuthContext);
  const { sendRequest } = useHttpClient();
  const ShipmentApi = async () => {
    try {
      const response = await sendRequest(
        `shipment/shipment_type/SHIP/${auth.userId}/21/${id}`
      );
      console.log(response.data.shipments);
      setapi(response.data.shipments);
    } catch (error) {}
  };
  useEffect(() => {
    ShipmentApi();
  }, []);

  return (
    <>
      <InnerHeadingFrame
        heading="Shipment Detail"
        icon={<RiFileEditLine className="mt-3" size={45} />}
      >
        <div className="card-wrapper shadow ">
          <div className="row">
            <div className="col-md-6 p-5">
              <h4>Shipment Detail:</h4>
              <hr />
              <p>Place of Transaction:</p>
              <p>Place of Destination:</p>
              <p>Courier Type:</p>
            </div>
            <div className="col-md-6 p-5">
              <h4>Recipient Detail:</h4>
              <hr />
              <p>Name:</p>
              <p>Address:</p>
              <p>Phone Number:</p>
              <p>City:</p>
            </div>
            <div className="container">
              <h4>Item Detail:</h4>
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Item Type</th>
                    <th scope="col">Weight</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Lenght</th>
                    <th scope="col">Width</th>
                    <th scope="col">Height</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </InnerHeadingFrame>
    </>
  );
};
export default ShipmentDetail;
