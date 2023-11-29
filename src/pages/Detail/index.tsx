import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ActionButtonGroup from "../../components/Detail/ActionButtonGroup";
import Calendar from "../../components/Detail/Calendar";
import PriceDisplay from "../../components/Detail/PriceDisplay";
import ProductDetails from "../../components/Detail/ProductDetails";
// import ProductGallery from "../../components/Detail/ProductGallery";
import QuantitySelector from "../../components/Detail/QuantitySelector";
import StockStatusBanner from "../../components/Detail/StockStatusBaner";
import { useGetRoomDetail } from "../../hooks/useDetailFetch.ts";
import { roomDetail } from "../../mock/detailPageData.ts";
import * as Styled from "./Detail.styles.ts";
import { RoomDetails } from "./Detail.types.ts";

const Detail = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const roomId = queryParams.get("room-id");
  const roomIdNumber = parseInt(roomId || "0", 10);

  const { data, isLoading, error } = useGetRoomDetail(roomIdNumber);

  const [roomDetails, setRoomDetails] = useState<RoomDetails | null>(null);
  const [selectedGuests, setSelectedGuests] = useState(1);
  const [selectedCheckInDate, setSelectedCheckInDate] = useState<Date | null>(
    null,
  );
  const [selectedCheckOutDate, setSelectedCheckOutDate] = useState<Date | null>(
    null,
  );

  useEffect(() => {
    if (data && data.data) {
      setRoomDetails(data.data);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log("roomId", roomId);
  console.log("데이터:", data.data);

  if (error || !roomDetails) {
    return <div>Error: {error ? error.message : "객실 정보가 없습니다."}</div>;
  }

  const handleDateChange = (
    checkInDate: Date | null,
    checkOutDate: Date | null,
  ) => {
    setSelectedCheckInDate(checkInDate);
    setSelectedCheckOutDate(checkOutDate);
  };
  console.log(roomDetails);
  return (
    <Styled.container>
      <Styled.Layout>
        {/* <ProductGallery images={roomDetails.data.room_image_url} /> 데이터에 아직 이미지 없음 */}
        <Styled.DetailsContainer>
          <Styled.HorizontalContainer>
            <ProductDetails
              roomName={roomDetails.data.name}
              name={roomDetails.data.accommodationName}
              price={roomDetails.data.price}
            />
            <StockStatusBanner inventory={roomDetails.data.inventory} />
          </Styled.HorizontalContainer>
          <Calendar
            price={roomDetails.data.price}
            onDateChange={handleDateChange}
          />
          <QuantitySelector
            initialQuantity={selectedGuests}
            onQuantityChange={(newQuantity) => setSelectedGuests(newQuantity)}
            price={roomDetails.data.price}
          />
          <PriceDisplay pricePerNight={roomDetails.data.price} />
          <ActionButtonGroup
            checkInAt={
              selectedCheckInDate
                ? new Date(selectedCheckInDate).toISOString()
                : ""
            }
            checkOutAt={
              selectedCheckOutDate
                ? new Date(selectedCheckOutDate).toISOString()
                : ""
            }
            numberGuests={selectedGuests}
            roomDetail={roomDetail}
            onAddToCart={() => console.log("Add to Cart clicked")}
            handleBuyNow={() => console.log("Buy Now clicked")}
          />
        </Styled.DetailsContainer>
      </Styled.Layout>
    </Styled.container>
  );
};

export default Detail;
