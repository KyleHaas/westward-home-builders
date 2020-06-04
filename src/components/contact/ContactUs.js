import React, { Component } from 'react';
import './ContactUs.css'


class ContactUs extends Component {
    
    render() {
        return (
            <>
            
                <section>
                    <div class="container-fluid">
                        <div class="row">
                            <div style={{width:'100%'}}>
                                <h1 class="section-title mb-2 h1 display-4">Contact Us</h1>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6  mt-4" > 
                                <iframe width="100%" height="320px;" frameborder="0"  src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJaY32Qm3KWTkRuOnKfoIVZws&key=AIzaSyAf64FepFyUGZd3WFWhZzisswVx2K37RFY" allowfullscreen></iframe>
                            </div>

                            <div class="col-md-6  mt-4">
                                <form action="form.php" class="contact-form" method="post">
                        
                                    <div class="form-group">
                                    <input type="text" class="form-control" id="name" name="nm" placeholder="Name" required="" autofocus=""/>
                                    </div>
                                
                                
                                    <div class="form-group form_left">
                                    <input type="email" class="form-control" id="email" name="em" placeholder="Email" required=""/>
                                    </div>
                                
                                <div class="form-group">
                                    <input type="text" class="form-control" id="phone" onkeypress="return event.charCode >= 48 && event.charCode <= 57" maxlength="10" placeholder="Mobile No." required=""/>
                                </div>
                                <div class="form-group">
                                <textarea class="form-control textarea-contact" rows="5" id="comment" name="FB" placeholder="Type Your Message/Feedback here..." required=""></textarea>
                                <br/>
                                <button class="btn btn-default btn-send"> <span class="glyphicon glyphicon-send"></span> Send </button>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div class="container-fluid mt-4">
                        <div class="row">
                            <div class="col-xs-12 col-sm-6 col-lg-4">
                                <div class="box">							
                                    <div class="icon">
                                        <div class="image"><i class="fa fa-envelope" aria-hidden="true"></i></div>
                                        <div class="info">
                                            <h3 class="title">Email</h3>
                                            <p>
                                                <i class="fa fa-envelope" aria-hidden="true"></i> inquiry@westwardhomebuilders.com
                                            </p>
                                        
                                        </div>
                                    </div>
                                    <div class="space"></div>
                                </div> 
                            </div>
                                
                            <div class="col-xs-12 col-sm-6 col-lg-4">
                                <div class="box">							
                                    <div class="icon">
                                        <div class="image"><i class="fa fa-mobile" aria-hidden="true"></i></div>
                                        <div class="info">
                                            <h3 class="title">Phone</h3>
                                            <p>
                                                <i class="fa fa-mobile" aria-hidden="true"></i>Phone   555-555-5555
                                                <br/>
                                                <br/>
                                                <i class="fa fa-mobile" aria-hidden="true"></i>Fax  555-555-5555
                                            </p>
                                        </div>
                                    </div>
                                    <div class="space"></div>
                                </div> 
                            </div>
                                
                            
                        </div>
                    </div>    
                </section>
            </>
        )
    }
}

export default ContactUs