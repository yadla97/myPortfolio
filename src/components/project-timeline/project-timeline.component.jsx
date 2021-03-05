import React from 'react';
import { Timeline, Events, UrlButton, ImageEvent,themes, createTheme } from "@merc/react-timeline";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

import './project-timeline.style.css';
import tempImg from '../../assets/img/skills/git-icon.svg'

// projects
import L_ReactToDoList from "../../assets/img/projects/React_ToDo_List.webp";



//images
import L_REACT from "../../assets/img/skills/react.svg";
import L_AWS from "../../assets/img/skills/aws.png";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_JAVA from "../../assets/img/skills/java.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import L_WPS from "../../assets/img/skills/PowerShell.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_DJANGO from "../../assets/img/skills/django.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";


const customTheme = createTheme(themes.default, {
  card: {
    backgroundColor: '#efefef',
  },
  date: {
    backgroundColor: 'lightcoral',
  },
  marker: {
    borderColor: 'lightcoral',
  },
  timelineTrack: {
    backgroundColor: 'lightblue',
  },
});
const ProjectTimeLine =() =>{
    return (
        <div id="projects">
            <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
            <Timeline theme={customTheme}>
            <Events>
       
          {/* Project: Customized news reader */}
       <ImageEvent 
            date="12/10/2020"
            className="text-center"
            text="Customized News Reader"
            src={L_ReactToDoList}
            alt="React ToDo App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>Designed a small tool which captures the screenshots from different websites and gets the updated information
                        every hour                     <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Deployed it on Windows server using Amazon EC2</li>
                          <li>There is a task scheduler which runs the PowerShell script every hour</li>
                          <li>News gets updated automatically</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_WPS}
                                alt="Windows PowerShell"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Windows Powershell
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_AWS}
                                alt="AWS"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              AWS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              Task Scheduler
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/yadla97"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          {/* Project: Guessing Game - Android Project */}
       <ImageEvent
            date ="11/15/2020"
            className="text-center"
            text="Guess Four Android App"
            src={L_ReactToDoList}
            alt="Guess Four Android App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>A random guessing game which has 2 players who is guessing each other's choosen numbers 
                        each player uses different strategies for the guesses.
                        Used worker threads, handlers, loopers and message queues for designing the application
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Two computer players generate a random 4-digit secret code which the other player has to guess</li>
                          <li>Communicating this guess and waiting for a response from the opponent thread</li>
                          <li>Optimizing their guess based on response to win the game</li>
                          <li>Responsive Design</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVA}
                                alt="Java"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Java
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              Android studio
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/yadla97/AndroidDevelopment/tree/main/Guessing%20Game"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>


            </Events>
            </Timeline>
        </div>
    )
}


export default ProjectTimeLine;


{}