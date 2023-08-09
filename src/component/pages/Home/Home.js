import React from "react";
import "./Home.css";
import meta from "../../../assets/img/meta.jpeg";
import { FaWhatsapp } from "react-icons/fa";
import Courses from "../Courses/Courses";
import Community from "../Community/Community";
import Pricing from "../Pricing/Pricing";

function Home() {
  return (
    <>
      <section>
        <div className="home-container">
          <div className="home-main">
            <h1 className="primary-heading">Learn Everything For Free!!</h1>
            <p className="home-descreption">
              Master Trending Technologies with Techflix AI, Invest Your Time
              and return skills.
            </p>
            <div className="home-btn-div">
              <a
                href="https://www.youtube.com/channel/UCiNd1DBKj_ncfueWExsLp3w"
                className="primary-btn"
              >
                Get Started
              </a>
              <a
                href="https://www.youtube.com/channel/UCiNd1DBKj_ncfueWExsLp3w"
                className="primary-btn"
              >
                Watch Now
              </a>
            </div>
          </div>
          <div className="image-div">
            <div className="active-support-div">
              <p className="imgdiv-text">
                Active <br />
                Support
              </p>
            </div>
            <div className="students-number-div">
              <p className="imgdiv-text">
                500+ Students <br />
                <FaWhatsapp className="icon-whatsapp" />
              </p>
            </div>
            <img className="home-img" src={meta} alt="Ai" />
          </div>
        </div>
      </section>
      <Courses />
      <Community />
      <Pricing />
    </>
  );
}

export default Home;
