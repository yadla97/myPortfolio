import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { Parallax } from "react-parallax";
import Container from 'react-bootstrap/Container';
//components

import MyNavbar from "./components/my-navbar/my-navbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component";
import TitleMessage from './components/title-message/title-meesage.component';
import About from './pages/about/about.component';
import Experience from './pages/experience/experience.component';
import ProjectTimeLine from "./components/project-timeline/project-timeline.component";
import ContactForm from "./pages/contact-form/contact-form.component";
import FooterPanel from './components/footer/footer.component';

import './App.css';

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar/>
      <MyCarousal/>
      <TitleMessage/>
      <div>
      <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
           <Container className="container-box rounded">
              <Fade duration={500}>
              <hr />
                <About/>
              </Fade>
            </Container>
      </Parallax>
      </div>
      <div>
          <Container className="container-box rounded">
            <Slide duration={500}>
            <hr />
              <Experience/>
            </Slide>
          </Container>
      </div>
      <div>
          <Container className="container-box rounded">
            <Slide duration={500}>
            <hr />
              <ProjectTimeLine/>
            </Slide>
          </Container>
      </div>
      <div>
          <Container className="container-box rounded">
            <Slide duration={500}>
            <hr />
              <ContactForm/>
            </Slide>
          </Container>
      </div>
      <FooterPanel/>
    </div>
  );
}

export default App;
