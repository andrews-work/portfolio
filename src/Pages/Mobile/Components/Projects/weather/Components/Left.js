import React from 'react';

import weather from '../../../../../Images/weather.png';

function Left() {

  const simple = {
    display: 'flex',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '2vw',
    width: '100vw',
    borderRight: '1px solid black',
  };

  const sectionStyle = {
    width: '100vw',
    maraginTop: '4vh',
    marginBottom: '20px',
  };

  const img = {
    height: 'auto',
    width: '90vw',
    marginBottom: '3vh',
}

const githubLink = "https://github.com/andrews-work/weather2";

  return (
    <div style={containerStyle}>
      <div style={sectionStyle}>
        <h1 className="fw-bold fs-2 mb-4">Aim</h1>
        <p className="fs-6">1. Retrieve data from API's</p>
        <p className="fs-6">2. Learn some basics of react</p>
        <p className="fs-6">3. Improve problem-solving</p>
        <p className="fs-6">4. App must have everyday use</p>
      </div>
      <div style={sectionStyle}>
        <h1 className="fw-bold fs-2 mb-4">Process</h1>
        <p className="fs-6">1. API requests based on user input</p>
        <p className="fs-6">2. Use switch/case to sort data</p>
        <p className="fs-6">3. Create function to determine day of the week</p>
        <p className="fs-6">4. Simple user interface</p>
      </div>

      <div>
         <img src={weather} style={img} />
      </div>

      <div style={sectionStyle}>
        <h1 className="fw-bold fs-2 mb-4">Code</h1>
        <p className="fs-5"><a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a></p>
      </div>
    </div>
  );
}

export default Left;
