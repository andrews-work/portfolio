// Home - Top

// import libraries
import React from 'react';

// import components

// component
function Top() {

    // style
    const right = {
        height: '80vh',
        width: '75vw',
        borderBottom: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',  
        textAlign: 'center',
    }

    // render
    return (
        <div style={right} >
            <h1>Your website here</h1>
        </div>
    );
}

// export component
export default Top; 
