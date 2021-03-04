import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Profile from '../../assets/img/profile/a.jpg';
import Button from "react-bootstrap/Button";
import Pdf from '../../components/my-navbar/Resume_A.pdf';

import './about.style.css';

const About = () => {
    return (
        <div id="about">

            <div className="about">
                <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
                <Container>
                    <Row className="pt-3 pb-5 align-items-center">
                        <Col xs={12} md={6}>
                            <Row className="justify-content-center mb-2 mr-2 ">
                                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
                            </Row>
                        </Col>

                        <Col xs={12} md={6}>
                            <Row className=" align-items-start p-2 my-details rounded">
                                Hi there! I am <strong>&nbsp;Anjali Yadla</strong>
                                {/* <br />I am a Master's student at University of Illinois at Chicago. */}
                                <br />I am a graduate student in the School of University of Illinois, Chicago. I am pursuing a Master of Computer Science degree.
                                <br />I am broadly interested in Software Development with strong fundamentals in algorithms, dynamic programming, object oriented programming and relational databases.
                                <br />I worked as a Programmer Analyst with React.js, Express.js, node.js, JavaScript, MongoDB as my tech stack.
                                <br />
                                Working with the clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them.
                                <br />
                                <br />I love learning about new technologies, what problems are they solving and how can I use them to build better and scalable products.
                                <br /> <br />
                                <Col className="d-flex justify-content-center flex-wrap">
                                    <div>
                                        <a href="#contact">
                                            <Button className="m-2" variant="outline-primary">
                                                Let's talk
                                            </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href={Pdf} target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-success">
                                                My Resume
                                            </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://github.com/yadla97" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-dark">
                                                GitHub
                                            </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://www.linkedin.com/in/anjali-yadla-863431171/" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-info">
                                                LinkedIn
                                            </Button>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )

}

export default About;