import React from 'react'
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

import Brand from "./Brand";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";

const Navbar = (props) => {
  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 300,
    config: config.wobbly,
  });

  return (
    <>
      <NavBar >
        <FlexContainer>
          <Brand />
          <NavLinks style={linkAnimation}>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/gallery">Gallery</a>
            <a href="/contact">Contact</a>
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu
              navbarState={props.navbarState} 
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu 
        navbarState={props.navbarState} 
        handleNavbar={props.handleNavbar}
      />
      <NavBarPadding/>
   </>
  )
}

export default Navbar

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #ffffff;
  border-bottom: 1px solid #565967;
  z-index: 1;
  font-size: 1.4rem;
  z-index: 99 !important;
  -webkit-transition: .5s all ease;
	-moz-transition: .5s all ease;
	transition: .5s all ease;
`;

const NavBarPadding = styled.div`
    height: 10rem;
    -webkit-transition: .5s all ease;
    -moz-transition: .5s all ease;
    transition: .5s all ease;
    
    @media (max-width: 769px) {
      height: 6rem;
    }
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;;
  justify-content: space-between;
  height: 10rem;
  -webkit-transition: .5s all ease;
	-moz-transition: .5s all ease;
	transition: .5s all ease;

  @media (max-width: 769px) {
    height: 6rem;
  }
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: #565967;
    text-transform: uppercase;
    font-weight: 100;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #3b7bbe;
      border-bottom: 1px solid #3b7bbe;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;