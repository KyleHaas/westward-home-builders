import React from 'react'
import './Footer.css'
import logo from "../../assets/main-logo-nobg.png";
import { Link } from 'react-router-dom';

const Footer = (props) => {

  return (
      <footer class="footer">
        <div class="row footer-wrapper" >
        	<div class="col-md-4 order-md-1 order-12  footer-brand">
            	  <img src={logo} className="footer-logo"/>
                <p>© 2020 Westward Home Builders LLC, All rights reserved</p>
          </div>
        	<div class="col-md-3 order-md-2 order-2 footer-nav">
            	<h4>Quick Links</h4>
            	<div class="col-md-6">
                    <ul class="list">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/gallery">Gallery</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
              </div>
          </div>
        	
        	<div class="col-md-5 order-md-3 order-1 footer-contact">
            	<h4>Contact</h4>
              <div class="footer-contact-method">
                <ion-icon name="call-outline" size="large"></ion-icon>
                <a href="/"><span>314-541-8866</span></a>
              </div>
              <div class="footer-contact-method">
                <ion-icon name="mail-outline" size="large"></ion-icon>
                <a href="/"><span>support@westwardhomebuilders.com</span></a>
              </div>
          </div>
        </div>
    </footer>
  )
}
export default Footer