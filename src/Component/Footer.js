import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
        </div>
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <ul>
          {/* <FontAwesomeIcon icon={faFacebookF} /> */}
          </ul>
        </div>
        <div className="footer-section">
          <h2>Copyright</h2>
          <p>&copy; 2023 All Rights Reserved</p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;