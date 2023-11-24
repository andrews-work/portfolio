// Projects - Left

import React from 'react';
import { Link } from 'react-router-dom';

function Left() {
  const linkStyle = {
    textDecoration: 'none',
    cursor: 'pointer',
    color: 'black',
  };

  const linkHoverStyle = {
    textDecoration: 'underline',
  };

  const simple = {
    display: 'flex',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '3vw',
    marginTop: '2vh',
    height: 'auto',
    width: '80vw',
  };

  const sectionStyle = {
    width: '100vw',
    marginBottom: '5vh',
  };

  const img = {
    height: 'auto',
    width: '90vw',
    marginBottom: '3vh',
}
  const estoreLink = "https://github.com/andrews-work/estore";


  return (
    <div style={containerStyle}>
      <div style={sectionStyle}>
        <h1 className="fw-bold fs-2 mb-4">Aim</h1>
        <p className="fs-5">1. Write clean code.</p>
        <p className="fs-5">2. Create useful projects.</p>
        <p className="fs-5">3. Learn & Challenge myself.</p>
      </div>
      <div style={sectionStyle}>
        <h1 className="fw-bold fs-2 mb-4">Complete</h1>
        <p className="fs-5" style={simple}>1. <Link as={Link} to="/projects/mobile-rps" className="d-block fs-5" style={{ ...linkStyle, ...linkHoverStyle }}>Rock Paper Scissors</Link></p>
        <p className="fs-5" style={simple}>2. <Link as={Link} to="/projects/mobile-weather" className="d-block fs-5" style={{ ...linkStyle, ...linkHoverStyle }}>Weather</Link></p>
        <p className="fs-5" style={simple}>3. <Link as={Link} to="/projects/mobile-todo" className="d-block fs-5" style={{ ...linkStyle, ...linkHoverStyle }}>Todo</Link></p>
        <p className="fs-5" style={simple}>4. <Link as={Link} to="/projects/mobile-shopping-cart" className="d-block fs-5" style={{ ...linkStyle, ...linkHoverStyle }}>Shopping Cart</Link></p>
        <p className="fs-5" style={simple}>5. <Link as={Link} to="/projects/mobile-expense-tracker" className="d-block fs-5" style={{ ...linkStyle, ...linkHoverStyle }}>Expense Tracker</Link></p>
      </div>
      <div style={sectionStyle}>
        <h1 className="fw-bold fs-2 mb-4">Development</h1>
        <p className="fs-5">1. <a href={estoreLink} style={linkStyle} target="_blank" rel="noopener noreferrer">E-Store</a></p>
        <p className="fs-5">2. Mates</p>
      </div>
    </div>
  );
}

export default Left;
