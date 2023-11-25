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
import { useParams } from "react-router-dom";
import { useGetRoomDetail } from "../../hooks/useDetailFetch.ts";

const Detail = () => {
  const { roomId } = useParams(); // URL에서 room_id 추출
  const { data, isLoading, error } = useGetRoomDetail(parseInt(roomId, 10));
  const { accommodation_name, room_name, price, room_image_url } = roomDetail; // 이부분 나중에 삭제
  const [selectedGuests, setSelectedGuests] = useState(1);
  const [selectedCheckInDate, setSelectedCheckInDate] = useState<Date | null>(
    null,
  );
  const [selectedCheckOutDate, setSelectedCheckOutDate] = useState<Date | null>(
    null,
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>객실 정보가 없습니다.</div>;
  }
  console.log("roomId", roomId);
  console.log("데이터:", data);
  // const roomDetails = data.data;

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
        {/* <ProductGallery images={roomDetails.room_image_url} /> */}
        <Styled.DetailsContainer>
          <Styled.HorizontalContainer>
            <ProductDetails
              roomName={room_name}
              // roomName={roomDetails.name}
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
