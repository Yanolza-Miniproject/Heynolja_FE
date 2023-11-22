import * as Styled from "./ProductDetail.styles";

const ProductDetails = ({ roomName, name }) => (
  <Styled.DetailsContainer>
    <Styled.ProductName>{name}</Styled.ProductName>
    <Styled.RoomName>{roomName}</Styled.RoomName>

    {/* <Styled.ProductPrice>{price}</Styled.ProductPrice> */}
  </Styled.DetailsContainer>
);

export default ProductDetails;
