// Rock paper scissors - Right

// import libraries
import React from 'react';

// import components
import Top from './Top';
import Bottom from './Bottom';

// component
function Right() {

    // style
    const right = {
        height: '90vh',
        width: '75vw',
        display: 'flex',
        flexDirection: 'column',
    }

    // render
    return (
        <div style={right} >
            <Top />
            <Bottom />
        </div>
    );
}

// export component
export default Right; 
