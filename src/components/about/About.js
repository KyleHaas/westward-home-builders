import React from 'react';

const About = () => {
    return (
        <>
            
                <section>
                    <h1 className="section-title mb-2 h1 display-4">About Us</h1>
                    <div class="bg-white py-5">
                        <div class="container py-5">
                            <div class="row align-items-center mb-5">
                                <div class="col-lg-6 order-2 order-lg-1"><i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                                    <h2 class="font-weight-light">Lorem ipsum dolor sit amet</h2>
                                    <p class="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                                <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834139/img-1_e25nvh.jpg" alt="" class="img-fluid mb-4 mb-lg-0"/></div>
                            </div>
                            <div class="row align-items-center">
                                <div class="col-lg-5 px-5 mx-auto"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/img-2_vdgqgn.jpg" alt="" class="img-fluid mb-4 mb-lg-0"/></div>
                                <div class="col-lg-6"><i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
                                    <h2 class="font-weight-light">Lorem ipsum dolor sit amet</h2>
                                    <p class="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                    <div class="bg-light py-5">
                        <div class="container py-5">
                            <div class="row mb-4">
                            <div class="col-lg-12 text-center ">
                                <h2 class="display-4 font-weight-light">Our team</h2>
                            </div>
                            </div>

                            <div class="row justify-content-md-center  text-center">
                            <div class="col-xl-3 col-sm-6 mb-5">
                                <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834133/avatar-2_f8dowd.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                                <h5 class="mb-0">Chris </h5><span class="small text-uppercase text-muted">Owner - Founder</span>
                                <ul class="social mb-0 list-inline mt-3">
                                    <li class="list-inline-item"><a href="tel:5555555555" class="social-link"><ion-icon name="call-outline"></ion-icon></a></li>
                                    <li class="list-inline-item"><a href="mailto:support@westardhomebuilders.com" class="social-link"><ion-icon name="mail-outline"></ion-icon></a></li>
                                </ul>
                                </div>
                            </div>
                            <div class="col-xl-3 col-sm-6 mb-5">
                                <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834130/avatar-3_hzlize.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                                <h5 class="mb-0">Jason Tarro</h5><span class="small text-uppercase text-muted">Owner - Founder</span>
                                <ul class="social mb-0 list-inline mt-3">
                                    <li class="list-inline-item"><a href="tel:5555555555" class="social-link"><ion-icon name="call-outline"></ion-icon></a></li>
                                    <li class="list-inline-item"><a href="mailto:support@westardhomebuilders.com" class="social-link"><ion-icon name="mail-outline"></ion-icon></a></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                    
                    </div>

        </>
    )
    
}

export default About
