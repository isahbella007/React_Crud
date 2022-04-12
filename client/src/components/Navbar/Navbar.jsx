import React from "react";
import './Navbar.css'; 
import { Link } from "react-router-dom";
const Navbar = () => {

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">Crud Beginner</div>
      <ul className="nav-links">
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="hamburger">
          &#9776;
        </label>
        {/* Navigation Menu */}
        <div className="menu">
            <li >
            <Link to = "/">Create Employee</Link></li>
            <li >  
            <Link to="/employees" >View List</Link>
            </li>
        </div>
      </ul>
    </nav>
  );
};
export default Navbar;
