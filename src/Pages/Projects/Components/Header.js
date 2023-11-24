import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navmenu from './Navmenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [isNavmenuVisible, setIsNavmenuVisible] = useState(false);

  const toggleNavmenu = () => {
    setIsNavmenuVisible(!isNavmenuVisible);
  };

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
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h1>000 - Ideas</h1>
      </Link>
      <div className="icon-container" style={iconContainer} onClick={toggleNavmenu}>
        <div className={`icon ${isNavmenuVisible ? 'rotate' : ''}`}>
          <FontAwesomeIcon
            icon={faPlus}
            style={{
              transform: isNavmenuVisible ? 'rotate(45deg)' : 'rotate(0deg)',
              position: 'absolute',
              right: '0',
            }}
          />
        </div>
      </div>
      {isNavmenuVisible && <Navmenu />}
    </div>
  );
}

export default Header;
