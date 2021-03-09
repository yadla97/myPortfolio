import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import Slide1 from '../../assets/img/carousal/a2.jpg';
import Slide2 from '../../assets/img/carousal/a4.jpeg';
import Slide3 from '../../assets/img/carousal/a7.jpg';
import ScrollDown from '../scroll-down/scroll-down.component';


import './my-carousal.styles.css';
const MyCarousal = () => {
    return (
        <div id="home">
            <Carousel controls={false} indicators interval={2500} pause={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img"
                        src={Slide1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img"
                        src={Slide2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img"
                        src={Slide3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <ScrollDown/>
        </div>
    )
}


export default MyCarousal;