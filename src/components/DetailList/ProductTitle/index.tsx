import * as Styled from "./ProductTitle.styles";
import { ProductTitleProps } from "./ProductTitle.types";

const ProductTitle: React.FC<ProductTitleProps> = ({ type, name }) => (
  <Styled.DetailsContainer>
    <Styled.ProductType>{type}</Styled.ProductType>
    <Styled.ProductName>{name}</Styled.ProductName>
  </Styled.DetailsContainer>
);

export default ProductTitle;
