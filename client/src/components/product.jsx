import styled from 'styled-components'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import ImageSearchTwoToneIcon from '@mui/icons-material/ImageSearchTwoTone';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  align-items: center; 
  justify-content: center;
  z-index: 3;
  border-radius:30px;
  display: flex; 
`;

const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 280px;
height: 350px;  
display: flex;
align-items: center;
justify-content: center; 
background-color: #f5fbfd;
border-radius:30px;
position: relative;

&:hover ${Info} {
  opacity: 1;
}
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius:50%;
  background-color: white;
  position: absolute;

`;
const Image = styled.div`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
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
    transform: scale(1.5);
     

  }
`;

const Product = ({item}) => {
 return (
  <Container>
      <Circle/>
      <Image src={item.image}/>
      <Info>
        <Icon>
          <ShoppingCartTwoToneIcon/>
        </Icon>
        <Icon>
          <ImageSearchTwoToneIcon/>
        </Icon>
        <Icon>
          <FavoriteTwoToneIcon/>
        </Icon>

      </Info>
  </Container>

  )
}

export default Product