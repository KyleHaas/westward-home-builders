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

        return (
            <>
              <Carousel/>
              <div className="overlay">
                  <div className="overlay-text">
                      <div className="overlay-text-block">
                          <div className="overlay-text-container">
                            <h1>Westward Home Builders</h1>
                            <h2>Let us build your next home</h2>
                            <div>
                                <button type="button" class="btn contact-us-button">
                                    Contact Us Today
                                </button>
                            </div>
                          </div>
                      </div>
                    
                  </div>
                  <div className="overlay-scroll">
                      <div className="overlay-scroll-button" onClick={() => this.scrolldown()}>
                        <span class="scroll-down-inner">
                            <ion-icon name="arrow-down-circle-outline"></ion-icon>
                        </span>
                       </div>
                  </div>
                  <div ref={(end) => {this.ref = end}}></div>
              </div>
              <div className="section-divider">
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