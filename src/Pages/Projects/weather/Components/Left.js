// Weather - Left

// import libraries
import React from 'react';

// component
function Left() {
  const linkStyle = {
    textDecoration: 'none',
    cursor: 'pointer',
    color: 'black',
  };

  const linkHoverStyle = {
    textDecoration: 'underline',
  };

  const simple = {
    display: 'flex',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    height: '90vh',
    width: '25vw',
    borderRight: '1px solid black',
  };

  const sectionStyle = {
    width: '23vw',
    marginBottom: '20px',
  };

  const githubLink = "https://github.com/andrews-work/weather2";

  // render
  return (
    <div style={containerStyle}>
      <div style={sectionStyle}>
        <h1 className="fw-bold fs-2 mb-4">Aim</h1>
        <p className="fs-5">1. Retrieve data from API's</p>
        <p className="fs-5">2. Learn some basics of react</p>
        <p className="fs-5">3. Improve problem-solving</p>
        <p className="fs-5">4. App must have everyday use</p>
      </div>
      <div style={sectionStyle}>
        <h1 className="fw-bold fs-2 mb-4">Process</h1>
        <p className="fs-5">1. API requests based on user input</p>
        <p className="fs-5">2. Use switch/case to sort data</p>
        <p className="fs-5">3. Create function to determine day of the week</p>
        <p className="fs-5">4. Simple user interface</p>
      </div>
      <div style={sectionStyle}>
        <h1 className="fw-bold fs-2 mb-4">Code</h1>
        <p className="fs-5"><a href={githubLink} style={linkStyle} target="_blank" rel="noopener noreferrer">GitHub</a></p>
      </div>
    </div>
  );
}

// export component
export default Left;
