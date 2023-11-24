// Rock Paper Scissors - Main

// import libraries
import React from 'react';

// import components
import Left from './Left';
import Bottom from './Bottom';

// component
function Main() {

    // style
    const main = {
        height: '90vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
    }

    // render
    return (
        <div style={main} >
            <Left />
            <Bottom />
        </div>
    );
}

// export component
export default Main; 
