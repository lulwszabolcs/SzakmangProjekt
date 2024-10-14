import React from "react";

import './Navbar.css';
import logo3 from './logo3.jpg';
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <img src={logo3} alt="Logo" className="navbar-logo" />
        <ul className="navbar-list">
        <li className="navbar-item"><a href="/home">Home</a></li>
        <li className="navbar-item"><a href="/almi">Almi</a></li>
        <li className="navbar-item"><a href="/vince">Vince</a></li>
        <li className="navbar-item"><a href="/szabi">Szabi</a></li>
      </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
