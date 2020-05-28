import React from 'react';
import { Carousel } from 'react-responsive-carousel';

var slide1 = require(`../../assets/home/home_addition.jpg`)
var slide2 = require(`../../assets/home/custom_home.jpg`)
var slide3 = require(`../../assets/home/home_remodel.jpg`)
export default () => (
    <Carousel autoPlay showThumbs={false} showArrows={false} showStatus={false} infiniteLoop={true} interval={8000} showIndicators={false} className="carousel-wrapper">
        <div className="image-container" style={{
            backgroundImage: "url(" + slide1+")"
        }}> </div>
        <div className="image-container" style={{
            backgroundImage: "url(" + slide2+")"
        }}> </div>
        <div className="image-container" style={{
            backgroundImage: "url(" + slide3+")"
        }}> </div>
    </Carousel>
    
);
