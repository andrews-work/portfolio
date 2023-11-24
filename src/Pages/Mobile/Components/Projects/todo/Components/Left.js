import React from 'react';

import todo from '../../../../../Images/todo.png';

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

const githubLink = "https://github.com/andrews-work/todo";

  return (
    <div style={containerStyle}>
      <div style={sectionStyle}>
        <h1 className="fw-bold fs-2 mb-4">Aim</h1>
        <p className="fs-6">1. Create a functional expense tracker.</p>
        <p className="fs-6">2. Improve data skills.</p>
        <p className="fs-6">3. Learn front-end technologies.</p>
        <p className="fs-6">4. Aid expense management.</p>
      </div>
      <div style={sectionStyle}>
        <h1 className="fw-bold fs-2 mb-4">Process</h1>
        <p className="fs-6">1. Ensure accurate data input.</p>
        <p className="fs-6">2. Manage expenses with JavaScript.</p>
        <p className="fs-6">3. Store data locally or online.</p>
        <p className="fs-6">4. Add categorizing and filtering.</p>
      </div>

      <div>
         <img src={todo} style={img} />
      </div>

      <div style={sectionStyle}>
        <h1 className="fw-bold fs-2 mb-4">Code</h1>
        <p className="fs-5"><a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a></p>
      </div>
    </div>
  );
}

export default Left;
