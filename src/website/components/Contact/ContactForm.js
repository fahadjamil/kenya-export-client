import React from "react";

import FormImg from "../../../shared/assets/FormImg.png";
import "./ContactForm.css";

function ContactForm() {
  return (
    <section className="contact-form-section">
      <div className="container pb-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={FormImg} style={{ width: "100%" }} />
          </div>
          <div className="col-md-6">
            <div className="col-md-12 form-heading">
              <h2>send a message</h2>
            </div>
            <form className="col-md-12">
              <div className="row">
                <div className="col-md-4 form-detail">
                  <input type="text" id="name" placeholder="Name" />
                </div>
                <div className="col-md-4 form-detail">
                  <input type="Email" id="email" placeholder="Email Address" />
                </div>
                <div className="col-md-4 form-detail">
                  <input type="text" id="Subject" placeholder="Subject" />
                </div>

                <div className="col-md-12 form-detail">
                  <textarea
                    id="exampleFormControlTextarea1"
                    rows="9"
                    cols="77"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
              </div>
              <button type="button" className="btn mt-4 form-button">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
