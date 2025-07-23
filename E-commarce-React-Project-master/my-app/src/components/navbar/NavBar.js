import React from 'react'
import './nav.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



function NavBar() { 
  return (
    <div className='nav-section'>
      <Navbar expand="lg" className="navbar">
      <Container className='nav'>
        <Navbar.Brand className=' brand'><Link className='link' to={'/'}>store</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggle-icon' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navLinks" >
            <Nav.Link href="#home" className='NavLink'><Link className='link' to={'/home'}>home</Link></Nav.Link>
            <Nav.Link href="#link" className='NavLink'><Link className='link' to={'/products'}>products</Link></Nav.Link>
          
        
          </Nav>
          <Nav className="me-auto navLinks" >
            <Link to={'/cart'} className='icon link'><i className="fa-solid fa-cart-shopping"></i></Link>
          
            <Link to={'/'} className='login'>login</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar
