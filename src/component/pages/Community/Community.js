import React from "react";
import "./Community.css";
import tc from "../../../assets/img/tc.png";

function Community() {
  return (
    <section>
      <div className="grid grid--2-col center-v">
        <div className="community-image-div">
          <img className="community-image" src={tc} alt="community icon" />
        </div>
        <div className="community-second-div">
          <h2 className="secondary-heading">Join Our Free Tech Community</h2>
          <p>
            Unlock the power of knowledge and innovation by joining our vibrant
            and free WhatsApp tech community
          </p>
          <a
            href="https://www.instagram.com/so_li_h__/"
            className="primary-btn"
          >
            Join Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default Community;
