import React from 'react';


import shopping from '../../../../../Images/cart.png';

function Left() {

  const simple = {
    display: 'flex',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '2vw',
    width: '100vw',
    maraginTop: '4vh',
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

const githubLink = "https://github.com/andrews-work/ecommerce-cart";

  return (
    <div style={containerStyle}>
      <div style={sectionStyle}>
        <h1 className="fw-bold fs-2 mb-4">Aim</h1>
        <p className="fs-6">1. Create an eCommerce site using React and the Stripe API.</p>
        <p className="fs-6">2. Develop a functional shopping cart with state management.</p>
        <p className="fs-6">3. Provide users a seamless experience to browse and buy products.</p>
      </div>
      <div style={sectionStyle}>
        <h1 className="fw-bold fs-2 mb-4">Process</h1>
        <p className="fs-6">1. Design user-friendly product display and cart interfaces.</p>
        <p className="fs-6">2. Utilize useState and useContext for cart state.</p>
        <p className="fs-6">3. Integrate Stripe API for secure payment processing.</p>
        <p className="fs-6">4. Implement smooth product selection, addition, and checkout.</p>
      </div>

      <div>
         <img src={shopping} style={img} />
      </div>

      <div style={sectionStyle}>
        <h1 className="fw-bold fs-2 mb-4">Code</h1>
        <p className="fs-5"><a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a></p>
      </div>
    </div>
  );
}

export default Left;
