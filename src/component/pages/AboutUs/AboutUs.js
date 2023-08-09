import React from "react";
import "./AboutUs.css";
import solih from "../../../assets/img/solih.JPG";

function AboutUs() {
  return (
    <section>
      <div className="grid grid--2-col center-h">
        <div className="profile-section">
          <h3 className="tertiary-heading text-center">Our Team</h3>
          <div className="about-image-div">
            <img className="profile-image" src={solih} alt="Solih N" />
          </div>
          <p className="about-name">Solih N</p>
          <p className="about-position">Co-Founder</p>
        </div>
        <div className="about-text-div">
          <h2 className="secondary-heading">About Us</h2>
          <p>
            We are passionate about making education accessible, engaging, and
            personalized for learners of all ages using our cutting-edge
            educational technology platform.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
