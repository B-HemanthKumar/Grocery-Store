
import React from 'react'
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import styled from 'styled-components';


const Container = styled.div`
  height: 50vh;
  background-color: #fcf5f5;
  align-items: center; 
  justify-content: center;
  flex-direction:column;
  border-radius:100px;
  display: flex; 
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const Title = styled.h1`
font-size: 70px ;
margin-bottom: 20px    
`;

const Desc = styled.div`
font-size: 24px ;
font-weight: 300;
margin-bottom: 20px  
`;

const InputContainer = styled.div`
width: 50%;
margin-top:30px;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
// border: 1px solid lightgray;
border-radius: 30px;
`;

const Input = styled.input`
border: none;
flex: 8;
padding-left: 10px; 
`;

const Button = styled.button`
flex: 1;
border-radius: 100px;
// border-color: white;
background-color: white;
color: black;
cursor: pointer;
transition: all 0.5s ease;

&:hover {
  background-color: #e9f5f5;
  transform: scale(1.1);
}

`;

const Newsletter = () => {
  return (
    <Container>
        <Title> Newsletter </Title>
        <Desc> Get timely updates of your favourite products from the best store. ( "VINOD'S STORE" ) </Desc>
        <InputContainer>
            <Input placeholder="Enter Email" />
             <Button>
                    <SendRoundedIcon/>
                </Button>   
        </InputContainer>
      </Container>
  )
}

export default Newsletter