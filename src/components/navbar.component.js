import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => ( 
  <nav className="navbar constrain">
    <Link to="/" className="navbar__brand">Disaster Brewing</Link>
    <ul className="navbar__menu">
      <li>
        <Link className="navbar__menu--item" to="/graph">Graph</Link>
      </li>
    </ul>
  </nav>
)

export default Navbar;