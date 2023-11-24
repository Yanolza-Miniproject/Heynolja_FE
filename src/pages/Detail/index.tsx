import * as Styled from "./Detail.styles.ts";
import ProductGallery from "../../components/Detail/ProductGallery";
import ProductDetails from "../../components/Detail/ProductDetails";
import QuantitySelector from "../../components/Detail/QuantitySelector";
import PriceDisplay from "../../components/Detail/PriceDisplay";
import ActionButtonGroup from "../../components/Detail/ActionButtonGroup";
import Calendar from "../../components/Detail/Calendar";
import StockStatusBanner from "../../components/Detail/StockStatusBaner";
import { roomDetail } from "../../mock/detailPageData.ts";
import { useState } from "react";

const Detail = () => {
  const { accommodation_name, room_name, price, room_image_url } = roomDetail;
  const [selectedGuests, setSelectedGuests] = useState(1);
  const [selectedCheckInDate, setSelectedCheckInDate] = useState<Date | null>(
    null,
  );
  const [selectedCheckOutDate, setSelectedCheckOutDate] = useState<Date | null>(
    null,
  );

  // Calendar 컴포넌트에서 선택한 날짜가 변경될 때 호출되는 콜백 함수
  const handleDateChange = (
    checkInDate: Date | null,
    checkOutDate: Date | null,
  ) => {
    setSelectedCheckInDate(checkInDate);
    setSelectedCheckOutDate(checkOutDate);
  };

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
            <StockStatusBanner />
          </Styled.HorizontalContainer>
          <Calendar price={price} onDateChange={handleDateChange} />
          <QuantitySelector
            initialQuantity={selectedGuests}
            onQuantityChange={(newQuantity) => setSelectedGuests(newQuantity)}
            price={price}
          />
          <PriceDisplay pricePerNight={price} />
          <ActionButtonGroup
            checkInAt={selectedCheckInDate}
            checkOutAt={selectedCheckOutDate}
            numberGuests={selectedGuests}
            roomDetail={roomDetail}
            onAddToCart={() => console.log("Add to Cart clicked")}
          />
        </Styled.DetailsContainer>
      </Styled.Layout>
    </Styled.container>
  );
};

export default Detail;
