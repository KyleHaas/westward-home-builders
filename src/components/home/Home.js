import React, { Component } from 'react';
import Carousel from './Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Home.css';
import WhoWeAre from './WhoWeAre';
import WhatWeDo from './WhatWeDo';

class Home extends Component {
    
    render() {
        return (
            <>
              <Carousel/>
              <WhoWeAre/>
              <WhatWeDo/>
           </>
          )
    }
}  

export default Home