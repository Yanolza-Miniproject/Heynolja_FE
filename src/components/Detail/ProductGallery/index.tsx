import * as Styled from "./ProductGallery.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductGalleryProps } from "./ProductGallery.types";
import ProductImage from "../ProductImage";
import Empty from "../../../assets/image/empty_large.png";

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
        {images.length > 0 ? (
          images.map(({ id, imageUrl }) => (
            <Styled.SlideContainer key={id}>
              <ProductImage src={imageUrl} alt={`Product Image ${id}`} />
            </Styled.SlideContainer>
          ))
        ) : (
          <Styled.SlideContainer>
            <ProductImage src={Empty} alt="이미지 없음" />
          </Styled.SlideContainer>
        )}
      </Styled.StyledSlider>
    </Styled.GalleryContainer>
  );
};

export default ProductGallery;
