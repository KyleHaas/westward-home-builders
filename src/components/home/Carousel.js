import React from 'react';
import { Carousel } from 'react-responsive-carousel';

export default () => (
    <Carousel autoPlay showThumbs={false} showArrows={false} showStatus={false} infiniteLoop={true} interval={8000} dynamicHeight={false}>
        <div>
            <img className="img-responsive" alt="" src={require(`../../assets/home/home_addition.jpg`)} />
            {/* <div className="promo">
                <h1>Blip and Button</h1>
            </div> */}
        </div>
        <div>
            <img className="img-responsive" alt="" src={require(`../../assets/home/custom_home.jpg`)} />
            {/* <p className="legend">Hello</p> */}
        </div>
        <div>
            <img className="img-responsive" alt="" src={require(`../../assets/home/home_remodel.jpg`)} />
            {/* <p className="legend">Hello</p> */}
        </div>
    </Carousel>
);
