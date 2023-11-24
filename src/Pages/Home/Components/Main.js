// Main component with responsive styling

import React from 'react';
import Left from './Left';
import Right from './Right';

function Main() {
    const main = {
        width: '100%',
        display: 'flex',
        flexDirection: 'row', // Default layout for desktop
    };

    const mediaQuery = `@media (max-width: 900px) {
        flex-direction: column; // Change to column layout for screens smaller than 900px
    }`;

    return (
        <div style={{ ...main, ...mediaQuery }}>
            <Left />
            <Right />
        </div>
    );
}

export default Main;
