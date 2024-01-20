import React from 'react';
import './Footer.css';
import Footerimg from '../../images/footer.png';

const Footer = () => {
  return (
    <footer className="footer">
        <hr/>
      <div className="footer-content">
        <div className="footer-logo">
          <img src={Footerimg} alt='footer'></img>
        </div>
        <div className="footer-text">
          <p>&copy; Urban Eco Planner</p>
          <p>Sundar-Haraicha, Nepal</p>
          <p>Email: urbanecoplanner@gmail.com</p>
          <p>Phone: +021 456-7890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
