// Home - Header

// import libraries
import React from 'react';

// component
function Header() {

    // style
    const header = {
        width: '100vw',
        height: '10vh',
        borderBottom: '1px solid black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between', // Add this property
        padding: '0 3vw',
    }

    // render
    return (
        <div style={header}>
            <h1>It's Technical</h1>
            <h1>+</h1>
        </div>
    );
}

// export component
export default Header;