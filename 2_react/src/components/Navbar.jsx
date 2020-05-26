import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <div className="container">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link className="navbar-link" to="/">
            Hjem
          </Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="/overview">
            Treningsoversikt
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
