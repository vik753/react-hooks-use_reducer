import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg d-flex justify-content-between">
      <NavLink to="/" className="navbar-brand">
        TODO
      </NavLink>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/" exact>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/addNote">
            Add note
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
