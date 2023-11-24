// Projects - Main

// import libraries
import React from 'react';

// import components
import Left from './LeftM';

// component
function Main() {

    // style
    const main = {
        height: '90vh',
        width: '100vw',
        display: 'flex',
    }

    // render
    return (
        <div style={main} >
            <Left />
        </div>
    );
}

// export component
export default Main; 
