import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
// width: 50px;
font-size: 20px;
display: flex;
height: 40px;
background-color: black;
color: white;  
margin-bottom: 30px; 
align-items: center;
justify-content: center;  
`;

const Dev = () => {
  return (
    <Container Classname="name">
        MADE WITH LOVE BY.......................... B.HEMANTH KUMAR.
    </Container>
  )
}

export default Dev