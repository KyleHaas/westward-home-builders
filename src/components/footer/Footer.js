import React from 'react'
import styled from "styled-components";

const Footer = (props) => {

  return (
    <>
      <PageFooter >
        <div class="container">
          <div class="row text-center text-xs-center text-sm-left text-md-left">
            <FooterSection className="col-xs-12 col-sm-4 col-md-4 mt-3">
              <h5>Quick Links</h5>
              <ul class="list-unstyled quick-links">
                <FooterLink><a href="/"><i class="fa fa-angle-double-right"></i>Home</a></FooterLink>
                <FooterLink><a href="/about"><i class="fa fa-angle-double-right"></i>About</a></FooterLink>
                <FooterLink><a href="/gallery"><i class="fa fa-angle-double-right"></i>Gallery</a></FooterLink>
                <FooterLink><a href="/contact"><i class="fa fa-angle-double-right"></i>Contact</a></FooterLink>
              </ul>
            </FooterSection>
            <FooterSection className="col-xs-12 col-sm-4 col-md-4 mt-3">
              
            </FooterSection>
          </div>
        </div>
        <FooterBottom>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-4">
              <ul class="list-unstyled list-inline social text-center">
                <li class="list-inline-item"><a href=""><SocialMedia className="fa fa-facebook"></SocialMedia></a></li>
                <li class="list-inline-item"><a href="" target="_blank"><SocialMedia className="fa fa-envelope"></SocialMedia></a></li>
              </ul>
            </div>
            <hr/>
          </div>	
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
              <p class="h6">© All right Reversed.<a class="text-green ml-2" href="https://westwardhomebuilders.com" target="_blank">Westward Home Builders LLC</a></p>
            </div>
            <hr/>
          </div>
        </FooterBottom>
      </PageFooter>   
   </>
  )
}

export default Footer

const PageFooter = styled.div`
    background: #2d3436;
    padding: 40px 0px 0px 0px;
`;

const FooterSection = styled.div`
  & h5 {
    font-size: 20px;
    padding-left: 10px;
    border-bottom: 1px solid #eeeeee;
    padding-bottom: 6px;
    color:#ffffff;
  }
`;
const FooterLink = styled.li`
  padding: 3px 0;

  & a {
    color: #ffffff;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none !important;
    cursor: pointer;
    padding: 3px;

    &:hover {
      color: #45b649;
      text-decoration: none;
    }
  }

  & i {
    font-size:14px;
    padding: 3px;
  }
  
`;

const FooterBottom = styled.div`
 width: 100%;
 padding-left: 15px;
 padding-right: 15px;
 padding-bottom: 10px;
 background-color: #282c2d;
`;
const SocialMedia = styled.i`
  padding: 4px;
  font-size:25px;
  color: white;
`;