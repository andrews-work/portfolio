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
    <div className="d-flex justify-content-center align-items-center">
      <div className="d-flex flex-column justify-content-between p-3" style={{ height: '70vh', width: '100vw', gap: '20px' }}>
        <section>
          <h1 className="fw-bold fs-2 mb-4">About</h1>
          <Link as={Link} to="/mobile-websites" className="d-block fs-6" style={{ ...linkStyle, ...linkHoverStyle }}>1. Websites</Link>
          <Link as={Link} to="/mobile-projects" className="d-block fs-6" style={{ ...linkStyle, ...linkHoverStyle }}>2. Projects</Link>
        </section>
        <section>
          <h1 className="fw-bold fs-2 mb-4">Reviews</h1>
          <p className="fs-6">Customer 1 - "great"</p>
          <p className="fs-6">Customer 2 - "excellent"</p>
        </section>
        <section>
          <h1 className="fw-bold fs-2 mb-4">Contact</h1>
          <p className="fs-6">Please email for all inquiries</p>
          <p className="fs-6">andrewswork@protonmail.com</p>
        </section>
      </div>
    </div>
  );
}

// export component
export default Left;
