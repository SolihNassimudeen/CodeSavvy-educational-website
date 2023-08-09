import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import footer from "../../assets/img/footer.png";

function Footer() {
  const footer_company = [
    {
      path: "/courses",
      display: "Our program",
    },
    {
      path: "/services",
      display: "Our plan",
    },
    {
      path: "/community",
      display: "Become a member",
    },
  ];
  const quick_link = [
    {
      path: "/aboutus",
      display: "About Us",
    },
    {
      path: "/contactus",
      display: "Contact Us",
    },
    {
      path: "/supportus",
      display: "Support",
    },
  ];
  const eventhandler = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer className="footer">
      <div className="footer-primary-div">
        <div className="footer-logo">
          <img className="footer-logo-img" src={footer} alt="icon" />
          <Link className="footer-logo-title">Code Savvy</Link>
        </div>
        <p className="footer-descreption">
          Embrace the future of innovation and technology with our cutting-edge
          tech business solutions.
        </p>
      </div>
      <div>
        <h3 className="quaternary-heading">Company</h3>
        <ul className="list-items">
          {footer_company.map((data) => (
            <li>
              <Link
                onClick={eventhandler}
                to={data.path}
                className="footer-list"
              >
                {data.display}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="quaternary-heading">Quick Links</h3>
        <ul className="list-items">
          {quick_link.map((data) => (
            <li>
              <Link
                onClick={eventhandler}
                className="footer-list"
                to={data.path}
              >
                {data.display}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
