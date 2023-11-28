import BookingCalendar from "../../components/DetailList/BookingCalendar";
import CardList from "../../components/DetailList/CardList/index.tsx";
import ProductImage from "../../components/DetailList/ProductImage";
import ProductInfo from "../../components/DetailList/ProductInfo/index.tsx";
import ProductTitle from "../../components/DetailList/ProductTitle";
import RoomList from "../../components/DetailList/RoomList/index.tsx";
import { useGetAccommodationDetail } from "../../hooks/useDetailFetch.ts";
// import { accommodationDetail } from "../../mock/detailListPageData.ts";
import { useLocation } from "react-router-dom";
import * as Styled from "./DetailList.styles.ts";

const DetailList = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const accommodationId = queryParams.get("accommodation-id");
  // const { accommodationId } = useParams();

  const {
    data: accommodationDetail,
    // isLoading,
    // error,
  } = useGetAccommodationDetail(Number(accommodationId));

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;

  // if (!data) {
  //   return <div>객실 정보가 없습니다.</div>;
  // }
  // if (!accommodationDetail) {
  //   navigate("/404");
  //   return null;
  // }
  if (!accommodationDetail || !accommodationDetail.data) {
    // 데이터가 로드되지 않았거나 유효하지 않은 경우 처리
    return <div>Loading...</div>; // 또는 다른 적절한 UI 표시
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
  } = accommodationDetail.data;

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
