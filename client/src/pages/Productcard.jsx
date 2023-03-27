import React from 'react'
import styled from 'styled-components';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import RemoveCircleTwoToneIcon from '@mui/icons-material/RemoveCircleTwoTone';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

const Container = styled.div`
    
`;

const Wrapper = styled.div`
padding: 50px;
display: flex;
border: 1px solid gray;
border-radius: 80px;
margin: 40px 0px;
background-color: #DBE4C6 ;
`;

const ImageCont = styled.div`
flex: 1;
border-radius: 30px;
//  padding: 0px 50px;  
`;

const Image = styled.img`
width:100%;
height: 90vh;
object-fit: cover;
    
`;

const InfoCont = styled.div`
flex: 1;  
padding: 50px 50px;  
`;

const Title = styled.h1`
font-weight: 400;
font-size: 50px;
margin-top: 20px; 
`;

const Desc = styled.h4`
margin: 40px 0px ; 
font-size: 20px;
`;

const Price = styled.span`
font-weight: 300;
font-size: 30px; 
margin-top: 40px ;   
`;

const FilterCont = styled.div`
   margin: 40px 0px;
   width: 50%; 
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.div`
font-weight: 500;
font-size: 20px; 
    
`;

const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
border-radius: 50px;
border: 1px solid teal;
`;

const FilterSizeOption = styled.option`
    
`;

const AddCont = styled.div`
    display: flex;
    margin-top: 200px:
    flex-wrap: wrap;
    align-items: center;
    width: 50%; 
    justify-content: space-between;
    
`;

const AmountCont = styled.div`
display: flex;
align-items: center;
font-weight: 700;
cursor: pointer;
`;

const Amount = styled.span`
width: 30px; 
height: 05vh;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;  
justify-content: center;
background-color: #ECF2FF;
margin: 10px;
`; 


const Button = styled.button`
height: 10vh;
border: 1px solid teal;
border-radius: 30px;
padding: 10px;
cursor: pointer;
color: black;
font-weight: 700;  
margin: 20px;
display: flex;
align-items: center;  
justify-content: space-between;
transition: all 0.5s ease;

&:hover {
  background-color: #e9f5f5;
  transform: scale(1.1);

}
`;

const ProductCard = () => {
  return (
   <Container>
        
        <Navbar/>
        <Banner/>

            <Wrapper>
                <ImageCont>
                    <Image src=""/> 
                </ImageCont>
                <InfoCont>
                    <Title>Apple</Title>
                    <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae optio aperiam voluptatem, dolor nam cum magnam fugiat iste animi incidunt ipsam quis dolorum, pariatur doloremque saepe aliquid, voluptate illo odit?</Desc>
                    <Price>Rs. 120 /-</Price>

                    <FilterCont>
                        <Filter>
                            <FilterTitle>
                                Quantity
                            </FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>100 gms</FilterSizeOption>
                                <FilterSizeOption>130 gms</FilterSizeOption>
                                <FilterSizeOption>150 gms</FilterSizeOption>
                                <FilterSizeOption>180 gms</FilterSizeOption>
                                <FilterSizeOption>200 gms</FilterSizeOption>
                                <FilterSizeOption>1 Box</FilterSizeOption>
                            </FilterSize>    
                        </Filter>
                    </FilterCont>
                    <AddCont>
                        
                        <AmountCont>
                            <RemoveCircleTwoToneIcon/> 
                            <Amount>1</Amount>
                            <AddCircleTwoToneIcon/>
                        </AmountCont>
                        
                        <Button>
                            ADD TO CART
                            <ShoppingCartTwoToneIcon/>
                        </Button>
                    </AddCont>
                </InfoCont>
            </Wrapper>
        <Newsletter/>
        <Footer/>

   </Container>
  )
}

export default ProductCard