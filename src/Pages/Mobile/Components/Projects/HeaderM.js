// mobile - projects - header

// import libraries
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Header() {

  const header = {
    width: '100vw',
    height: '10vh',
    borderBottom: '1px solid black',
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'space-between',
    padding: '0 3vw',
    position: 'relative',
  };

  const iconContainer = {
    position: 'absolute',
    right: '3vw',
    display: 'flex',
    alignItems: 'center', 
  };

  return (
    <div style={header}>
      <Link as={Link} to="/" >
        <h1 className="fs-5">000 - Ideas</h1>
      </Link>
    </div>
  );
}

export default Header;
