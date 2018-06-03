import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">blog</NavLink>
        </li>
        <li>
          <NavLink to="/work">work</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
