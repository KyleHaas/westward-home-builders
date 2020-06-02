import React from 'react';
import BluePrint from '../../assets/home/about_us.jpg'

export default () => (
    <div >
        <section >
            <div class="container-fluid">
                <h1 class="section-title mb-2 h1 display-4">About Us</h1>
                <p class="text-center text-muted h4">Some informational blip about company...</p>
                <div class="row mt-5">
                    <div class="col-xs-12 col-sm-6 col-md-6">
                        Test
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-6" style={{backgroundImage: "url('" + BluePrint + "')", minHeight: '400px', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize:'cover'}}>
                    </div>
                </div>
            </div>
        </section>
    </div>
);