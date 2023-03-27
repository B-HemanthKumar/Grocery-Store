import styled from 'styled-components'
import { AllProducts } from '../data'
import Product from './product'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    cursor: pointer; 
`;

const Title = styled.h1`
  margin: 20px 0px;
  margin-left: 85vh;
  margin-right: 85vh;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  `;

const Products = () => {
  return (
    <>
      <Title> Products : 
      </Title>
        
      <Container>
        
        {AllProducts.map(item=>(
          <Product item={item} key={item.image} />
        ))}
      </Container>
    </>   
  )
}

export default Products