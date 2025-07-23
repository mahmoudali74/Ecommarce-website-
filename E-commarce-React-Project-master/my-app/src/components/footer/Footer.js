import React from 'react';
import './footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="custom-footer">
      <Container>
        <Row className="gy-4">
          <Col md={4}>
            <div className="footer-section">
              <h2 className="footer-title">Grad Project</h2>
              <p className="footer-description">
                A modern e-commerce platform built with React JS and powerful APIs to give you a smooth shopping experience.
              </p>
            </div>
          </Col>

          <Col md={4}>
            <div className="footer-section">
              <h2 className="footer-title">Quick Links</h2>
              <ul className="footer-links">
                <li><Link to="/home">🏠 Home</Link></li>
                <li><Link to="/about">👤 About Us</Link></li>
                <li><Link to="/products">🛒 Products</Link></li>
              </ul>
            </div>
          </Col>

          <Col md={4}>
            <div className="footer-section">
              <h2 className="footer-title">Stay Connected</h2>
              <div className="footer-icons">
                <a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                <a href="mailto:info@example.com"><i className="fa-solid fa-envelope"></i></a>
              </div>
            </div>
          </Col>
        </Row>

        <hr className="footer-line" />

        <p className="footer-bottom-text text-center">© 2025 Grad Project. Crafted with ❤️ by the team.</p>
      </Container>
    </footer>
  );
}

export default Footer;
