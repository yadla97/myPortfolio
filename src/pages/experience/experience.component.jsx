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
                    <strong>Technology:</strong> node.js, JavaScript , HTML, MongoDB
                    <br />
                    <strong>Duration:</strong> May 2018 - May 2019
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                    <li>
                    Redesigned UI accessibility for Cognizant internal website by fixing HTML, CSS, JavaScript Issues</li>
                    <li>Built custom dashboard development by displaying various charts like Line, Bar chart and Pie chart to one’s
                    compliance using Angular</li>
                    <li> Engineered strongly typed components using React, leveraged Relay store in updating
                    UI, Reduced code clutter by 70%, and achieved clear flow of data from model to view.
                    </li>
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