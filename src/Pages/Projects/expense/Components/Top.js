// Rock paper scissors - Top 

// import libraries
import React from 'react';

// import components
import expense from '../../../Images/expense.png';

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
            <img src={expense} style={img} alt="expense" />
        </div>
    );
}

// export component
export default Top; 
