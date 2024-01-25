import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/daily-booking">Daily Booking Sheet</Link></li>
        <li><Link to="/crusher">Crusher</Link></li>
        <li><Link to="/presses">Presses</Link></li>
        <li><Link to="/centrifuge">Centrifuge</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;