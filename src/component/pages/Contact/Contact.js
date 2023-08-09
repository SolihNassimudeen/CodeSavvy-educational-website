import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section>
      <h2 className="secondary-heading text-center mb-3">Contact Us</h2>
      <p className="title-descreption">
        We'd love to hear from you. Please fill out the form below or reach out
        to us using the contact details provided.
      </p>
      <div>
        <form className="form-div" action="">
          <div className="form-field">
            <label htmlFor="Name">Name:</label>
            <input type="text" />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email:</label>
            <input type="email" />
          </div>
          <div className="form-field">
            <label htmlFor="textBox">Message</label>
            <textarea
              className="textarea"
              name="textBox"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button className="btn-submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
