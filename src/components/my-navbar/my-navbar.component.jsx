import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from "../../assets/icons/logo.png";
import Pdf from './YA_Resume.pdf';

import "./my-navbar.styles.css";


const MyNavbar = () => {
    return (
        <>
            <Navbar fixed="top" collapseOnSelect expand="md" bg="light" variant="light" className="animate-navbar nav-theme justify-content-between color">
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#experience">Experience</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href={Pdf} target='_blank' >Resume</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default MyNavbar;

