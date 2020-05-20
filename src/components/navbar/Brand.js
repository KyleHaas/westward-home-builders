import React from 'react'
import styled from "styled-components";
import logo from "../../assets/main-logo.jpg";

const Brand = () => {
  return (
    <Image src={logo} alt="Westward Home Builders" />
  )
}

export default Brand

const Image = styled.img`
  height: 90%;
  margin: auto 0;
`;