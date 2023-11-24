
// DesktopComponent.jsx
import React from 'react';

// import components
import Header from './Components/HeaderM';
import Left from './Components/LeftM';
// import Main from './Main';

// component
const Desktop = () => {

  // styles  
  const styles = {
    height: '100vh',
    width: '100vw',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    margin: '0vw',
    border: 'box',
  };

  // render
  return (
    <div style={styles}>
        <Header />
        <Left />
    </div>
  );
};

// export component
export default Desktop;
