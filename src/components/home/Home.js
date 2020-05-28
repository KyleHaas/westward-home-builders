import React, { Component } from 'react';
import Carousel from './Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Home.css';
import WhoWeAre from './WhoWeAre';
import Services from './Services';

class Home extends Component {
    
    scrolldown() {
        this.ref.scrollIntoView({behavior: 'smooth'})
    }
    

    render() {
        const ref = React.createRef();

        return (
            <>
              <Carousel/>
              <div className="overlay">
                  <div className="overlay-text">
                  <button type="button" class="btn btn-outline-light">Light</button>
                  </div>
                  <div className="overlay-scroll">
                      <div className="overlay-scroll-button" onClick={() => this.scrolldown()}>
                        <span class="scroll-down-inner">
                            <ion-icon name="arrow-down-circle-outline"></ion-icon>
                        </span>
                       </div>
                  </div>
              </div>
              <div ref={(end) => {this.ref = end}} className="section-divider">
                  <hr className="divider"/> 
              </div>
              <WhoWeAre/>
              <div className="section-divider">
                  <hr className="divider"/> 
              </div>
              <Services/>
           </>
          )
    }
}  

export default Home