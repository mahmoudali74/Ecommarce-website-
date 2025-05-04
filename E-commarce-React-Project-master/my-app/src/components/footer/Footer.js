import React from 'react'
import './footer.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link}  from "react-router-dom";


function Footer() {
  return (
    <div className='footer'>
      <Container>
      <Row>
        <Col className='col-one'>
        <h1>grad project</h1>
        <p>
          we are e-commerce app using react js and APIs.
        </p>
        </Col>
        <Col className='col-two'>
          <h1>links</h1>
          <Link className='footerlink' to={'/home'}>Home</Link>
          <Link className='footerlink' to={'/about'}>about us</Link>
          <Link className='footerlink' to={'products'}>products</Link>
        </Col>
        <Col className='col-three'>
          <h1>social links</h1>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-solid fa-envelope"></i>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Footer
