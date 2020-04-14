import React from 'react'
import './Nav.css';
import {
  Link
} from "react-router-dom";

function Nav() {
  return (
      <div className="nav">
          <Link to="/events" className="nav__link">Events</Link>
          <Link to="/about" className="nav__link">About</Link>
      </div>
  )
}

export default Nav;