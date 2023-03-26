import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
margin-top: 20px;
  height: 50px;
  background-color: #AAF1EE;  
//   opacity:0.6;
`;

const Content = styled.h3`
  color: white; 
  display: flex; 
  height: 50px;
  flex-wrap: wrap;
//   font-weight: bold;
  align-items: center; 
  justify-content: center;
`;


const Banner = () => {
  return (
   <Container>
    <Content>
       - Buy and get 20% offer on products from 27-03-2023 to 03-04-2023. -
    </Content>
   </Container>
  )
}

export default Banner