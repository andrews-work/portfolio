import React from 'react';
import { Link } from 'react-router-dom';

import Image from './Components/Image';

function Websites() {
    const pageStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'black',
        color: 'white',
        position: 'relative',
    };

    const backButtonStyle = {
        fontSize: '1rem',
        position: 'absolute',
        top: '10px', 
        left: '10px', 
        color: 'white',
    };

    const imageContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
    };

    return (
        <div style={pageStyle}>
            <Link to="/" style={backButtonStyle}>Home</Link>
            <div style={imageContainerStyle}>
                <Image />
            </div>
        </div>
    );
}

export default Websites;
