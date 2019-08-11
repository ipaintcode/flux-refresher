import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeLink = { color: "orange" };
  return (
    <nav>
      <NavLink activeStyle={activeLink} exact to="/">
        Home
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeLink} to="/courses">
        Courses
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeLink} to="/about">
        About
      </NavLink>
    </nav>
  );
}

export default Header;
