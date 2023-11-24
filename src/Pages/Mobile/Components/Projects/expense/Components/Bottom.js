// rock paper scissors - Bottom

// import libraries
import React from 'react';

// component
function Bottom() {

    // style
    const bottom = {
        height: '10vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',  
        textAlign: 'center',
        borderTop: '1px solid black',
    }

    // render
    return (
        <div style={bottom}>
            <h1 className="h3">Phase 3 - Complete</h1>
        </div>
    );
}

// export component
export default Bottom;
