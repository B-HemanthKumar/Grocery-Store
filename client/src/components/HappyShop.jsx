import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    height: 70vh;
    background-color: #DDDDDD;
    border:1px solid white;
    border-radius: 50px;
    margin-top: 20px;
    position: relative;
`;

const Circle = styled.div`
width: 400px;
height: 400px;
border-radius:50%;
background-color: #ECF2FF;
position: absolute;
 top: 40px;
 left: 110vh;   
`;

// const Img = styled.img`
    
// `;

const Text = styled.h4`
position: absolute;
top: 27vh;
left: 26vh;
font-size: 13vh;
display: flex;
flex-wrap: wrap;
// justify-content: center;
// justify-items: center;
    
`;

const Message = styled.p`
font-size: 23px; 
position: absolute;
top: 42vh;
left: 67.5vh;  
`;

const Button = styled.button`
font-size: 18px; 
padding: 10px;
position: absolute;
top: 47vh;
left: 158vh; 
border-radius:30px;
border:0.2px solid white;
background-color: #DDDDDD;
transition: all 0.5s ease;
cursor: pointer;

&:hover {
  background-color: #e9f5f5;
  transform: scale(1.2);
`;

const HappyShop = () => {
  return (
    <Container>
        <Circle></Circle>
        {/* <Img src="" alt="fruits"></Img> */}
        <Text>HAPPY SHOPPING.</Text>
        <Message> Welcome to  VINOD'S STORE, Pick, Pay And Get Deliverd .</Message>
        <Button> SHOP NOW  </Button>
    </Container>
  )
}

export default HappyShop