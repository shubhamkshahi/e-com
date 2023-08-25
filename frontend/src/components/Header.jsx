import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from '../assets/logo.png';
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {  
  return (
    <header>
      <Navbar
        bg="dark"
        variant="dark"
        expand="md"
        collapseOnSelect
        className="shadow"
      >
        <Container>
            <LinkContainer to='/' >
          <Navbar.Brand href="/" >
            <img src={logo} alt='ProShop'/>
            ProShop
          </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <LinkContainer to='/cart' >
              <Nav.Link >
                <FaShoppingCart className="me-2" />
                Cart
              </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
              <Nav.Link >
                <FaUser className="me-2" />
                Sign In
              </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
