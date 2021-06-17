import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { TiMail } from "react-icons/ti";
import { VscGlobe } from "react-icons/vsc";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { RiBuilding4Line, RiDoorOpenLine } from "react-icons/ri";
import { BiBuildings } from "react-icons/bi";

// import Image from "../../shared/assets";
// import Logo from "../../shared/assets/Off2.png";
// import Office from "../../shared/assets/office-block.png";
// import Open from "../../shared/assets/open-sign.png";
import "./ContactCard.css";

function ContactCard() {
  return (
    <React.Fragment>
      <div className="container text-center pb-4">
        <h2 className="heading-content">stay in touch with us</h2>
        <p className="contact-paragraph col-10 offset-1">
          Please contact us for any question, comments and complaints using the
          information below. We aim to respond to within 24 hours.We look
          forward to hearing for you.
        </p>
      </div>
      <div className="container">
        <div className="row mt-4">
          <div className="col-lg-3 col-md-6">
            <div className="card contact-card">
              <div className="card-body">
                <div className="d-flex justify-content-between pl-2">
                  <div className="card-heading">
                    <h5 className="card-title mb-0">Head Office</h5>
                    <p>KENEXPORTS LTD</p>
                  </div>
                  <div className="contact-card-logo">
                    <BiBuildings size={30} />
                  </div>
                </div>

                <div className="contact-text mt-3" style={{ color: "gray" }}>
                  <div className="cart-text d-flex">
                    <IoLocationOutline size={20} />
                    &nbsp; &nbsp;
                    <p>
                      27B, Park Avenue Industrial Estate,
                      <br />
                      Luton, Bedfordshire, <br /> LU3 3BP
                    </p>
                  </div>

                  <div className="cart-text d-flex">
                    <FiPhoneCall size={15} />
                    &nbsp; &nbsp;
                    <p>+44 (0) 1582 561 029</p>
                  </div>

                  <div className="cart-text d-flex">
                    <TiMail size={20} />
                    &nbsp; &nbsp;
                    <p>info@kenyaexports.co.uk</p>
                  </div>

                  <div className="cart-text d-flex">
                    <VscGlobe size={20} />
                    &nbsp; &nbsp;
                    <p>http://www.kenyaexports.co.uk/</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="card contact-card">
              <div className="card-body">
                <div className="d-flex justify-content-between pl-2">
                  <div className="card-heading">
                    <h5 className="card-title mb-0">Kenya Office Sea Cargo</h5>
                    <p>KENEXPORTS LTD</p>
                  </div>
                  <div className="contact-card-logo">
                    <HiOutlineOfficeBuilding size={30} />
                  </div>
                </div>

                <div className="contact-text mt-3" style={{ color: "gray" }}>
                  <div className="cart-text d-flex">
                    <IoLocationOutline size={20} />
                    &nbsp; &nbsp;
                    <p>
                      Waiyaki Way <br /> Near St Peter's Church Uthiru, <br />{" "}
                      Nairobi, Kenya
                    </p>
                  </div>

                  <div className="cart-text d-flex">
                    <FiPhoneCall size={15} />
                    &nbsp; &nbsp;
                    <p>+254 (0) 711 806 768 </p>
                  </div>

                  <div className="cart-text d-flex">
                    <TiMail size={20} />
                    &nbsp; &nbsp;
                    <p>info@kenyaexports.co.uk</p>
                  </div>

                  <div className="cart-text d-flex">
                    <VscGlobe size={20} />
                    &nbsp; &nbsp;
                    <p>http://www.kenyaexports.co.uk/</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="card contact-card">
              <div className="card-body">
                <div className="d-flex justify-content-between pl-2">
                  <div className="card-heading">
                    <h5 className="card-title mb-0">Kenya Office Air Cargo</h5>
                    <p>KENEXPORTS LTD</p>
                  </div>
                  <div className="contact-card-logo">
                    <RiBuilding4Line size={30} />
                  </div>
                </div>

                <div className="contact-text mt-3" style={{ color: "gray" }}>
                  <div className="cart-text d-flex">
                    <IoLocationOutline size={20} />
                    &nbsp; &nbsp;
                    <p>
                      Waiyaki Way <br /> Near St Peter's Church Uthiru, <br />{" "}
                      Nairobi, Kenya
                    </p>
                  </div>

                  <div className="cart-text d-flex">
                    <FiPhoneCall size={15} />
                    &nbsp; &nbsp;
                    <p>+44 (0) 1582 561 029</p>
                  </div>

                  <div className="cart-text d-flex">
                    <TiMail size={20} />
                    &nbsp; &nbsp;
                    <p>info@kenyaexports.co.uk</p>
                  </div>

                  <div className="cart-text d-flex">
                    <VscGlobe size={20} />
                    &nbsp; &nbsp;
                    <p>http://www.kenyaexports.co.uk/</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="card contact-card">
              <div className="card-body">
                <div className="d-flex justify-content-between pl-2">
                  <div className="card-heading">
                    <h5 className="card-title mb-0">Opening Hours</h5>
                    <p>KENEXPORTS LTD</p>
                  </div>
                  <div className="contact-card-logo">
                    <RiDoorOpenLine size={30} />
                  </div>
                </div>

                <div className="contact-text mt-3" style={{ color: "gray" }}>
                  <div className="cart-text">
                    <p>Mon - Fri 8am to 8pm </p>
                    <p>Sat - 9am to 4pm</p>
                    <p>We are closed on Sundays</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ContactCard;
