// Shopping - Left

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

  const githubLink = "https://github.com/andrews-work/ecommerce-cart";

  return (
    <div style={containerStyle}>
      <div style={sectionStyle}>
        <h1 className="fw-bold fs-2 mb-4">Aim</h1>
        <p className="fs-5">1. Create an eCommerce site using React and the Stripe API.</p>
        <p className="fs-5">2. Develop a functional shopping cart with state management.</p>
        <p className="fs-5">3. Provide users a seamless experience to browse and buy products.</p>
      </div>
      <div style={sectionStyle}>
        <h1 className="fw-bold fs-2 mb-4">Process</h1>
        <p className="fs-5">1. Design user-friendly product display and cart interfaces.</p>
        <p className="fs-5">2. Utilize useState and useContext for cart state.</p>
        <p className="fs-5">3. Integrate Stripe API for secure payment processing.</p>
        <p className="fs-5">4. Implement smooth product selection, addition, and checkout.</p>
      </div>
      <div style={sectionStyle}>
        <h1 className="fw-bold fs-2 mb-4">Code</h1>
        <p className="fs-5"><a href={githubLink} style={linkStyle} target="_blank" rel="noopener noreferrer">GitHub</a></p>
      </div>
    </div>
  );
}

export default Left;
