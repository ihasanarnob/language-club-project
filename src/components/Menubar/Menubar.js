import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Menubar = () => {
    const linkStyle = { fontSize:'20px', textDecoration:'none',color:'antiquewhite',paddingRight:'20px'}

    return (
      <div className="me-5">
         <Navbar>
          <Container className="container-fluid" >
            <Nav className="me-auto nav-links ">
              <NavLink to ="/home" style={linkStyle} >Home</NavLink>
              <NavLink to ="/services"style={linkStyle}>Services</NavLink>
              <NavLink to ="/about" style={linkStyle}>About</NavLink>
              <NavLink to ="/activities"style={linkStyle}>Activities</NavLink>
            </Nav>
          </Container>
         </Navbar>
      </div>
    );
};

export default Menubar;