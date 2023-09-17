import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Avatar from '@mui/material/Avatar';
import porfoliopic from "../imgaes/portfolioPic.svg";
import Logo from "../imgaes/LOGO.svg";

export default function Header() {
  return (
    <>
      <Navbar className="navbar" expand="lg">
        <Container >
          <Navbar.Brand className="nav_brand" href="/"> <span 
          style={{display:"flex", flexDirection:"row", justifyContent:"center", alignContent:"center", alignItems:"center"}} >
            <Avatar alt="Divya Tailang" src={porfoliopic} style={{border:"2px solid cyan"}}/> <span style={{margin:"10px", fontStyle:"strong", color:"cyan"}}>@iamdivs</span> </span>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="nav_links" href="/">Home</Nav.Link>

              <Nav.Link className="nav_links" href="/experience">Experience</Nav.Link>

              {/* dropdown for project */}
              <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item className="drop_link" href="/mydesign">
                  UI/UX Designs
                </NavDropdown.Item>
                <NavDropdown.Item className="drop_link" href="/wagon">
                  Ecommerce App
                </NavDropdown.Item>

                <NavDropdown.Item className="drop_link" href="color-game">
                 Color Game
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item className="drop_link" href="/about-me">
                 About Me
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link className="nav_links" href="/contact">Contact Me</Nav.Link>
                
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
