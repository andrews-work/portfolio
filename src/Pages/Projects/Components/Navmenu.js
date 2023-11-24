import React from 'react';
import { Link } from 'react-router-dom';

import './css/Nav.module.css';

function Navmenu() {
  const linkStyle = {
    textDecoration: 'none',
    cursor: 'pointer',
    color: 'black',
  };

  const nav = {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '70vw',
  };

  return (
    <div style={nav}>
      <Link as={Link} to="/projects/rps" className="d-block fs-5" style={linkStyle}>
        Rock Paper Scissors
      </Link>
      <Link as={Link} to="/projects/weather" className="d-block fs-5" style={linkStyle}>
        Weather
      </Link>
      <Link as={Link} to="/projects/todo" className="d-block fs-5" style={linkStyle}>
        Todo
      </Link>
      <Link as={Link} to="/projects/shopping-cart" className="d-block fs-5" style={linkStyle}>
        Shopping Cart
      </Link>
      <Link as={Link} to="/projects/expense-tracker" className="d-block fs-5" style={linkStyle}>
        Expense Tracker
      </Link>
    </div>
  );
}

export default Navmenu;
