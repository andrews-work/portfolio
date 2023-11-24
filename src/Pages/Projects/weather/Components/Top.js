// Rock paper scissors - Top 

// import libraries
import React from 'react';

// import components
import weather from '../../../Images/weather.png';

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

    const img = {
        height: '70vh',
        width: 'auto',
    }

    // render
    return (
        <div style={right} >
            <img src={weather} style={img} alt="weather" />
        </div>
    );
}

// export component
export default Top; 
