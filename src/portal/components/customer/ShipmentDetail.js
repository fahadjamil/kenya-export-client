import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { RiFileEditLine } from "react-icons/ri";
import { AuthContext } from "../../../shared/context/auth-context";
import { useHttpClient } from "../../../shared/hooks/http-hook";

import InnerHeadingFrame from "../shared/InnerHeadingFrame";
import "./ShipmentDetail.css";




const ShipmentDetail = () => {
  const auth = useContext(AuthContext);
  const{id}=useParams();
  const [api, setapi] = useState(null);
  const[apidetail,setapidetail]=useState(null);

  const { sendRequest } = useHttpClient();
  const ShipmentApi = async () => {
    try {
      const response = await sendRequest(
        `shipment/shipment_detail/${id}`
      );
      console.log(response.data);
      setapi(response.data.items);
      setapidetail(response.data.shipment);
    } catch (error) {}
  };
  useEffect(() => {
    ShipmentApi();
    
  }, []);
  console.log(api);
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
             
            <p>Place of Transaction:&emsp;{apidetail&&apidetail.placeOfTransaction}</p>
              <p>Place of Destination:&emsp;{apidetail&&apidetail.placeOfDestination}</p>
              <p>Courier Type:&emsp;{apidetail&&apidetail.courierType}</p>
            </div>
            <div className="col-md-6 p-5">
              <h4>Recipient Detail:</h4>
              <hr />
              <p>Name:&emsp;{apidetail&&apidetail.receiver.name}</p>
              <p>Address:&emsp;{apidetail&&apidetail.receiver.address}</p>
              <p>Phone Number:&emsp;{apidetail&&apidetail.receiver.phoneNumber}</p>
              <p>City:&emsp;{apidetail&&apidetail.receiver.city}</p>
            </div>
            <div className="container">
              <h4>Item Detail:</h4>
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Item Charges</th>
                    <th scope="col">Total Price</th>
                  </tr>
                </thead>
                <tbody>
                {api?.map((user, index) => (
                  <tr>
                    <th scope="row">1</th>
                    <td>{user.name}</td>
                    <td>{user.quantity}</td>
                    <td>{user.itemCharges}</td>
                    <td>{user.totalPrice}</td>
                    
                  </tr>
                ))}
                 
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
