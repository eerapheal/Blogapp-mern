import React from 'react';
import './Footer.css'; 

const  Footer  = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h1>Sant<span className="logoB">M</span>agazi</h1>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/">FQA</a></li>
            <li><a href="/">Our policy</a></li>
            <li><a href="/">Cookies policy</a></li>
            <li><a href="/">Adverties</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <ul>
          <li><a href="https://www.youtube.com/channel/UC4kvJ-oD7LqGyoO4cXoHzZw"><i className="fab fa-youtube"></i></a></li>
            <li><a href="https://www.facebook.com/SantMagazi/"><i className="fab fa-facebook"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sant<span className="logoB">M</span>agazi. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
