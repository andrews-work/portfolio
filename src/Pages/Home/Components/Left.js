// home header

// import libraries
import React from 'react';
import { Link } from 'react-router-dom';

// component
function Left() {

  // link style
  const linkStyle = {
    textDecoration: 'none',
    cursor: 'pointer',
    color: 'black',
  };

  // link hover
  const linkHoverStyle = {
    textDecoration: 'underline',
  };

  // render component
  return (
    <div className="d-flex justify-content-center align-items-center border-right" style={{ height: '90vh', width: '25vw', borderRight: '1px solid black' }}>
      <div className="d-flex flex-column justify-content-between p-3" style={{ height: '70vh', width: '20vw', gap: '20px' }}>
        <section>
          <h1 className="fw-bold fs-2 mb-4">About</h1>
          <Link as={Link} to="/websites" className="d-block fs-5" style={{ ...linkStyle, ...linkHoverStyle }}>1. Websites</Link>
          <Link as={Link} to="/projects" className="d-block fs-5" style={{ ...linkStyle, ...linkHoverStyle }}>2. Projects</Link>
        </section>
        <section>
          <h1 className="fw-bold fs-2 mb-4">Reviews</h1>
          <p className="fs-5">Customer 1 - "great"</p>
          <p className="fs-5">Customer 2 - "excellent"</p>
        </section>
        <section>
          <h1 className="fw-bold fs-2 mb-4">Contact</h1>
          <p className="fs-5">Please email for all inquiries</p>
          <p className="fs-5">andrewswork@protonmail.com</p>
        </section>
      </div>
    </div>
  );
}

// export component
export default Left;
