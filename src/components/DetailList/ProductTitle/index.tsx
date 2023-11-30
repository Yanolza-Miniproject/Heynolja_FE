import * as Styled from "./ProductTitle.styles";
import { ProductTitleProps } from "./ProductTitle.types";

const typeTexts: { [key: number]: string } = {
  0: "호텔",
  1: "콘도",
  2: "호스텔",
  3: "펜션",
  4: "모텔",
  5: "민박",
  6: "게스트하우스",
  7: "홈스테이",
  8: "레지던스",
  9: "한옥",
};

const ProductTitle: React.FC<ProductTitleProps> = ({ type, name }) => (
  <Styled.DetailsContainer>
    <Styled.ProductType>{typeTexts[type]}</Styled.ProductType>
    <Styled.ProductName>{name}</Styled.ProductName>
  </Styled.DetailsContainer>
);

export default ProductTitle;
