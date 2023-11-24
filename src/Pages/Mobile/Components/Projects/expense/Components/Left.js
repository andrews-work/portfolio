import React from 'react';

import expense from '../../../../../Images/expense.png';

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

const githubLink = "https://github.com/andrews-work/expense-tracker";

  return (
    <div style={containerStyle}>
      <div style={sectionStyle}>
        <h1 className="fw-bold fs-2 mb-4">Aim</h1>
        <p className="fs-6">1. Javascript basics.</p>
        <p className="fs-6">2. Use conditional statements, functions, variables, and event listeners.</p>
        <p className="fs-6">3. Practice problem-solving and debugging skills.</p>
      </div>
      <div style={sectionStyle}>
        <h1 className="fw-bold fs-2 mb-4">Process</h1>
        <p className="fs-6">1. Research game logic.</p>
        <p className="fs-6">2. Handle user input.</p>
        <p className="fs-6">3. Generate computer choice.</p>
        <p className="fs-6">4. Determine winner.</p>
        <p className="fs-6">5. Implement user interface.</p>
      </div>

      <div>
         <img src={expense} style={img} />
      </div>

      <div style={sectionStyle}>
        <h1 className="fw-bold fs-2 mb-4">Code</h1>
        <p className="fs-5"><a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a></p>
      </div>
    </div>
  );
}

export default Left;
