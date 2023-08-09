import React from "react";
import "./Courses.css";
import ai from "../../../assets/img/ai.png";
import dg from "../../../assets/img/dg.png";
import sd from "../../../assets/img/sd.png";
import hacking from "../../../assets/img/hacking.png";

function Courses() {
  const courseData = [
    { image: ai, title: "AI DEVELOPMENT", desc: "Master AI Development!!!" },
    {
      image: hacking,
      title: "CYBER SECURITY",
      desc: "Master Cyber Security!!!",
    },
    {
      image: dg,
      title: "DIGITAL MARKETING",
      desc: "Master Digital Marketing!!!",
    },
    {
      image: sd,
      title: "SOFTWARE DEVELOPMENT",
      desc: "Master Software Development!!!",
    },
  ];
  return (
    <section>
      <h2 className="secondary-heading text-center mb-3">Our Free Courses</h2>
      <p className="title-descreption">
        The Top Trending Free Courses With Free Certificates
      </p>
      <div className="courses-grid">
        {courseData.map((data, index) => (
          <div className="course-container-self" key={index}>
            <div className="course-image-div">
              <img className="course-image" src={data.image} alt={data.title} />
            </div>
            <div>
              <h4 className="course-heading">{data.title}</h4>
              <p>{data.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Courses;
