import React from "react";

import "./QAList.css";

const QAList = () => {
  return (
    <div className="container QAList   my-5">
      <div className="accordion" id="accordionExample">
        <div className="accordian-card">
          <button
            className="btn btn-block text-left collapsed accordian-button"
            id="headingone"
            type="button"
            data-toggle="collapse"
            data-target="#collapseone"
            aria-expanded="false"
            aria-controls="collapseone"
          >
            What is your mode on tranport?
          </button>
          <div
            id="collapseone"
            className="collapse"
            aria-labelledby="headingone"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              Customers have the option of sending cargo either by Sea in our
              40ft Container or by Air cargo.
            </div>
          </div>
        </div>
        <div className="accordian-card">
          <button
            className="btn  btn-block text-left collapsed accordian-button"
            id="headingtwo"
            type="button"
            data-toggle="collapse"
            data-target="#collapsetwo"
            aria-expanded="false"
            aria-controls="collapsetwo"
          >
            How long does it take for goods to arrive in Kenya?
          </button>
          <div
            id="collapsetwo"
            className="collapse"
            aria-labelledby="headingtwo"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              1) By Sea, it takes 6 weeks from the departure date. 2) By Air, it
              takes 5 days and dispatch is EVERY FRIDAY. Goods can be collected
              or delivered in Nairobi the following Wednesday or at the latest
              the Thursday following departure.
            </div>
          </div>
        </div>
        <div className="accordian-card">
          <button
            className="btn btn-block text-left collapsed accordian-button"
            id="headingthree"
            type="button"
            data-toggle="collapse"
            data-target="#collapsethree"
            aria-expanded="false"
            aria-controls="collapsethree"
          >
            How often is the service?
          </button>
          <div
            id="collapsethree"
            className="collapse"
            aria-labelledby="headingthree"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              By Sea we currently ship a single 40ft high cube container on a
              monthly basis. By Air we send cargo once a week, please make sure
              we have received the goods by the Thursday in order to be shipped
              for Friday
            </div>
          </div>
        </div>
        <div className="accordian-card">
          <button
            className="btn  btn-block text-left collapsed accordian-button"
            id="headingfour"
            type="button"
            data-toggle="collapse"
            data-target="#collapsefour"
            aria-expanded="false"
            aria-controls="collapsefour"
          >
            Do you collect from my house?
          </button>

          <div
            id="collapsefour"
            className="collapse"
            aria-labelledby="headingfour"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              We can collect from clients door step, whether home or office.
            </div>
          </div>
        </div>
        <div className="accordian-card">
          <button
            className="btn  btn-block text-left collapsed accordian-button"
            id="headingfive"
            type="button"
            data-toggle="collapse"
            data-target="#collapsefive"
            aria-expanded="false"
            aria-controls="collapsefive"
          >
            Can you deliver to my address in Kenya?
          </button>

          <div
            id="collapsefive"
            className="collapse"
            aria-labelledby="headingfive"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              We can deliver to any address in Kenya for an extra fee, depending
              on the town or city. Please call our office on +44 (0) 7949 531
              238 to arrange delivery or find out more information.
            </div>
          </div>
        </div>
        <div className="accordian-card">
          <button
            className="btn  btn-block text-left collapsed accordian-button"
            id="headingsix"
            type="button"
            data-toggle="collapse"
            data-target="#collapsesix"
            aria-expanded="false"
            aria-controls="collapsesix"
          >
            How much do you charge?
          </button>

          <div
            id="collapsesix"
            className="collapse"
            aria-labelledby="headingsix"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              Other than the stuff in our price list, the rest we charge £2.95
              per kilo + £20 handling fee by sea. By Air we charge £5.95 per
              kilo plus a £20 handling fee. These charges are inclusive of all
              customs charges.
            </div>
          </div>
        </div>

        <div className="accordian-card">
          <button
            className="btn  btn-block text-left collapsed accordian-button"
            id="headingeight"
            type="button"
            data-toggle="collapse"
            data-target="#collapseeight"
            aria-expanded="false"
            aria-controls="collapseeight"
          >
            What is allowed to ship?
          </button>

          <div
            id="collapseeight"
            className="collapse"
            aria-labelledby="headingeight"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              By sea we ship anything and everything as long as it is legal.
              There are certain restrictions when it comes to air cargo.
              Restricted items (perfumes, sprays, laptops, mobile phones,
              weapons or anything flammable or hazardous) not allowed.
            </div>
          </div>
        </div>
        <div className="accordian-card">
          <button
            className="btn  btn-block text-left collapsed accordian-button"
            id="headingnine"
            type="button"
            data-toggle="collapse"
            data-target="#collapsenine"
            aria-expanded="false"
            aria-controls="collapsenine"
          >
            How should i pack my stuff?
          </button>

          <div
            id="collapsenine"
            className="collapse"
            aria-labelledby="headingnine"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              Pack your parcels with care and securely either in carton boxes,
              suitcases, bags, plastic barrels as long as it’s safe. Make sure
              you have maximised all the space inside, you should also pay more
              attention to fragile items.
            </div>
          </div>
        </div>
        <div className="accordian-card">
          <button
            className="btn  btn-block text-left collapsed accordian-button"
            id="headingten"
            type="button"
            data-toggle="collapse"
            data-target="#collapseten"
            aria-expanded="false"
            aria-controls="collapseten"
          >
            Do you offer packing service?
          </button>

          <div
            id="collapseten"
            className="collapse"
            aria-labelledby="headingten"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              Yes we can pack for you everything you want at a fee.
            </div>
          </div>
        </div>
        <div className="accordian-card">
          <button
            className="btn  btn-block text-left collapsed accordian-button"
            id="heading11"
            type="button"
            data-toggle="collapse"
            data-target="#collapse11"
            aria-expanded="false"
            aria-controls="collapse11"
          >
            Can i pay in Kenya shillings?
          </button>

          <div
            id="collapse11"
            className="collapse"
            aria-labelledby="heading11"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              Yes you can deposit the equivalent amount as per prevailing CBK
              (Central Bank of Kenya) exchange rate into our Kenyan account or
              pay at the store. We also allow for payment to be made by the
              receiver in Kenya.
            </div>
          </div>
        </div>
        <div className="accordian-card">
          <button
            className="btn btn-block text-left collapsed accordian-button"
            id="heading12"
            type="button"
            data-toggle="collapse"
            data-target="#collapse12"
            aria-expanded="false"
            aria-controls="collapse12"
          >
            How will i know that my cargo has arrived?
          </button>

          <div
            id="collapse12"
            className="collapse"
            aria-labelledby="heading12"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              On arrival we alert our clients by a text messages.
            </div>
          </div>
        </div>
        <div className="accordian-card">
          <button
            className="btn  btn-block text-left collapsed accordian-button"
            id="heading13"
            type="button"
            data-toggle="collapse"
            data-target="#collapse13"
            aria-expanded="false"
            aria-controls="collapse13"
          >
            What happens after i have sent my goods?
          </button>

          <div
            id="collapse13"
            className="collapse"
            aria-labelledby="heading13"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              When the goods arrive in Nairobi, you will receive a text message
              to confirm arrival and a reference number which you forward to the
              receiver. The receiver then goes with ID and ref number for
              collection. We can also deliver to your door anywhere in Nairobi
              and environs, for deliveries upcountry we can arrange an approved
              third party courier company.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QAList;
