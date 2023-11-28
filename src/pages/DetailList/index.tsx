import { useParams } from "react-router-dom";
import BookingCalendar from "../../components/DetailList/BookingCalendar";
import CardList from "../../components/DetailList/CardList/index.tsx";
import ProductImage from "../../components/DetailList/ProductImage";
import ProductInfo from "../../components/DetailList/ProductInfo/index.tsx";
import ProductTitle from "../../components/DetailList/ProductTitle";
import RoomList from "../../components/DetailList/RoomList/index.tsx";
import { useGetAccommodationDetail } from "../../hooks/useDetailFetch.ts";
import { accommodationDetail } from "../../mock/detailListPageData.ts";
import * as Styled from "./DetailList.styles.ts";

const DetailList = () => {
  const { accommodationId } = useParams();
  const { data, isLoading, error } = useGetAccommodationDetail(
    Number(accommodationId),
  );
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) {
    return <div>객실 정보가 없습니다.</div>;
  }
  const {
    thumbnailUrl,
    type,
    name,
    address,
    infoDetail,
    phoneNumber,
    homepage,
    checkIn,
    checkOut,
    categoryParking,
    categoryCooking,
    categoryPickup,
  } = accommodationDetail;

  return (
    <Styled.container>
      <Styled.Layout>
        <ProductImage image={thumbnailUrl} />
        <Styled.DetailsContainer>
          {/* <Styled.HorizontalContainer> */}
          <ProductTitle type={type} name={name} />
          {/* <StockStatusBanner /> */}
          {/* </Styled.HorizontalContainer> */}
          <ProductInfo
            address={address}
            infoDetail={infoDetail}
            phoneNumber={phoneNumber}
            homepage={homepage}
            checkIn={checkIn}
            checkOut={checkOut}
          />
        </Styled.DetailsContainer>
      </Styled.Layout>
      <CardList
        parking={categoryParking}
        cooking={categoryCooking}
        pickup={categoryPickup}
      />
      <BookingCalendar />
      <RoomList />
    </Styled.container>
  );
};

export default DetailList;
