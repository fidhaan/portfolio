import React from 'react';
import ProfileImage from './assets/images/Fidhaan Portfoolio.jpg'; 
import { Link } from 'react-router-dom';

const Profile = () => {
  // Define your static profile details here
  const profileDetails = [
    { label: 'Name', value: 'Muhammad Fidhaan' },
    { label: 'Age', value: '21' },
    { label: 'Occupation', value: 'Software Developer' },
    { label: 'Location', value: 'Kerala, India' },
    { label: 'Email', value: 'muhammad.fidhaan@example.com' },
    { label: 'Phone', value: '+91 98765 43210' },
    { label: 'GitHub', value: 'github.com/yourusername' },
    { label: 'LinkedIn', value: 'linkedin.com/in/yourprofile' },
  ];

  return (
    // Centering the card horizontally and adding top/bottom padding
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-xl-6">
          
          {/* Main Profile Card */}
          <div className="card shadow-lg border-0">
            <div className="card-body p-4 p-md-5">
              
              

              {/* Title */}
              <h4 className="card-title text-center text mb-4">
                Contact Details
              </h4>

              {/* Detail List (Using Bootstrap Grid for Alignment) */}
              <div className="list-group list-group-flush">
                <div 
                     
                    className="list-group-item d-flex justify-content-between align-items-center px-0"
                  >
                    <div className="row w-100 g-0">
                      {/* Label (Bold and takes 4 columns) */}
                      <div className="col-4 fw-bold text-dark">
                        Address
                      </div>
                      
                      {/* Value (Takes 8 columns, aligning the value consistently) */}
                      <div className="col-8 text-secondary">
                        <a style={{color: 'grey', textDecoration: 'none'}} href='https://maps.app.goo.gl/qBYh32fsyHPaNtC77'>330B, F. M. Villa, Moothala, Pallickal, 695604</a>
                      </div>
                      <hr />
                      {/* Label (Bold and takes 4 columns) */}
                      <div className="col-4 fw-bold text-dark">
                        <p style={{width: '120px', background: '#0612BA', padding: '5px', borderRadius: '10px', color: 'white'}}><i className="fa-brands fa-linkedin"></i> LinkedIn</p>
                      </div>
                      
                      {/* Value (Takes 8 columns, aligning the value consistently) */}
                      <div className="col-8 text-secondary">
                        <a href='https://www.linkedin.com/in/fidhaan/' style={{textDecoration: 'none'}}>Click here</a>
                      </div>
                      <hr />
                      {/* Label (Bold and takes 4 columns) */}
                      <div className="col-4 fw-bold text-dark">
                        <p style={{width: '120px', background: '#323232ff', padding: '5px', borderRadius: '10px', color: 'white'}}><i className="fa-brands fa-github"></i> GiHub</p>
                      </div>
                      
                      {/* Value (Takes 8 columns, aligning the value consistently) */}
                      <div className="col-8 text-secondary">
                        <a href='https://github.com/fidhaan' style={{textDecoration: 'none'}}>Click here</a>
                      </div>
                      <hr />
                      {/* Label (Bold and takes 4 columns) */}
                      <div className="col-4 fw-bold text-dark">
                        <p style={{width: '120px', background: '#0fd804ff', padding: '5px', borderRadius: '10px', color: 'white'}}><i className="fa-brands fa-whatsapp"></i> WhatsApp</p>
                      </div>
                      
                      {/* Value (Takes 8 columns, aligning the value consistently) */}
                      <div className="col-8 text-secondary">
                        <a href='https://wa.me/7559942623' style={{textDecoration: 'none'}}>Click here</a>
                      </div>
                      <hr />
                      {/* Label (Bold and takes 4 columns) */}
                      <div className="col-4 fw-bold text-dark">
                        <p style={{width: '120px', background: '#2d7a00ff', padding: '5px', borderRadius: '10px', color: 'white'}}><i className="fa-solid fa-phone"></i> Phone</p>
                      </div>
                      
                      {/* Value (Takes 8 columns, aligning the value consistently) */}
                      <div className="col-8 text-secondary">
                        <a href='tel:+917559942623' style={{textDecoration: 'none'}}>Click here</a>
                      </div>
                      <hr />
                      {/* Label (Bold and takes 4 columns) */}
                      <div className="col-4 fw-bold text-dark">
                        <p style={{width: '120px', background: '#7a2f00ff', padding: '5px', borderRadius: '10px', color: 'white'}}><i className="fa-solid fa-envelope"></i> Email</p>
                      </div>
                      
                      {/* Value (Takes 8 columns, aligning the value consistently) */}
                      <div className="col-8 text-secondary">
                        <a href='mailto:fiiidhaaan@gmail.com' style={{textDecoration: 'none'}}>Click here</a>
                      </div>
                    </div>
                  </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Profile;