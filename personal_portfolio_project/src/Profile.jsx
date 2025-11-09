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
              
              {/* Profile Photo - Top Center */}
              <div className="text-center mb-4">
                <img
                src={ProfileImage} 
                  alt="Profile Picture" 
                  className="rounded-circle mb-4 border border-info border-0"
                  style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                />
              </div>

              {/* Title */}
              <h4 className="card-title text-center text-info mb-4">
                Personal Details
              </h4>

              {/* Detail List (Using Bootstrap Grid for Alignment) */}
              <div className="list-group list-group-flush">
                <div 
                     
                    className="list-group-item d-flex justify-content-between align-items-center px-0"
                  >
                    <div className="row w-100 g-0">
                      {/* Label (Bold and takes 4 columns) */}
                      <div className="col-4 fw-bold text-dark">
                        Name
                      </div>
                      
                      {/* Value (Takes 8 columns, aligning the value consistently) */}
                      <div className="col-8 text-secondary">
                        Muhammad Fidhaan F. M.
                      </div>
                      <hr />
                      {/* Label (Bold and takes 4 columns) */}
                      <div className="col-4 fw-bold text-dark">
                        D. O. B.
                      </div>
                      
                      {/* Value (Takes 8 columns, aligning the value consistently) */}
                      <div className="col-8 text-secondary">
                        22nd February 2024
                      </div>
                      <hr />
                      {/* Label (Bold and takes 4 columns) */}
                      <div className="col-4 fw-bold text-dark">
                        Education
                      </div>
                      
                      {/* Value (Takes 8 columns, aligning the value consistently) */}
                      <div className="col-8 text-secondary">
                        BSc Computer Science (CGPA 7.07)
                      </div>
                      <hr />
                      <div className="col-4 fw-bold text-dark">
                        Skills
                      </div>
                      {/* Value (Takes 8 columns, aligning the value consistently) */}
                      <div className="col-8 text-secondary">
                        Full Stack Web Developer (Backend: Django, REST API, MySQL, Python; Frontend: React, JavaScript, Bootstrap, CSS, HTML), Tools: GitHub, VS Code, MS Office, Python Anywhere
                      </div>
                      <hr />
                      <div className="col-4 fw-bold text-dark">
                        Experience
                      </div>
                      {/* Value (Takes 8 columns, aligning the value consistently) */}
                      <div className="col-8 text-secondary">
                        <ul>
                          <li>Full Stack Web Developer Intern at Luminar Technolab - April 21st 2025 - November 7th 2025 (6 months)</li>
                          <li>Project Team Member at Softzane Solutions - January 1st 2025 - April 1st 2025 (3 months)</li>
                        </ul>
                        
                      </div>
                      <hr />
                      <div className="col-4 fw-bold text-dark">
                        Projects
                      </div>
                      {/* Value (Takes 8 columns, aligning the value consistently) */}
                      <div className="col-8 text-secondary">
                        <Link to={'/projects'} style={{borderRadius: '15px', background: 'green', color: 'white', textDecoration: 'none', padding: '10px'}}>Click here to view</Link>
                        
                      </div>
                      <hr style={{marginTop: '17px'}} />
                      <div className="col-4 fw-bold text-dark">
                        Hobbies
                      </div>
                      {/* Value (Takes 8 columns, aligning the value consistently) */}
                      <div className="col-8 text-secondary">
                        <ul>
                          <li>Drawing</li>
                          <li>Dancing</li>
                          <li>Singing</li>
                          <li>Gaming</li>
                        </ul>
                        
                      </div>
                      <hr />
                      <div className="col-4 fw-bold text-dark">
                        Certifications
                      </div>
                      {/* Value (Takes 8 columns, aligning the value consistently) */}
                      <div className="col-8 text-secondary">
                        <ul>
                          <li>Hackerrank Python (Basic) certificate</li>
                          <li>Hackerrank SQL (Advanced) certificate</li>
                          <li>Hackerrank SQL (Basic) certificate</li>
                          <li>HTML certified by StudySection</li>
                          <li>HTML certified by Lumous Learning</li>
                        </ul>
                        
                      </div>
                      <hr />
                      <div className="col-4 fw-bold text-dark">
                        Resume
                      </div>
                      {/* Value (Takes 8 columns, aligning the value consistently) */}
                      <div className="col-8 text-secondary">
                        <Link to={'/resume'} style={{borderRadius: '15px', background: 'red', color: 'white', textDecoration: 'none', padding: '10px'}}>Click here to download</Link>
                        
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