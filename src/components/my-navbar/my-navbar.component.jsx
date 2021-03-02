import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from "../../assets/icons/logo.png";

import "./my-navbar.styles.css";


const MyNavbar = () => {
    return (
        <>
            <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark" className="animate-navbar nav-theme justify-content-between">
                <Navbar.Brand href="#home">
                    <img className="logo" src={Logo} alt='My Portfolio Logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#experience">Experience</Nav.Link>
                        <Nav.Link href="#resume">Resume</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default MyNavbar;
