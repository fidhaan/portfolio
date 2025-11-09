import React from 'react';
import { Link } from 'react-router-dom';
import ProfileImage from './assets/images/Fidhaan Portfoolio.jpg'; 

// Then, use it in the component:
function Profile() {
  return <img src={ProfileImage} alt="User Profile" />;
}

const Homepage = () => {
  return (
      
      <main className="flex-grow-1">
        
        {/* 1. Hero Section */}
        <section id="hero" className="bg-black py-5 py-md-5 py-lg-7 text-center border-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                
                {/* Profile Picture Placeholder */}
                <img 
                  // NOTE: This path 'src\assets\images\Fidhaan Portfoolio.jpg' may cause issues. 
                  // Use a public URL or ensure your build tool handles local image paths correctly.
                  src={ProfileImage} 
                  alt="Profile Picture" 
                  className="rounded-circle mb-4 border border-info border-0"
                  style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                />
                
                <h1 style={{color: 'grey'}} className="display-4 fw-bold mb-3">
                  Hello, I'm <span className="text-white">Fidhaan</span>
                </h1>
                
                <p className="lead text-white mb-4">
                  A passionate Full-Stack Developer specialized in modern web technologies like <b>React</b>, <b>Django</b>, and <b>REST API</b>.
                </p>
                
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                  
                  {/* Changed anchor tag to Link for navigating to the /profile route */}
                  <Link 
                    to="/profile" 
                    className="btn bg-white text-black btn-info btn-lg px-4 me-sm-3 border-0"
                  >
                    View Profile <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  
                  <Link to={'/contact'} className="btn btn-outline-secondary btn-lg px-4">
                    Contact Me
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        
        {/* 2. Projects Section */}
        <section id="projects" className="py-5 py-lg-7 bg-white">
          <div className="container">
            <h2 className="text-center mb-5 display-5 fw-bold text-dark border-bottom border-info pb-2 d-inline-block mx-auto">
              Featured Projects
            </h2>

            <div className="row g-4">
              {/* Project Card 1 */}
              <Link style={{textDecoration: 'none'}} to={'/projects'} className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body">
                    <h5 style={{color: 'blue'}} className="card-title text fs-4">Hotel Booking System 🏨</h5>
                    <p className="card-text text-muted">
                      Hotel Booking System is web application to book hotel rooms from across the globe 🌏. It has two modules, customer module & another one is hotel owner module. Features of customer module is search hotel room using room number, hotel name, room type (Single, double, ...), price and can add to favourites list or book online, booked room can be rated and reviewed, payments are also done in online, can see the payment ...
                    </p>
                    <span className="badge bg-secondary me-1">Django</span>
                    <span className="badge bg-secondary me-1">MySQL</span>
                    <span className="badge bg-secondary me-1">Python</span>
                    <span className="badge bg-secondary me-1">JavaScript</span>
                    <span className="badge bg-secondary me-1">Bootstrap</span>
                    <span className="badge bg-secondary me-1">CSS</span>
                    <span className="badge bg-secondary me-1">HTML</span>
                    <span className="badge bg-secondary me-1">VS Code</span>
                    <span className="badge bg-secondary me-1">GitHub</span>
                    <span className="badge bg-secondary me-1">Python Anywhere</span>
                    <div className="mt-3">
                      <a style={{color: 'green', border: '1px solid green'}} href="https://projecthotel204.pythonanywhere.com/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-info me-2">Live Demo</a>
                      <a style={{color: 'grey', border: '1px solid grey'}} href="https://github.com/fidhaan/Find-Hotel" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary">GitHub</a>
                    </div>
                  </div>
                </div>
              </Link>
              
              {/* Project Card 2 */}
              <Link style={{textDecoration: 'none'}} to={'/projects'} className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body">
                    <h5 style={{color: 'green'}} className="card-title text-green fs-4">Integrated Medical Facility Network 🏥</h5>
                    <p className="card-text text-muted">
                      Integrated Medical Facility Network shortly called as IMFN. It is hospital management system which provide all services to a patient including online appointment, transfer to another hospital, Ambulance services, Emergency alerts, virtual meeting with doctors etc. This project has 5 modules which are patients, doctors, hospital, ambulance, web application administration
                    </p>
                    <span className="badge bg-secondary me-1">Django</span>
                    <span className="badge bg-secondary me-1">Python</span>
                    <span className="badge bg-secondary me-1">JavaScript</span>
                    <span className="badge bg-secondary me-1">Bootstrap</span>
                    <span className="badge bg-secondary me-1">CSS</span>
                    <span className="badge bg-secondary me-1">HTML</span>
                    <span className="badge bg-secondary me-1">VS Code</span>
                    <span className="badge bg-secondary me-1">GitHub</span>
                    <div className="mt-3">
                      <a style={{color: 'red', border: '1px solid red'}} href="" className="btn btn-sm btn-outline-info me-2">Live Demo Not Available</a>
                      <a href="https://github.com/fidhaan/IMFN" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary">GitHub</a>
                    </div>
                  </div>
                </div>
              </Link>
              
              {/* Project Card 3 (currently commented out) */}
            </div>
          </div>
        </section>

        
        {/* 3. About Me Section */}
        <section id="about" className="py-5 py-lg-7 bg-black border-top">
            <div className="container">
                <h2 style={{color: 'grey', borderBottom: '2px solid white'}} className="text-center mb-5 display-5 fw-bold text-grey pb-2 d-inline-block mx-auto">
                    About Me
                </h2>
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center text-secondary">
                        <p className="lead text-white mb-4">
                            I am a BSc Computer Science graduate and a Full-Stack Web Developer, specialized in React, Bootstrap, JavaScript, CSS, HTML for modern responsive frontend developments and Django, REST API, MySQL, Python for robust backend developments, and I am also proficient in tools like GitHub, VS Code, MS Office and Python Anywhere.
                        </p>
                        <Link to={'/contact'} className="btn btn-btn-black bg-white mt-4">
                            Get In Touch
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        
      </main>
  );
};

export default Homepage;