import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Disaster Brewing</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/graph" className="nav-link">Graph</Link>
            </li>
            {/* <li className="navbar-item">
              <Link to="/" className="nav-link">Exercises</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">Create Exercise Log</Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">Create User</Link>
            </li> */}
          </ul>
        </div>
      </nav>
     );
  }
}
 
export default Navbar;