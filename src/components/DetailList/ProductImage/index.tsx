import * as Styled from "./ProductImage.styles";
import { ProductImageProps } from "./ProductImage.types";
import Empty from "../../../assets/image/empty_large.png";

const ProductImage: React.FC<ProductImageProps> = ({ image }) => {
  // img empty set
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = Empty;
  };
  return (
    <Styled.ImageContainer>
      <Styled.ProductImage
        src={image}
        alt="accommodation 이미지"
        onError={handleError}
      />
    </Styled.ImageContainer>
  );
};

export default ProductImage;
