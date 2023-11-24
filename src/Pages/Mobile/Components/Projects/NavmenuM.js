import React from 'react';
import { Link } from 'react-router-dom';

import '../../../Projects/Components/css/Nav.module.css';

function NavmenuM() {
  const linkStyle = {
    textDecoration: 'none',
    cursor: 'pointer',
    color: 'black',
  };

  const nav = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: '70vw',
  };

  return (
    <div style={nav}>
      <Link as={Link} to="/" className="d-block fs-5" style={linkStyle}>
        Home
      </Link>
    </div>
  );
}

export default NavmenuM;
