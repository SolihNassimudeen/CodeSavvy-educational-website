import React from "react";
import "./Pricing.css";

function Pricing() {
  const pricingData = [
    {
      classname: "pricing-card",
      color: "#fff",
      student: "Regular",
      price: "0",
      features: [
        "Unlimited access to the Courses",
        "Customer Support",
        "Personal Mentor",
        "Standard option",
        "5 classes per week",
      ],
    },
    {
      classname: "pricing-card ",
      color: "#6f55f2",
      student: "Premium",
      price: "100",
      features: [
        "Unlimited access to the Courses",
        "Customer Support",
        "Personal Mentor",
        "Standard option",
        "5 classes per week",
      ],
    },
    {
      classname: "pricing-card pricing-card-bottom",
      color: "#fff",
      student: "Standard",
      price: "10",
      features: [
        "Unlimited access to the Courses",
        "Customer Support",
        "Personal Mentor",
        "Standard option",
        "5 classes per week",
      ],
    },
  ];
  return (
    <section>
      <div>
        <h2 className="secondary-heading text-center mb-3">
          Premium Pricing Plan
        </h2>
        <p className="title-descreption">
          Unlock elite tech services with out Premium Pricing Plan and soar
          ahead of the competition
        </p>
      </div>
      <div className="grid grid--3-cols pricing-details">
        {pricingData.map((data, index) => (
          <div className={data.classname} key={index}>
            <div
              className="card-heading"
              style={{ backgroundColor: data.color }}
            >
              <h4 className="quaternary-heading pricing-heading">
                {data.student} Member
              </h4>
              <h4 className="quaternary-heading pricing-heading">
                {data.price} /month
              </h4>
            </div>
            <div className="features-div">
              {data.features.map((features) => (
                <ul>
                  <li>{features}</li>
                </ul>
              ))}
              <a
                className="primary-btn pricing-btn"
                href="https://www.youtube.com/channel/UCiNd1DBKj_ncfueWExsLp3w"
              >
                Join
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
