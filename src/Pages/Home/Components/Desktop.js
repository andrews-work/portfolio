
// DesktopComponent.jsx
import React from 'react';

// import components
import Header from './Header';
import Main from './Main';

// component
const Desktop = () => {

  // styles  
  const styles = {
    height: '100vh',
    width: '100vw',
    background: 'white',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
  };

  // render
  return (
    <div style={styles}>
      <Header />
      <Main />
    </div>
  );
};

// export component
export default Desktop;
