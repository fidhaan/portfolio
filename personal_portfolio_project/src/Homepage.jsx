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
                  A passionate Full-Stack Developer specializing in modern web technologies, including React, Django, and Django REST Framework. Experienced in deploying and managing applications via PythonAnywhere and Netlify.
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
                    <h5 style={{color: 'green'}} className="card-title text fs-4">Modular Secure Retail Billing System 🧮</h5>
                    <p className="card-text text-muted">
                      Developed a modular billing web application using Django, designed for cross-industry adaptability. The
                      system's modular architecture allows it to function as a specialized tool for various sectors; for instance, jewelry shop
                      owners can access industry-specific features like real-time gold rate updates and specialized inventory management.
                      Alternatively, switching to ”Pharmacy Mode” enables critical features such as batch number tracking and expiration
                      monitoring. This flexible design ensures the application meets the unique standards and operational needs of any
                      business....
                    </p>
                    <span className="badge bg-secondary me-1">Django</span>
                    <span className="badge bg-secondary me-1">MySQL</span>
                    <span className="badge bg-secondary me-1">JavaScript</span>
                    <span className="badge bg-secondary me-1">Bootstrap</span>
                    <span className="badge bg-secondary me-1">HTML</span>
                    <span className="badge bg-secondary me-1">GitHub</span>
                    
                  </div>
                </div>
            </Link>

              {/* Project Card 1 */}
              <Link style={{textDecoration: 'none'}} to={'/projects'} className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body">
                    <h5 style={{color: 'blue'}} className="card-title text fs-4">Hotel Booking System 🏨</h5>
                    <p className="card-text text-muted">
                      The Hotel Booking System is a comprehensive web application designed to facilitate global room reservations through two distinct interfaces: the Customer module and the Hotel Owner module. In the Customer module, users can search for accommodations using specific criteria such as room number, hotel name, room type (ranging from single to double occupancy), and price points. Customers have the ability to manage a favorites list, book rooms online, process payments securely, and track their transaction...
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
                    
                  </div>
                </div>
              </Link>

              {/* Project Card 2 */}
              <Link style={{textDecoration: 'none'}} to={'/projects'} className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body">
                    <h5 style={{color: 'grey'}} className="card-title text fs-4">Portfolio 👤</h5>
                    <p className="card-text text-muted">
                      I developed my portfolio using a modern web development stack that includes React for the frontend architecture and Bootstrap for responsive design. I wrote the code in VS Code using JavaScript, CSS, and HTML, managed version control through GitHub, and successfully deployed the final project via Netlify.
                    </p>
                    <span className="badge bg-secondary me-1">React</span>
                    <span className="badge bg-secondary me-1">Bootstrap</span>
                    <span className="badge bg-secondary me-1">Netlify</span>
                    <span className="badge bg-secondary me-1">VS Code</span>
                    <span className="badge bg-secondary me-1">GitHub</span>
                    <span className="badge bg-secondary me-1">JavaScript</span>
                    <span className="badge bg-secondary me-1">CSS</span>
                    <span className="badge bg-secondary me-1">HTML</span>
                   
                  </div>
                </div>
              </Link>
              
              {/* Project Card 2 */}
              <Link style={{textDecoration: 'none'}} to={'/projects'} className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body">
                    <h5 style={{color: 'green'}} className="card-title text-green fs-4">Integrated Medical Facility Network 🏥</h5>
                    <p className="card-text text-muted">
                      The Integrated Medical Facility Network, commonly referred to as IMFN, is a comprehensive hospital management system designed to streamline patient care and healthcare logistics. This platform provides an extensive suite of services, including online appointment scheduling, inter-hospital transfers, integrated ambulance coordination, and real-time emergency alerts, alongside virtual consultations with medical professionals. The project is structured into five distinct modules: Patients, Doctors, Hospital, Ambulance, and Web Application Administration.
                    </p>
                    <span className="badge bg-secondary me-1">Django</span>
                    <span className="badge bg-secondary me-1">Python</span>
                    <span className="badge bg-secondary me-1">JavaScript</span>
                    <span className="badge bg-secondary me-1">Bootstrap</span>
                    <span className="badge bg-secondary me-1">CSS</span>
                    <span className="badge bg-secondary me-1">HTML</span>
                    <span className="badge bg-secondary me-1">VS Code</span>
                    <span className="badge bg-secondary me-1">GitHub</span>
                    
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
                            As a BSc Computer Science graduate and Full-Stack Web Developer, I specialize in building modern, responsive frontends using React, Bootstrap, JavaScript, CSS, and HTML, complemented by robust backend development powered by Django, Python, MySQL, and REST APIs. I am also proficient in leveraging essential industry tools such as GitHub and VS Code for development, along with MS Office for documentation and Netlify or PythonAnywhere for seamless deployment.
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