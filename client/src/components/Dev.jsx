import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
// width: 50px;
font-size: 13px;
display: flex;
height: 40px;
background-color: black;
color: white;  
margin-bottom: 30px; 
align-items: center;
justify-content: center;  
border-radius: 40px;
`;

const Dev = () => {
  return (
    <Container Classname="name">
        MADE WITH LOVE ........................................... @ B.HEMANTH KUMAR.
    </Container>
  )
}

export default Dev