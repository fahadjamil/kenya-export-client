import React, { useContext, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaBoxes } from "react-icons/fa";

import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";
import Input from "../../portal/components/shared/Input";
import { ObjIsEmpty } from "../../shared/utils/functions";
import "./ShipmentForm.css";
import InnerHeadingFrame from "../components/shared/InnerHeadingFrame";

const ShipmentForm = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [receiverList, setReceiverList] = useState([]);
  const [receiverInput, setReceiverInput] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    city: "",
  });
  const [shipmentInput, setShipmentInput] = useState({
    placeOfTransaction: "UK",
    placeOfDestination: "Kenya",
    courierType: "",
    receiver: "",
    user: auth.userId,
    item: [],
  });
  const [itemObject, setItemObject] = useState({
    itemName: "",
    quantity: "",
    weight: "",
    weightUnit: "kgs",
    length: "",
    width: "",
    height: "",
  });

  const addItemHandler = () => {
    if (ObjIsEmpty(itemObject)) {
      setShipmentInput({
        ...shipmentInput,
        item: [...shipmentInput.item, itemObject],
      });
    }
    setItemObject({
      itemName: "",
      quantity: "",
      weight: "",
      weightUnit: "kgs",
      length: "",
      width: "",
      height: "",
    });
  };

  const deleteItemHandler = (delIndex) => {
    setShipmentInput({
      ...shipmentInput,
      item: shipmentInput.item.filter((data, index) => index !== delIndex),
    });
    console.log(shipmentInput);
  };

  const getUserRecipientApi = async () => {
    const response = await sendRequest(
      `receiver/user_receivers/${auth.userId}`
    );
    setReceiverList(response?.data?.recipients);
  };

  const createUserRecipientApi = async () => {
    const response = await sendRequest(`receiver/create_receiver`, "POST", {
      name: receiverInput.name,
      address: receiverInput.address,
      phoneNumber: receiverInput.phoneNumber,
      city: receiverInput.city,
      user: auth.userId,
    });
    console.log(response?.data?.recipients);
    setReceiverList(response?.data?.recipients);
  };

  const createUserShipmentApi = async (event) => {
    event.preventDefault();
    const response = await sendRequest(
      `shipment/create_shipment`,
      "POST",
      shipmentInput
    );
    // setReceiverList(response?.data?.recipients);
  };

  useEffect(() => {
    getUserRecipientApi();
  }, []);

  return (
    <React.Fragment>
      <InnerHeadingFrame
        icon={<FaBoxes className="mt-3" size={35} />}
        heading="Create New Shipment"
      >
        <div className="card-wrapper shadow">
          <div className="row my-5 mx-2">
            <div className="col-4 my-2">
              <Input
                label="Place of Transaction"
                value={shipmentInput.placeOfTransaction}
                onChange={(e) =>
                  setShipmentInput({
                    ...shipmentInput,
                    placeOfTransaction: e.target.value,
                  })
                }
                readOnly
              />
            </div>
            <div className="col-4 my-2">
              <Input
                label="Place of Destination"
                value={shipmentInput.placeOfDestination}
                onChange={(e) =>
                  setShipmentInput({
                    ...shipmentInput,
                    placeOfDestination: e.target.value,
                  })
                }
                readOnly
              />
            </div>
            <div className="col-4 my-2">
              <select
                className="custom-select-field"
                value={shipmentInput.courierType}
                onChange={(e) =>
                  setShipmentInput({
                    ...shipmentInput,
                    courierType: e.target.value,
                  })
                }
              >
                <option value="null">Select Courier Type</option>
                <option value="PLANE">Plane</option>
                <option value="SHIP">Ship</option>
              </select>
            </div>

            <div className="col-md-12">
              <h5 className="form-heading">Receiver Information:</h5>
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">
                  Example select
                </label>
                <div className="row">
                  <div className="col-md-10 pr-md-0">
                    <select
                      className="custom-select-field"
                      value={shipmentInput.receiver}
                      onChange={(e) =>
                        setShipmentInput({
                          ...shipmentInput,
                          receiver: e.target.value,
                        })
                      }
                    >
                      <option value="null">Select a Recipient</option>
                      {receiverList &&
                        receiverList.map((data, index) => (
                          <option
                            key={index}
                            value={data?.id}
                          >{`${data?.name} - ${data?.address}`}</option>
                        ))}
                    </select>
                  </div>
                  <div className="col-md-2">
                    <button
                      type="button"
                      className="btn btn-primary w-100 h-100"
                      data-toggle="modal"
                      data-target="#addRecipientModal"
                    >
                      Add New Recipient
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="item-table-section border">
                {/* <h5 className="form-heading">
                Item Information:
              </h5> */}
                {shipmentInput?.item?.length === 0 ? (
                  <p
                    className="text-center m-0 pt-1 pb-3 font-weight-bold"
                    style={{ color: "rgb(176 176 176)" }}
                  >
                    No Item Selected
                  </p>
                ) : (
                  <table className="shipment-items-table">
                    <thead>
                      <tr>
                        <th>Item/Description</th>
                        <th>Quantity</th>
                        <th>Weight</th>
                        <th>Length</th>
                        <th>Width</th>
                        <th>Height</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* {shipmentInput?.item?.length === 0 ? (
                      <tr>
                        <td></td>
                        <td></td>
                        <td
                          className="py-2 m-0 px-2 font-weight-bold"
                          style={{ color: "#c2c2c2" }}
                        >
                          No Data Available
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    ) : ( */}
                      {shipmentInput?.item?.map((data, index) => (
                        <tr key={index}>
                          <td>{data.itemName}</td>
                          <td>{data.quantity}</td>
                          <td>{data.weight}</td>
                          <td>{data.length}</td>
                          <td>{data.width}</td>
                          <td>{data.height}</td>
                          <td className="d-flex justify-content-end">
                            <button
                              className="btn btn-danger px-2 d-flex align-items-center justify-content-center"
                              onClick={() => deleteItemHandler(index)}
                            >
                              <IoClose size={18} style={{ fill: "white" }} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
                <button
                  className="item-collapse-btn"
                  type="button"
                  data-toggle="collapse"
                  data-target="#addItemCollapse"
                  aria-expanded="false"
                  aria-controls="addItemCollapseLabel"
                >
                  Add new item
                </button>
                <div className="collapse add-item-form" id="addItemCollapse">
                  <div className="row">
                    <div className="col-4 my-2">
                      <Input
                        type="text"
                        label="Item Name"
                        min="1"
                        value={itemObject.itemName}
                        onChange={(e) =>
                          setItemObject({
                            ...itemObject,
                            itemName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="col-4 my-2">
                      <Input
                        type="number"
                        label="Weight in Kgs"
                        min="1"
                        value={itemObject.weight}
                        onChange={(e) =>
                          setItemObject({
                            ...itemObject,
                            weight: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="col-4 my-2">
                      <Input
                        type="number"
                        label="Quantity"
                        value={itemObject.quantity}
                        onChange={(e) =>
                          setItemObject({
                            ...itemObject,
                            quantity: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="col-4 my-2">
                      <Input
                        type="number"
                        label="Length"
                        min="1"
                        value={itemObject.length}
                        onChange={(e) =>
                          setItemObject({
                            ...itemObject,
                            length: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="col-4 my-2">
                      <Input
                        type="number"
                        label="Width"
                        min="1"
                        value={itemObject.width}
                        onChange={(e) =>
                          setItemObject({
                            ...itemObject,
                            width: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="col-4 my-2">
                      <Input
                        type="number"
                        label="Height"
                        min="1"
                        value={itemObject.height}
                        onChange={(e) =>
                          setItemObject({
                            ...itemObject,
                            height: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="input-group col-4 my-2">
                      <button
                        className="btn btn-primary"
                        onClick={addItemHandler}
                      >
                        Add Item
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="input-group my-4 mx-3 justify-content-end">
              <button
                className="btn btn-primary"
                onClick={createUserShipmentApi}
              >
                Submit Shipment Form
              </button>
            </div>
          </div>
        </div>
      </InnerHeadingFrame>

      <div
        className="modal fade"
        id="addRecipientModal"
        tabIndex="-1"
        aria-labelledby="addRecipientModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addRecipientModalLabel">
                Enter Recipient Details
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="email">Name:</label>
                <Input
                  type="text"
                  id="name"
                  label="Recipient's Name"
                  value={receiverInput.name}
                  onChange={(e) =>
                    setReceiverInput({
                      ...receiverInput,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <Input
                  type="text"
                  label="Address"
                  id="address"
                  value={receiverInput.address}
                  onChange={(e) =>
                    setReceiverInput({
                      ...receiverInput,
                      address: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <Input
                  type="text"
                  id="phoneNumber"
                  label="Phone Number"
                  value={receiverInput.phoneNumber}
                  onChange={(e) =>
                    setReceiverInput({
                      ...receiverInput,
                      phoneNumber: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">City:</label>
                <Input
                  type="text"
                  id="city"
                  label="City"
                  value={receiverInput.city}
                  onChange={(e) =>
                    setReceiverInput({
                      ...receiverInput,
                      city: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-light"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                onClick={createUserRecipientApi}
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ShipmentForm;
