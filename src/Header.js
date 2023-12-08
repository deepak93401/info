import React from "react";

import { RiFacebookFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6"
import { FaTwitter } from "react-icons/fa";

import Logo1 from './imaige/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";



function Header(){
    return(
        <>
    
        <header>

          {/* <div className="container">
            <div className="row">
               <div className="col-md-12"> */}
               <Navbar expand="lg" className="nav">
      <Container>
        <Navbar.Brand href="#home">
            <div className="logo">
                <img src={Logo1}></img>
            </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  className="navbar-dark"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/"  as={Link} id="nav_link1" >Home</Nav.Link>
            <Nav.Link to="/About" as={Link}  id="nav_link2">About</Nav.Link>
            <Nav.Link to="/Service" as={Link}   id="nav_link3">Service</Nav.Link>
            <Nav.Link to="/Portfolio" as={Link}  id="nav_link4" >Portfolio</Nav.Link>
            <Nav.Link to="/Blog"  as={Link}  id="nav_link5">Blog</Nav.Link>
            <Nav.Link to="/Contact" as={Link}  id="nav_link6">Contact</Nav.Link>
            
          </Nav>
        
          <div className="icon-header">
          <RiFacebookFill className="i-head" />
          <FaLinkedinIn  className="i-head"  />
          <FaInstagram  className="i-head" />
          <FaTwitter   className="i-head" />

          </div>

          <button className="nav-btn" >BUY NOW</button>
      
        </Navbar.Collapse>
      </Container>
    </Navbar>

              

               {/* </div>
            </div>
          </div> */}

     

        </header>
         
   

        
        </>
    )
}
export default Header;