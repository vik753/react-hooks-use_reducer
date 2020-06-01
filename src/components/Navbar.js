import React from 'react';
import {NavLink} from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <NavLink to="/" className="navbar-brand">TODO</NavLink>
    </nav>
  );
};

export default Navbar