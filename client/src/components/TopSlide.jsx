import React from 'react'
import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';
import styled from 'styled-components';

const Container = styled.div`
// border: 1px solid gray;
// border-radius: 20px; 
display: flex;
justify-content: flex-end; 
`;

const Button = styled.button`
height: 40px;
weight: 40px;  
border: 1px solid gray;
  border-radius: 20px; 
  color: white;
  background-color: gray;
  cursor: pointer; 
  transition: all 0.5s ease;

  &:hover {
    background-color: black;
    transform: scale(1.5);

  }  
`;

const TopSlide = () => {
  return (
    <Container>
        <Button>
            <ArrowCircleUpTwoToneIcon/>
        </Button>
    </Container>
  )
}

export default TopSlide