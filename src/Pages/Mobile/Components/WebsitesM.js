import React from 'react';
import { Link } from 'react-router-dom';

import ImageM from './ImageM';

function WebsitesM() {
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
        color: 'white',
        top: '10px', 
        left: '10px', 
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
                <ImageM />
            </div>
        </div>
    );
}

export default WebsitesM;
