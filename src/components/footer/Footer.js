import React from 'react'
import styled from "styled-components";

const Footer = (props) => {

  return (
    <>
      <PageFooter >
        <FlexContainer>
          
        </FlexContainer>
      </PageFooter>   
   </>
  )
}

export default Footer

const PageFooter = styled.div`
    height: 10rem;
    background: #565967;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;;
  justify-content: space-between;
  height: 10rem;
`;