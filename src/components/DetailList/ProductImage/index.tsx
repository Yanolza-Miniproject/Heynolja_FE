import * as Styled from "./ProductImage.styles";
import { ProductImageProps } from "./ProductImage.types";

const ProductImage: React.FC<ProductImageProps> = ({ image }) => {
  return (
    <Styled.ImageContainer>
      <Styled.ProductImage src={image} alt="accommodation 이미지" />
    </Styled.ImageContainer>
  );
};

export default ProductImage;
