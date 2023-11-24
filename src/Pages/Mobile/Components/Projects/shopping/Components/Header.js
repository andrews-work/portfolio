import React, { useState } from 'react';
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


  return (
    <div style={header}>
      <Link as={Link} to="/mobile-projects" >
        <h1 className="fs-5">004 - Shopping Cart</h1>
      </Link>
    </div>
  );
}

export default Header;
