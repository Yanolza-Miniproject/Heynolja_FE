import * as Styled from "./Main.styles";
import Sidebar from "../../components/Common/Sidebar";
import {
  useFetchAccomByRegion,
  useFetchTopLikedAccom,
  useFetchAccomWithParking,
  useFetchAllAccommodations,
} from "../../hooks/useMainListFetch";
import { AccommodationList } from "../../components/Main/AccommodationList";
import { useRef } from "react";
import useGeolocation from "../../hooks/useGeolocation";
import { regions } from "../../store/searchSelectorData";

const Main = () => {
  const { cityCode } = useGeolocation();
  const cityName = regions.find((region) => region.value === cityCode)?.name;

  const ref = useRef<HTMLDivElement>(null);

  const {
    data: regionAccomData,
    isLoading: isLoadingRegionAccom,
    error: errorRegionAccom,
  } = useFetchAccomByRegion(cityCode);

  const myRegionAccomData = regionAccomData ? regionAccomData.slice(0, 3) : [];

  const {
    data: topLikedAccomData,
    isLoading: isLoadingTopLikedAccom,
    error: errorTopLikedAccom,
  } = useFetchTopLikedAccom();

  const topThreeLikedAccomData = topLikedAccomData
    ? topLikedAccomData.slice(0, 3)
    : [];

  const {
    data: parkingAccomData,
    isLoading: isLoadingParkingAccom,
    error: errorParkingAccom,
  } = useFetchAccomWithParking();

  const parkingAvailableAccomData = parkingAccomData?.slice(0, 3);

  const {
    data: randomAccomData,
    isLoading: isLoadingRandomAccom,
    error: errorRandomAccom,
  } = useFetchAllAccommodations();

  if (
    errorRegionAccom ||
    errorTopLikedAccom ||
    errorParkingAccom ||
    errorRandomAccom
  ) {
    return <div>숙소 정보를 불러오는 데 실패하였습니다.</div>;
  }

  if (
    isLoadingRegionAccom ||
    isLoadingTopLikedAccom ||
    isLoadingParkingAccom ||
    isLoadingRandomAccom
  ) {
    return <div>숙소 정보를 불러오는 중입니다.</div>;
  }

  return (
    <>
      <Sidebar />
      <Styled.Container ref={ref}>
        <Styled.Banner>
          Hey 놀자!
          <br /> 지금 둘러보세요. 👀
        </Styled.Banner>

        <AccommodationList
          accommodations={myRegionAccomData}
          title={
            <span>
              📌 현재 나의 지역 <Styled.CityName>{cityName}</Styled.CityName>
              에는 이런 숙소도 있어요.
            </span>
          }
        />
        <AccommodationList
          accommodations={topThreeLikedAccomData}
          title="🔥🔥 바로 여기! 요즘 제일 핫한 숙소"
        />
        <AccommodationList
          accommodations={parkingAvailableAccomData}
          title="🚗 주차할 곳 찾기 힘드셨죠? 여기선 걱정 없어요!"
        />
        <AccommodationList
          accommodations={randomAccomData}
          title="더 많은 숙소를 둘러보실 수 있어요."
          isRandomAccomData={true}
        />
      </Styled.Container>
    </>
  );
};

export default Main;
