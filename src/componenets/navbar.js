import React from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';
import logo from '../library/recalc-logo.png';

function NavBar() {
  return (
    <nav>
      <p className="logo">
        <img src={logo} width="100" alt="Logo" />
      </p>
      <ul>
        <li><Link className="link" to="/">Home</Link></li>
        <li><Link className="link" to="/calculate">Calculator</Link></li>
        <li><Link className="link" to="/quotes">Quotes</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
