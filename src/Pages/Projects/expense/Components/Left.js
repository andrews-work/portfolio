import React from 'react';
import { Link } from 'react-router-dom';

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

  const githubLink = "https://github.com/andrews-work/expense-tracker";

  return (
    <div style={containerStyle}>
      <div style={sectionStyle}>
        <h1 className="fw-bold fs-2 mb-4">Aim</h1>
        <p className="fs-5">1. Javascript basics.</p>
        <p className="fs-5">2. Use conditional statements, functions, variables, and event listeners.</p>
        <p className="fs-5">3. Practice problem-solving and debugging skills.</p>
      </div>
      <div style={sectionStyle}>
        <h1 className="fw-bold fs-2 mb-4">Process</h1>
        <p className="fs-5">1. Research game logic.</p>
        <p className="fs-5">2. Handle user input.</p>
        <p className="fs-5">3. Generate computer choice.</p>
        <p className="fs-5">4. Determine winner.</p>
        <p className="fs-5">5. Implement user interface.</p>
      </div>
      <div style={sectionStyle}>
        <h1 className="fw-bold fs-2 mb-4">Code</h1>
        <p className="fs-5"><a href={githubLink} style={linkStyle} target="_blank" rel="noopener noreferrer">GitHub</a></p>
      </div>
    </div>
  );
}

export default Left;
