import * as Styled from "./ProductGallery.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductGalleryProps } from "./ProductGallery.types";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
  return (
    <Styled.GalleryContainer>
      <Styled.StyledSlider {...settings}>
        {images.map((image, index) => (
          <Styled.SlideContainer key={index}>
            <Styled.ProductImage
              src={image}
              alt={`Product Image ${index + 1}`}
            />
          </Styled.SlideContainer>
        ))}
      </Styled.StyledSlider>
    </Styled.GalleryContainer>
  );
};

export default ProductGallery;
