import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import codesavvy_logo from "../../assets/img/codesavvy_logo.jpg";
import { BiMenu } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
function Header() {
  const nav_title = [
    { path: "/", display: "Home" },
    { path: "/courses", display: "Courses" },
    { path: "/services", display: "Services" },
    { path: "/aboutus", display: "About Us" },
  ];
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="logo">
        <img className="logo-img" src={codesavvy_logo} alt="icon of company" />
        <Link className="logo-title">Code Savvy</Link>
      </div>
      <nav className={`nav-menu ${menuOpen ? "mobile-menu" : ""}`}>
        <ul className="main-nav-list">
          {nav_title.map((item) => (
            <li>
              <Link
                className="main-nav-link"
                to={item.path}
                onClick={toggleMenu}
              >
                {item.display}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button className="menu-btn">
        <BiMenu className={menuOpen ? "open" : ""} onClick={toggleMenu} />
        <GrClose className={!menuOpen ? "open" : ""} onClick={toggleMenu} />
      </button>
    </header>
  );
}

export default Header;
