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
    justifyContent: 'center',
    alignItems: 'center',  
    textAlign: 'center',
    padding: '0 3vw',
    position: 'relative',
  };

  const iconContainer = {
    position: 'absolute',
    right: '3vw',
    display: 'flex',
    alignItems: 'center', // Center vertically within icon container
  };

  return (
    <div style={header}>
      <Link as={Link} to="/mobile-projects" >
        <h1 className="fs-5">002 - Weather</h1>
      </Link>
    </div>
  );
}

export default Header;
