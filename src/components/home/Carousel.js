import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'

export default () => (
    <Carousel autoPlay showThumbs={false} showArrows={false} showStatus={false} infiniteLoop={true} interval={8000}>
        <div>
            <img alt="" src={slide1} />        
        </div>
        <div>
            <img alt="" src={slide2} />
        </div>
        <div>
            <img alt="" src={slide3} />
        </div>
    </Carousel>
);
