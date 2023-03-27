import React from 'react'
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Container = styled.div`
 
`;

const Title = styled.h1`
margin: 20px;
display: flex;
align-item: center;
justify-content: center;
    
`;

const FilterCont = styled.div`
    display: flex;
    justify-content: space-between;
    
`;

const Filter = styled.div`
margin: 20px;
display: flex;  
align-items: center;
// justify-content: center;
`;

const FilterText = styled.div`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;


    
`;

const Select = styled.select`
margin-right: 20px;
padding: 10px;
 border-radius: 50px;
  padding: 05px;
  cursor: pointer; 
    
`;

const Option = styled.option`
cursor: pointer; 
`;
    


const ProductList = () => {
  return (
    <Container>
        
        <Navbar/>
        <Banner/>
        
        <Title>( PRODUCT CAT NAME )</Title>
        <FilterCont>
            <Filter>
                <FilterText>
                    Filter Products
                </FilterText>
                
                <Select>
                    <Option disabled selected>
                        Category
                    </Option>
                        
                    <Option>Fruits</Option>
                    <Option>Seeds</Option>
                    <Option>Hing</Option>
                    <Option>Ginger</Option>
                    <Option>Pepper</Option>
                    <Option>Ajwain</Option>
                </Select>

                <Select>
                    <Option disabled selected>
                        Quantity
                    </Option>
                        
                    <Option>100 gms</Option>
                    <Option>130 gms</Option>
                    <Option>150 gms</Option>
                    <Option>180 gms</Option>
                    <Option>200 gms</Option>
                    <Option>1 Box</Option>
                </Select>
            </Filter>
                
            <Filter>
                {/* <FilterText>
                    Sort Products
                </FilterText> */}

                <Select>
                    <Option  selected>
                        Newest
                    </Option>
                    
                    <Option>Price (ASC)</Option>
                    <Option>Price (DESC)</Option>
                </Select>
            </Filter>
        </FilterCont>
    
        <Products/>
        <Newsletter/>
        <Footer/>
    
    </Container>
  )
}

export default ProductList