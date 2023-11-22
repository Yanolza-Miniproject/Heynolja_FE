import * as Styled from "./ProductDetail.styles";
import { ProductDetailsProps } from "./ProductDetail.types";
// import { useRecoilValue } from "recoil";
// import { roomDetailState } from "../../../store/roomDetailAtom";

const ProductDetails: React.FC<ProductDetailsProps> = ({ roomName, name }) => (
  <Styled.DetailsContainer>
    <Styled.ProductName>{name}</Styled.ProductName>
    <Styled.RoomName>{roomName}</Styled.RoomName>
  </Styled.DetailsContainer>
);

export default ProductDetails;
