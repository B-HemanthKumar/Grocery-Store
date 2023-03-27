
import React from 'react'
import styled from "styled-components"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocalPhoneTwoToneIcon from '@mui/icons-material/LocalPhoneTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import PermIdentityTwoToneIcon from '@mui/icons-material/PermIdentityTwoTone';
import TopSlide from './TopSlide';

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row ;
    padding: 0px 20px;
`;

const Left = styled.div`
flex: 1;
// display: flex;
// flex-direction: row;
`;

const Logo = styled.h1`
    
`;

const Desc = styled.p`
    margin: 20px  0px; 
`;

const SocialContainer = styled.div`
 margin-top: 05px; 
 display:flex;
 gap: 10px;
`;

const SocialIcons = styled.div` 
    width: 30px;
    height: 30px;
    color: white;
    border-radius: 50%;
    background-color: ${props=>props.color};
    align-items: center; 
    justify-content: center;
    display: flex; 
    cursor: pointer;
    margin-right: 10px;
    transition: all 0.5s ease;

    &:hover {
      background-color: teal;
      transform: scale(1.5);
`;

const Center = styled.div`
flex: 1;
padding: 10px;
`;

const Title = styled.h3`
margin-bottom: 20px
    
`;

const List = styled.ul`
margin: o;
padding: 0px;
list-style: none;
display: flex; 
flex-wrap: wrap;
cursor: pointer;
`;

const ListItem = styled.li`
width: 50%;
margin-bottom: 10px
`;

const Right = styled.div`
flex: 1;
padding: 10px;
cursor: pointer;
`;

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center; 
// border-radius: 30px ;
// background-color: teal;    
`;

const Payment = styled.img`
    
`;




const Footer = () => {
  return (
    <>
    <Container>
        <Left>
            <Logo>VINOD'S STORE.</Logo>
            <Desc> ( STORE DESCRIPTION )</Desc>
            <SocialContainer>
                <SocialIcons color="#E4405F">
                    <InstagramIcon/>   
                </SocialIcons >
                <SocialIcons color="#3B5999">
                    <FacebookIcon/>   
                </SocialIcons>
                <SocialIcons color="#55ACEE">
                    <TwitterIcon/>   
                </SocialIcons>
            </SocialContainer>
        </Left>
        <Center>
            <Title> Useful Links  </Title>
            <List>
                <ListItem>- Home.</ListItem>
                <ListItem>- Cart.</ListItem>
                <ListItem>- Wishlist.</ListItem>
                <ListItem>- My Account.</ListItem>
                <ListItem>- Products.</ListItem>
                {/* <ListItem>- Order Tracking.</ListItem> */}
                <ListItem>- Terms & Conditions.</ListItem>
            </List>
        </Center>
        <Right>
            <Title> Contact </Title>
            <ContactItem>
            <PermIdentityTwoToneIcon style={{marginRight:"10px"}} />
                    VINOD KUMAR.
            </ContactItem>
            <ContactItem>
                <LocalPhoneTwoToneIcon style={{marginRight:"10px"}} />
                    +91xxxxxxxxxx.
            </ContactItem>
            <ContactItem>
                <EmailTwoToneIcon style={{marginRight:"10px"}} />
                    Email@gmail.com
            </ContactItem>
            <Payment/> 
            <TopSlide/>
        </Right>
    </Container>
    </>
  )
}

export default Footer