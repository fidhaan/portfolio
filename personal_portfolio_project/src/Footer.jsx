import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 pb-2 mt-auto">
      <div className="container text-center">
        <div className="row justify-content-center mb-3">
          {/* Social Links - Use icons like Font Awesome here */}
          <div className="col-auto">
            <a href="https://wa.me/7559942623" target="_blank" rel="noopener noreferrer" className="text-white mx-3 text-decoration-none hover-link"> 
              <i className="fa-brands fa-whatsapp"></i> WhatsApp
            </a>
            <a href="https://maps.app.goo.gl/qBYh32fsyHPaNtC77" target="_blank" rel="noopener noreferrer" className="text-white mx-3 text-decoration-none hover-link"> 
              <i className="fa-solid fa-location-dot"></i> Address
            </a>
            <a href="https://github.com/fidhaan" target="_blank" rel="noopener noreferrer" className="text-white mx-3 text-decoration-none hover-link"> 
              <i className="fa-brands fa-github"></i> GitHub
            </a>
            <a href="https://www.linkedin.com/in/fidhaan/" target="_blank" rel="noopener noreferrer" className="text-white mx-3 text-decoration-none hover-link">
              <i className="fa-brands fa-linkedin"></i> LinkedIn
            </a>
            <a href="mailto:fiiidhaaan@gmail.com" className="text-white mx-3 text-decoration-none hover-link">
              <i className="fa-solid fa-envelope"></i> Email
            </a>
            <a href="tel:+917559942623" className="text-white mx-3 text-decoration-none hover-link">
              <i className="fa-solid fa-phone"></i> Phone
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <p style={{color: 'lightgrey'}} className="text mb-0">
          &copy; {new Date().getFullYear()} Muhammad Fidhaan F. M. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;