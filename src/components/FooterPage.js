import React from 'react';
import img8 from "./IMG/logo.png";
import './FooterPage.css';
import '../App.css';
import './Profile.css';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBIcon,
  MDBFooter,
} from 'mdb-react-ui-kit';

function FooterPage() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
      <section className='footer'>
        <MDBContainer className='text-center text-md-start mt-1'>
        <MDBRow className='mt-1'>
            <MDBCol md='3' lg='4'  className='mx-auto '>
              <h6 className='text-uppercase fw-bold mb-4'>
                
                <img src={img8} alt="Github Icon" className="img-fluid1" height={'150px'} width={'150px'}/>
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit.
              </p>
            </MDBCol>

          

           

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                info@example.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-2 botm' style={{color: 'white'}}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;
