import * as Styled from "./Detail.styles.ts";
import ProductGallery from "../../components/Detail/ProductGallery";
import ProductDetails from "../../components/Detail/ProductDetails";
import QuantitySelector from "../../components/Detail/QuantitySelector";
import PriceDisplay from "../../components/Detail/PriceDisplay";
import ActionButtonGroup from "../../components/Detail/ActionButtonGroup";
import Calendar from "../../components/Detail/Calendar";
import StockStatusBanner from "../../components/Detail/StockStatusBaner";
import { roomDetail } from "../../mock/detailPageData.ts";

const Detail = () => {
  const { accommodation_name, room_name, price, stock, room_image_url } =
    roomDetail;
  return (
    <Styled.container>
      <Styled.Layout>
        <ProductGallery images={room_image_url} />
        <Styled.DetailsContainer>
          <Styled.HorizontalContainer>
            <ProductDetails
              roomName={room_name}
              name={accommodation_name}
              price={price}
            />
            <StockStatusBanner stock={stock} />
          </Styled.HorizontalContainer>
          <Calendar price={price} />
          <QuantitySelector
            initialQuantity={1}
            onQuantityChange={(newQuantity) => console.log(newQuantity)}
            price={price}
          />
          <PriceDisplay price={price} />
          <ActionButtonGroup
            onAddToCart={() => console.log("Add to Cart clicked")}
          />
        </Styled.DetailsContainer>
      </Styled.Layout>
    </Styled.container>
  );
};

export default Detail;
