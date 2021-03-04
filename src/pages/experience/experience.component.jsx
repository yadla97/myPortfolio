import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Tilt from 'react-tilt'; 
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";


import "./experience.style.css";
const Experience = () =>{

return (
    <div id='experience'>
         <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
            <Jumbotron className="jumbo-style">
                <Container>
                <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center"></Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Programmer Analyst</strong>
                    <br />
                    <strong>Technology:</strong> node.js, JavaScript , HTML, MongoDB, Express.js
                    <br />
                    <strong>Duration:</strong> May 2018 - May 2019
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                    <li>A web application developed from scratch using HTML 5, CSS 3, Bootstrap, node.js, express.js and MongoDB as
                    database on AWS</li>
                    <li>Developed outstanding responsive layout and used node.js libraries like Mongoose, crypto</li>
                    <li>This site contains features like sign up, sign in and a list of books that user can rate and add his/her favorite books
                    to cart</li>
                    <li>Tech stack: AWS, HTML, CSS, JavaScript, node.js, MongoDB</li>
                      

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
                </Container>
            </Jumbotron>
    </div>
)

}

export default Experience;