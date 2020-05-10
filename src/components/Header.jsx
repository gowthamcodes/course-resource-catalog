import React from "react";
import logo from "../img/logo.png";
import NavElement from "./NavElement";

function Header() {
  return (
    <header>
      <img src={logo} alt="logo-img" className="logo" />
      <nav className="navbar">
        <ul>
          <NavElement
            content="More Courses"
            link="https://www.appbrewery.co/courses"
          />
          <NavElement
            content="Login"
            link="https://www.appbrewery.co/sign_in"
          />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
