import React from 'react'
import styled from "styled-components"
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { Badge } from '@mui/material';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';


const Container = styled.div`
  height: 75px; 
  cursor: pointer;
  // position: sticky;
  top: 0;
  width: 100%;
  background-color: #EEEEEE;
  z-index: 2;

`;

const Wrapper = styled.div`
  padding: 0px 20px;   
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1; 
  display: flex;
  flex-wrap:wrap;
  align-items: center;
  
`;

const Language = styled.span`
  font-size: 14px;
  
`;

const SearchContainer = styled.div`
  // border: 0.5px solid lightgray;
  display: flex;
  // border-radius: 50%;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  // gap:10px;
`;

const Input = styled.input`
  flex:1;
  border-radius: 50px;
  padding: 05px;
`;

const Search = styled.div`
  width: 40px;
  height: 40px;
  border-radius:50%;
  background-color: white;
  display: flex;
  align-items: center; 
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.2);

  }
`;

const Logo = styled.h1`
  font-weight: bold;
  margin-top: 20px;
  
`;

const Center = styled.div`
  flex: 1; 
  text-align: center;
`;

const Right = styled.div`
flex: 1; 
display: flex;
align-items: center;
justify-content: space-around;
`;

const Button = styled.button`
 padding: 10px;
  border-radius:30px;
  background-color: white;
  display: flex;
  align-items: center; 
  cursor: pointer;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  
  &:hover {
     background-color: #e9f5f5;
    transform: scale(1.1);
`;

const Cart = styled.div`
font-size: 14px;
border-radius:30px;
transition: all 0.5s ease;

&:hover {
  background-color: #e9f5f5;
  transform: scale(1.1);
  color: black;
}
`;

const Navbar = () => {
  return (
    <Container>
      
      <Wrapper>
        
        <Left>
          <Language> EN </Language>
          <SearchContainer>
            <Input></Input>
            <Search><SearchTwoToneIcon/></Search>
            
          </SearchContainer>
        </Left>
        
        <Center>
          <Logo>   ._VINOD'S STORE_.  </Logo>
        </Center>
        
        <Right>
          <Button >SIGN UP</Button>
          <Button>LOG IN</Button>
          <Cart>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartTwoToneIcon color="primary" />
            </Badge>
          </Cart>

        </Right>
      </Wrapper>
    
    </Container>
  )
}

export default Navbar