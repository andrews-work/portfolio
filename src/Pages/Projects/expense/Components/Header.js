import React, { useState } from 'react';
import Navmenu from '../../Components/Navmenu';
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
    alignItems: 'center', // Center vertically within header
    justifyContent: 'space-between',
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
      <h1>004 - Expense Tracker</h1>
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
