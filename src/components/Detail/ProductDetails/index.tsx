import * as Styled from "./ProductDetail.styles";
import { ProductDetailsProps } from "./ProductDetail.types";

const ProductDetails: React.FC<ProductDetailsProps> = ({ roomName, name }) => (
  <Styled.DetailsContainer>
    <Styled.ProductName>{name}</Styled.ProductName>
    <Styled.RoomName>{roomName}</Styled.RoomName>

    {/* <Styled.ProductPrice>{price}</Styled.ProductPrice> */}
  </Styled.DetailsContainer>
);

export default ProductDetails;
