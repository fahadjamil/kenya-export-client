import React from "react";

import newsletterImage from "../../../shared/assets/banner.png";
import newsletterVideo from "../../../shared/assets/video.mp4";
import videoThumbnail from "../../../shared/assets/video-thumbnail.jpg";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 pr-md-0">
            <div className="search-info">
              <div>
                <h1>NEWSLETTER</h1>
                <p>
                  To receive messages with latest updates on when and where
                  collections are taking place as well as shipping news please
                  provide your e-mail address:
                </p>
              </div>
              <input type="text" placeholder="Email Address" />
            </div>
          </div>
          <div className="col-md-6 pl-md-0">
            <div className="video">
              <video controls preload="none" poster={videoThumbnail}>
                <source src={newsletterVideo} type="video/mp4"></source>
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
