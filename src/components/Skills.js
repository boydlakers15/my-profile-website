// Import necessary MDB components
import React, { useState, useEffect } from 'react';
import './SkillsPage.css';
import "./LandingPage.css";
import './Profile.css';
import img2 from "./IMG/j.png";
import Vid1 from "./IMG/Cover.mp4";
import PDFFile from "./IMG/Jared-Boyd.pdf";
import Navbar from './Navbar.js';
import FooterPage from './FooterPage.js';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBProgress,
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
  MDBCardText
} from 'mdb-react-ui-kit';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const SkillsPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the fade-in effect after the component mounts
    setIsVisible(true);
  }, []);

 

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  const handleResumeClick = () => {
    setShowResumeModal(true);
  };

  const handleCloseResumeModal = () => {
    setShowResumeModal(false);
  };

  return (
    <section className={`profile-container ${isVisible ? 'visible' : ''}`} style={{ backgroundColor: '#eee' }}>
    <div className="landing-page">
      <MDBContainer className="my-5">
        {/* Header */}
        <MDBRow>
        <MDBCol className='fa-lg2'>
          <center>
            <a className={`${isSidebarOpen ? 'sidebar-open' : ''}`} href='#' onClick={toggleSidebar} style={{ color: 'blue' }}>
              <button  className={`btn ${isSidebarOpen ? 'raised' : ''}`} style={{ fontSize: '2rem', padding: '10px 20px', border: '1px solid #ddd'}}>
                <i className={`bi bi-house-down-fill  ${isSidebarOpen ? '' : ''}`}></i> Menu
              </button>
            </a>
          </center>
        </MDBCol>

        </MDBRow>
        <br />
        <MDBCard className="mb-4"></MDBCard>
        <MDBRow>
          {isSidebarOpen && (
            <MDBCol lg="4" className="d-none d-lg-block">
              {/* Sidebar content */}
              <div className="bg-light p-3">
                <h5>Menu</h5>
                <Navbar />
              </div>
            </MDBCol>
          )}
          <MDBCol lg={isSidebarOpen ? '8' : '12'}>
            {/* Main content */}
            <h1 className="text-center">My Skills</h1>
            <MDBCarousel>
              <MDBCarouselItem itemId={1}>
                <div className="d-flex justify-content-center align-items-center" style={{ height: '600px' }}>
                  {/* Video Background */}
                  <video autoPlay muted loop className="video-background">
                    <source src={Vid1} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="centered-content-container">
                  <MDBCarouselCaption>
                    <MDBContainer className="py-5">
                        <MDBRow >
                            
                                <MDBCol lg="4">
                                    <MDBCardImage
                                            src={img2}
                                            alt="avatar"
                                            className="square mb-1"
                                            style={{ width: '180px' }}
                                            fluid  
                                    />  
                                    <MDBCard className="mb-4"  style={{
                                        transform: 'perspective(1000px) rotateY(10deg) translateZ(50px)',
                                        background: 'rgba(255, 255, 255, 0.9)',  // Adjust alpha value for transparency
                                        boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',  // Add box shadow for a subtle fade
                                    }}>
                                    <MDBCardBody className="text-center">
                                    <h4 className="text-muted mb-1">Full Stack Developer</h4>
                                    <p className="text-muted">Baden-Baden, Baden Württemberg, DE</p>
                                    <div className="d-flex justify-content-center">
                                    <MDBBtn onClick={handleResumeClick} className="mt-1">
                                        Resume
                                    </MDBBtn>
                                    </div>
                                    <Modal show={showResumeModal} onHide={handleCloseResumeModal}size="xl">
                                        <Modal.Header closeButton>
                                            <Modal.Title>Resume</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body >
                                            <embed src={PDFFile} type="application/pdf" width="100%" height="700px" />
                                            <Button variant="secondary" onClick={handleCloseResumeModal}>
                                            Close
                                            </Button>
                                        </Modal.Body>
                                        </Modal>
                                    </MDBCardBody>
                                    </MDBCard>
                                    </MDBCol>
                                    <MDBCol lg="8">
                                        <MDBRow className="d-flex justify-content-center ">
                                            <MDBCol className='card-with-fade'style={{background: 'transparent'}}>
                                            
                                            <MDBCard className='card-with-fade'>
                                                <MDBCardBody>

                                                {/* Programming Languages */}
                                                <div className="mb-4 ">
                                                    <h2>Programming Languages</h2>
                                                    <MDBProgress className="mb-3" style={{ height: '20px' }} color="primary" value={90}>
                                                    JavaScript
                                                    </MDBProgress>
                                                    <MDBProgress className="mb-3" style={{ height: '20px' }} color="primary" value={80}>
                                                    Python
                                                    </MDBProgress>
                                                    {/* Add more programming languages as needed */}
                                                </div>
                                                </MDBCardBody>
                                            </MDBCard>
                                            <br /><br /><br />
                                            <MDBCard className='card-with-fade'>
                                                <MDBCardBody >
                                                {/* Web Development */}
                                                <div className="mb-4">
                                                    <h2>Web Development</h2>
                                                    <MDBProgress className="mb-3" style={{ height: '20px' }} color="success" value={85}>
                                                    HTML/CSS
                                                    </MDBProgress>
                                                    <MDBProgress className="mb-3" style={{ height: '20px' }} color="success" value={75}>
                                                    React
                                                    </MDBProgress>
                                                    {/* Add more web development skills as needed */}
                                                </div>

                                                {/* Add more skill sections as needed */}
                                                </MDBCardBody>
                                            </MDBCard>
                                            </MDBCol>
                                        </MDBRow>
                                    </MDBCol>
                                </MDBRow>
                                
                    </MDBContainer>
                  </MDBCarouselCaption>
                </div>
              </MDBCarouselItem>
            </MDBCarousel>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
    <MDBRow>
  <MDBCol md={isSidebarOpen ? '6' : '12'}>
    <MDBCard className="mb-4 mb-md-0">
      <MDBCardBody>
        <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">Full-Stack Web and App Developer</span></MDBCardText>

        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>WBS CODING SCHOOL</MDBCardText>
        <MDBCardText className="text-muted mb-1" style={{ fontSize: '.77rem' }}>Feb 2023 - Jun 2023 · 5 mos</MDBCardText>
        <MDBCardText className="text-muted mb-1" style={{ fontSize: '.77rem' }}>Berlin, Germany · Remote</MDBCardText>

        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Frontend:</MDBCardText>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Bootstrap</li>
          <li>Material-UI</li>
          <li>ReactJS (Fundamentals, Hooks, Router)</li>
          <li>Vanilla JavaScript (Fundamentals, DOM, OOP)</li>
        </ul>

        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend:</MDBCardText>
        <ul>
          <li>NodeJS/ExpressJS</li>
          <li>APIs (REST, GraphQL)</li>
          <li>Databases: PostgreSQL, MySQL, MongoDB</li>
        </ul>

        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Tools:</MDBCardText>
        <ul>
          <li>Git, and GitHub</li>
          <li>Postman</li>
        </ul>

        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Best Practices:</MDBCardText>
        <ul>
          <li>UX/UI Fundamentals (Figma)</li>
          <li>Agile Methodologies (SCRUM)</li>
          <li>SEO</li>
          <li>Project Management (Trello, JIRA)</li>
        </ul>
      </MDBCardBody>
    </MDBCard>
  </MDBCol>

  {/* Add more experience sections as needed */}
</MDBRow>
    <FooterPage />
    </section>
  );
};

export default SkillsPage;
