import React, { useState } from "react";

import { Link } from "react-router-dom";

import { MenuItems } from "./MenuItems";
import { Button } from "./Button";

import "./NavbarNew.css";

const NavbarNew = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="NavbarItems">
      <h1 className="navbar-logo">
        <Link to="/" style={{ color: "black" }}>
          ShadiRegistrar
        </Link>
        <i className="fab fa-react"></i>
      </h1>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link onClick={handleClick} className={item.cName} to={item.url}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <Button className="hide-on-med-and-small sign-up-button">Sign In</Button>
    </div>
  );
};

export default NavbarNew;
