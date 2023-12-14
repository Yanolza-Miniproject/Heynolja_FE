import Empty from "../../../assets/image/empty_large.png";
import { StyledImage } from "./ProductImage.styles";
import { ImageProps } from "./ProductImage.types";

const ProductImage: React.FC<ImageProps> = ({ src, alt, ...props }) => {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = Empty;
  };

  return <StyledImage src={src} alt={alt} onError={handleError} {...props} />;
};

export default ProductImage;
