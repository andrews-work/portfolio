// Todo - Home

// import libraries
import React from 'react';

// import components
import Header from './Components/Header';
import Main from './Components/Main';

// component
function Projects() {

    // styles
    const projects = {
        height: '100vh',
        width: '100vw',
        background: 'white',
        color: 'black',
        display: 'flex',
        flexDirection: 'column',
    }

    // render
    return (
        <div style={projects} >
            <Header />
            <Main />
        </div>
    );
}

// export component
export default Projects; 
