import styled from 'styled-components'
import { AllProducts } from '../data'
import Product from './product'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  
`;

const Products = () => {
  return (
    <Container>
        {AllProducts.map(item=>(
          <Product item={item} key={item.image} />
        ))}

    </Container>
       
  )
}

export default Products