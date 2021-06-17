import React, { useEffect, useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";
import axios from "axios";

import { validate, VALIDATOR_EMAIL } from "../../../shared/utils/validators";
import { ObjIsEmpty } from "../../../shared/utils/functions";
import LoadingSpinner from "../../../portal/components/shared/LoadingSpinner";
import { useHttpClient } from "../../../shared/hooks/http-hook";

import "./Calculator.css";

const Calculator = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [calculatorState, setCalculatorState] = useState(1);
  const [shipmentMode, setShipmentMode] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  const [error2, setError2] = useState("");
  const [success, setSuccess] = useState("");

  const quotationInputFormat = {
    weight: "",
    weightUnit: "kgs",
    length: "",
    width: "",
    height: "",
    mode: "",
  };

  const quotationResponseFormat = {
    length: "",
    width: "",
    height: "",
    actualWeight: "",
    volumetricWeight: "",
    weightUnit: "",
    mode: "",
    handlingFee: "",
    totalPrice: "",
  };

  const [quotationForm, setQuotationForm] = useState(quotationInputFormat);
  const [quotationResponse, setQuotationResponse] = useState(
    quotationResponseFormat
  );

  const getQuotationApi = async (data) => {
    try {
      const response = await sendRequest("get-quotation", "POST", data);
      setQuotationResponse(response.data);
    } catch (error) {}
  };

  const sendQuotationApi = async (data) => {
    try {
      const response = await sendRequest("email-quotation", "POST", data);
      setSuccess(response.data.message);
      console.log(response);
    } catch (error) {}
  };

  const firstStateHandler = () => {
    setCalculatorState(2);
    // signupApi();
  };

  const secondStateHandler = (mode) => {
    setCalculatorState(3);
    setShipmentMode(mode);
    setQuotationForm({ ...quotationForm, mode });
  };

  const thirdStateHandler = (event) => {
    event.preventDefault();
    console.log("hello");
    if (ObjIsEmpty(quotationForm)) {
      setCalculatorState(4);
      setError2("");
      setQuotationForm(quotationInputFormat);
      getQuotationApi(quotationForm);
    } else setError2({ message: "Please fill all the fields first." });
  };

  const fourthStateHandler = (event) => {
    event.preventDefault();
    setCalculatorState(5);
  };

  const sendEmailHandler = (event) => {
    event.preventDefault();
    if (!ObjIsEmpty(quotationResponse) || clientEmail == "")
      setError2({ message: "Please fill all the fields first." });
    else if (!validate(clientEmail, [VALIDATOR_EMAIL()]))
      setError2({ message: "Please write a valid email." });
    else sendQuotationApi({ email: clientEmail, quotation: quotationResponse });
  };

  useEffect(() => {
    setCalculatorState(1);
  }, []);

  return (
    <div className="d-flex flex-column align-items-center">
      {isLoading && (
        <div className="mb-3">
          <LoadingSpinner color="white" small />
        </div>
      )}
      {error ||
        (error2 && (
          <div className="bg-white text-danger px-1 mb-2">
            <h5 className="m-0">{error?.data?.message || error2.message}</h5>
          </div>
        ))}
      {success && (
        <div className="bg-white text-success px-1 mb-2">
          <h5 className="m-0">{success}</h5>
        </div>
      )}
      <div className="calculator-section">
        {/* FIRST STATE */}
        <button
          className={`quote-btn mx-auto ${
            calculatorState === 1 ? "active" : "inactive"
          }`}
          onClick={firstStateHandler}
        >
          GET A QUOTE
        </button>

        {/* SECOND STATE */}

        <div
          className={`get-quote-btns ${
            calculatorState === 2 ? "active" : "inactive"
          }`}
        >
          <button className={`get-quote-text`}>GET A QUOTE</button>
          <button
            className={`by-plane-btn`}
            onClick={() => secondStateHandler("PLANE")}
          >
            BY PLANE
          </button>
          <button
            className={`by-ship-btn`}
            onClick={() => secondStateHandler("SHIP")}
          >
            BY SHIP
          </button>
        </div>

        {/* THIRD STATE */}

        <form
          className={`calculate-form mx-auto ${
            calculatorState === 3 ? "active" : "inactive"
          }`}
        >
          <input
            className={`weight-input`}
            type="number"
            id="shipment-weight"
            placeholder="Weight in kgs"
            value={quotationForm.weight}
            onChange={(e) =>
              setQuotationForm({ ...quotationForm, weight: e.target.value })
            }
          />
          <select
            className="weight-unit-select d-none"
            onChange={(e) =>
              setQuotationForm({ ...quotationForm, weightUnit: e.target.value })
            }
          >
            <option value="kgs">Unit</option>
            <option value="kgs">kgs</option>
            <option value="lbs">lbs</option>
          </select>
          <input
            className={`length-input`}
            type="number"
            id="shipment-length"
            placeholder="Length in cm"
            value={quotationForm.length}
            onChange={(e) =>
              setQuotationForm({ ...quotationForm, length: e.target.value })
            }
          />
          <input
            className={`width-input`}
            type="number"
            id="shipment-width"
            placeholder="Width in cm"
            value={quotationForm.width}
            onChange={(e) =>
              setQuotationForm({ ...quotationForm, width: e.target.value })
            }
          />
          <input
            className={`height-input`}
            type="number"
            id="shipment-height"
            placeholder="Height in cm"
            value={quotationForm.height}
            onChange={(e) =>
              setQuotationForm({ ...quotationForm, height: e.target.value })
            }
          />
          <button
            type="submit"
            className={`submit-btn`}
            onClick={thirdStateHandler}
          >
            BY {shipmentMode} QUOTE
          </button>
        </form>

        {/* FOURTH STATE */}

        <div className="d-flex flex-column align-items-center">
          <div
            className={`calculator-response mx-auto ${
              calculatorState === 4 || calculatorState === 5
                ? "active"
                : "inactive"
            }`}
          >
            <div className="input-pos-relative">
              <input
                className="actual-weight"
                type="number"
                id="shipment-length"
                value={quotationResponse.actualWeight}
                readOnly
              />
              <label>
                Actual
                <br />
                Weight
              </label>
            </div>
            <div className="input-pos-relative">
              <input
                className="volumetric-weight"
                type="number"
                id="shipment-width"
                value={parseFloat(quotationResponse.volumetricWeight)?.toFixed(
                  4
                )}
                readOnly
              />
              <label>
                Volumetric
                <br />
                Weight
              </label>
            </div>
            <div className="input-pos-relative">
              <input
                className="total-cost font-weight-bold"
                type="number"
                id="shipment-height"
                value={quotationResponse.totalPrice}
                readOnly
              />
              <label>
                Total
                <br />
                Cost
              </label>
              <button className={`email-btn`} onClick={fourthStateHandler}>
                EMAIL ME
              </button>
            </div>
          </div>
          <div
            className={`email-input ${
              calculatorState === 5 ? "active" : "inactive"
            }`}
          >
            <div className="d-flex mt-2">
              <input
                type="email"
                className=""
                placeholder="Write your Email"
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="send-email-btn"
                onClick={sendEmailHandler}
              >
                Send
                <IoSendSharp size={15} />
              </button>
              <button
                className="reset-btn"
                onClick={() => {
                  setSuccess("");
                  // setError("");
                  setCalculatorState(1);
                }}
              >
                <GrPowerReset size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
