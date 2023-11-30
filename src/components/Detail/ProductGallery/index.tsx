import * as Styled from "./ProductGallery.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductGalleryProps } from "./ProductGallery.types";
import defaultImage from "../../../assets/image/no-image.png";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
  const displayImages =
    images.length > 0 ? images : [{ id: 0, imageUrl: defaultImage }];

  return (
    <Styled.GalleryContainer>
      <Styled.StyledSlider {...settings}>
        {displayImages.map(({ id, imageUrl }) => (
          <Styled.SlideContainer key={id}>
            <Styled.ProductImage
              src={imageUrl}
              alt={`Product Image ${id}`}
              isDefault={imageUrl === defaultImage}
            />
          </Styled.SlideContainer>
        ))}
      </Styled.StyledSlider>
    </Styled.GalleryContainer>
  );
};

export default ProductGallery;
