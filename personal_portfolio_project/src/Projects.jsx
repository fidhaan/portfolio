import React from 'react'

function Projects() {
  return (
    <section id="projects" className="py-5 py-lg-7 bg-white">
          <div className="container">
            <h2 className="text-center mb-5 display-5 fw-bold text-dark border-bottom border-info pb-2 d-inline-block mx-auto">
              Featured Projects
            </h2>

            <div className="row g-4">
              {/* Project Card 1 */}
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body">
                    <h5 style={{color: 'green'}} className="card-title text fs-4">Modular Secure Retail Billing System 🧮</h5>
                    <p className="card-text text-muted">
                      Developed a modular billing web application using Django, designed for cross-industry adaptability. The
                      system's modular architecture allows it to function as a specialized tool for various sectors; for instance, jewelry shop
                      owners can access industry-specific features like real-time gold rate updates and specialized inventory management.
                      Alternatively, switching to ”Pharmacy Mode” enables critical features such as batch number tracking and expiration
                      monitoring. This flexible design ensures the application meets the unique standards and operational needs of any
                      business.
                    </p>
                    <span className="badge bg-secondary me-1">Django</span>
                    <span className="badge bg-secondary me-1">MySQL</span>
                    <span className="badge bg-secondary me-1">JavaScript</span>
                    <span className="badge bg-secondary me-1">Bootstrap</span>
                    <span className="badge bg-secondary me-1">HTML</span>
                    <span className="badge bg-secondary me-1">GitHub</span>
                    <div className="mt-3">
                      <a style={{color: 'red', border: '1px solid red'}} href="" rel="noopener noreferrer" className="btn btn-sm btn-outline-info me-2">Live Demo Not Available</a>
                      <a style={{color: 'grey', border: '1px solid grey'}} href="" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary">GitHub Not Available</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Card 1 */}
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body">
                    <h5 style={{color: 'blue'}} className="card-title text fs-4">Hotel Booking System 🏨</h5>
                    <p className="card-text text-muted">
                      Hotel Booking System is web application to book hotel rooms from across the globe 🌏. It has two modules, customer module & another one is hotel owner module. Features of customer module is search hotel room using room number, hotel name, room type (Single, double, ...), price and can add to favourites list or book online, booked room can be rated and reviewed, payments are also done in online, can see the payment history. Features of hotel owner module is can manage (add, edit, delete) rooms, see ratings and review. Features of both modules are account creation, but registration form may differ based on the type of user for example Hotel owners need to add their hotel license details, their ID proof and other hotel details and also both modules can manage (edit and delete) their account or profile. So these are the main features of this project. Next when we comes to the technologies that used for this project are Django, MySQL, Python, JavaScript, Bootstrap, CSS, HTML, VS Code, GitHub, Python Anywhere
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
              </div>

              {/* Project Card 2 */}
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body">
                    <h5 style={{color: 'grey'}} className="card-title text fs-4">Portfolio 👤</h5>
                    <p className="card-text text-muted">
                      Integrated Medical Facility Network shortly called as IMFN. It is hospital management system which provide all services to a patient including online appointment, transfer to another hospital, Ambulance services, Emergency alerts, virtual meeting with doctors etc. This project has 5 modules which are patients, doctors, hospital, ambulance, web application administration
                    </p>
                    <span className="badge bg-secondary me-1">React</span>
                    <span className="badge bg-secondary me-1">Bootstrap</span>
                    <span className="badge bg-secondary me-1">Netlify</span>
                    <span className="badge bg-secondary me-1">VS Code</span>
                    <span className="badge bg-secondary me-1">GitHub</span>
                    <span className="badge bg-secondary me-1">JavaScript</span>
                    <span className="badge bg-secondary me-1">CSS</span>
                    <span className="badge bg-secondary me-1">HTML</span>
                    <div className="mt-3">
                      <a style={{color: 'green', border: '1px solid green'}} href="https://fidhaan.netlify.app" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-info me-2">Live Demo</a>
                      <a style={{color: 'grey', border: '1px solid grey'}} href="https://github.com/fidhaan/portfolio" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary">GitHub</a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Project Card 3 */}
              <div className="col-md-6 col-lg-4">
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
                    <div className="mt-3">
                      <a style={{color: 'red', border: '1px solid red'}} href="" className="btn btn-sm btn-outline-info me-2">Live Demo Not Available</a>
                      <a href="https://github.com/fidhaan/IMFN" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary">GitHub</a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Project Card 3 (currently commented out) */}
            </div>
          </div>
        </section>
  )
}

export default Projects