import React from 'react';
import ConstructionWorker from '../../assets/home/about_us.png'

export default () => (
    <div >
        <section >
            <div class="container-fluid">
                <h1 class="section-title mb-2 h1 display-4">About Us</h1>
                <p class="text-center text-muted h4">Some informational blip about company...</p>
                <div class="row mt-5">
                    <div class="col-xs-12 col-sm-12 col-md-6">
                        <div class="aboutus-item-container">
                            <div class="aboutus-item">
                                <div class="aboutus-icon">
                                    <ion-icon name="home-outline"></ion-icon>
                                </div>
                                <div class="aboutus-content">
                                    <h4>Reliability</h4>
                                    <p>Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.</p>
                                </div>
                            </div>
                            <div class="aboutus-item">
                                <div class="aboutus-icon">
                                <ion-icon name="hammer-outline"></ion-icon>
                                </div>
                                <div class="aboutus-content">
                                    <h4>Dependability</h4>
                                    <p>Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.</p>
                                </div>
                            </div>
                            <div class="aboutus-item">
                                <div class="aboutus-icon">
                                <ion-icon name="build-outline"></ion-icon>
                                </div>
                                <div class="aboutus-content">
                                    <h4>Quality</h4>
                                    <p>Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.</p>
                                </div>
                            </div>
                            <div class="aboutus-item">
                                <div class="aboutus-icon">
                                <ion-icon name="thumbs-up-outline"></ion-icon>
                                </div>
                                <div class="aboutus-content">
                                    <h4>Something Else</h4>
                                    <p>Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="d-none d-sm-none d-md-block col-md-6" style={{ minHeight: '400px'}}>
                        <img src={ConstructionWorker} style={{maxHeight: '500px', float:'left'}} class="img-fluid" alt="Construction Worker"/>
                    </div>
                </div>
            </div>
        </section>
    </div>
);