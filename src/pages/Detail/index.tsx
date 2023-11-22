import * as Styled from "./Detail.styles.ts";
import ProductGallery from "../../components/Detail/ProductGallery";
import ProductDetails from "../../components/Detail/ProductDetails";
import QuantitySelector from "../../components/Detail/QuantitySelector";
// import PriceDisplay from "../../components/Detail/PriceDisplay";
// import ActionButtonGroup from "../../components/Detail/ActionButtonGroup";
// import Calendar from "../../components/Detail/Calendar/index.tsx";
// import StockStatusBanner from "../../components/Detail/StockStatusBanner/index.tsx";
// 상품 상세 정보와 이미지를 가정한 데이터입니다.
const productData = {
  // images: [
  //   "https://github.com/Yanolza-Miniproject/frontend/assets/92326949/fd904255-0d68-46df-a091-18d6efc6427f",
  // ],
  images: [
    "https://github.com/Yanolza-Miniproject/frontend/assets/92326949/4d1ffd05-195e-4bc3-aafe-67800ccfe83c",
    "https://github.com/Yanolza-Miniproject/frontend/assets/92326949/fd904255-0d68-46df-a091-18d6efc6427f",
  ],
  name: "그랜드 하얏트 제주",
  roomName: "디럭스룸",
  price: "239,000원",
  quantity: 1,
};

const Detail = () => {
  return (
    <Styled.container>
      <Styled.Layout>
        <ProductGallery images={productData.images} />
        <Styled.DetailsContainer>
          <Styled.HorizontalContainer>
            <ProductDetails
              roomName={productData.roomName}
              name={productData.name}
              price={productData.price}
            />
          </Styled.HorizontalContainer>
          <QuantitySelector
            initialQuantity={productData.quantity}
            onQuantityChange={(newQuantity) => console.log(newQuantity)}
            price={productData.price}
          />
        </Styled.DetailsContainer>
      </Styled.Layout>
    </Styled.container>
  );
};

export default Detail;
