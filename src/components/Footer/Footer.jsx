import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-square-twitter"></i>
        <i className="fa-brands fa-square-facebook"></i>
      </div>

      <ul className="footer-menu-links">
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>

      <p className="copyright-text">© 1997 - 2024 Netflic, Inc.</p>
    </footer>
  );
}

export default Footer
