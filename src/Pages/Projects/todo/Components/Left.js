// Todo - Left

import React from 'react';

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
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh',
    width: '25vw',
    borderRight: '1px solid black',
  };

  const sectionStyle = {
    width: '23vw',
    marginBottom: '20px',
  };

  const githubLink = "https://github.com/andrews-work/todo";

  return (
    <div style={containerStyle}>
      <div style={sectionStyle}>
        <h1 className="fw-bold fs-2 mb-4">Aim</h1>
        <p className="fs-5">1. Create a functional expense tracker.</p>
        <p className="fs-5">2. Improve data skills.</p>
        <p className="fs-5">3. Learn front-end technologies.</p>
        <p className="fs-5">4. Aid expense management.</p>
      </div>
      <div style={sectionStyle}>
        <h1 className="fw-bold fs-2 mb-4">Process</h1>
        <p className="fs-5">1. Ensure accurate data input.</p>
        <p className="fs-5">2. Manage expenses with JavaScript.</p>
        <p className="fs-5">3. Store data locally or online.</p>
        <p className="fs-5">4. Add categorizing and filtering.</p>
      </div>
      <div style={sectionStyle}>
        <h1 className="fw-bold fs-2 mb-4">Code</h1>
        <p className="fs-5"><a href={githubLink} style={linkStyle} target="_blank" rel="noopener noreferrer">GitHub</a></p>
      </div>
    </div>
  );
}

export default Left;
