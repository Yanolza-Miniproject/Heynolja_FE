import * as Styled from "./Main.styles";
import HotelDefaultImg from "../../assets/image/hotel-default.jpg";
import Sidebar from "../../components/Common/Sidebar";
import {
  // useFetchAccomByRegion,
  useFetchTopLikedAccom,
  useFetchAccomWithParking,
  useFetchAllAccommodations,
} from "../../hooks/useMainListFetch";
import { CategoryProps } from "../Category/Category.types";
import HeartClick from "../../components/Category/HeartClick";

const Main = () => {
  // const { data: regionAccomData } = useFetchAccomByRegion(0);
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
  } = useFetchAccomWithParking(1);
  const parkingAvailableAccomData = parkingAccomData?.slice(0, 3);
  const {
    data: randomAccomData,
    isLoading: isLoadingRandomAccom,
    error: errorRandomAccom,
  } = useFetchAllAccommodations();

  if (errorTopLikedAccom || errorParkingAccom || errorRandomAccom) {
    return <div>숙소 정보를 불러오는 데 실패하였습니다.</div>;
  }

  if (isLoadingTopLikedAccom || isLoadingParkingAccom || isLoadingRandomAccom) {
    return <div>숙소 정보를 불러오는 중입니다.</div>;
  }

  return (
    <>
      <Sidebar />
      <Styled.Container>
        <Styled.Banner>
          Hey 놀자!
          <br /> 지금 둘러보세요. 👀
        </Styled.Banner>

        <Styled.Title>📌 지금 내 주변에는 이런 숙소도 있어요.</Styled.Title>
        <Styled.MyAreaAccomList
          initial="hidden"
          animate="visible"
          variants={Styled.ContainerVariants}
        >
          {topThreeLikedAccomData &&
            topThreeLikedAccomData?.map((item: CategoryProps) => (
              <Styled.ItemContainer key={item.id}>
                <Styled.ItemLink to={`/accommodations/${item.id}`}>
                  <Styled.ItemPicture variants={Styled.ItemVariants}>
                    <img src={HotelDefaultImg} alt={item.name} />
                  </Styled.ItemPicture>
                </Styled.ItemLink>
                <Styled.ItemInfo>
                  <Styled.ItemInfoFirstColumn>
                    <h3 className="item-name">{item.name}</h3>
                    {/* <h3>{item.price}</h3> */}
                    <h3 className="item-price">~ ₩110,000 부터</h3>
                  </Styled.ItemInfoFirstColumn>
                  <Styled.ItemInfoSecondColumn>
                    <HeartClick
                      likes={item.like_count}
                      likes_clicked={item.likes_available}
                    />
                  </Styled.ItemInfoSecondColumn>
                </Styled.ItemInfo>
              </Styled.ItemContainer>
            ))}
        </Styled.MyAreaAccomList>

        <Styled.Title>🔥🔥 바로 여기! 요즘 제일 핫한 숙소</Styled.Title>
        <Styled.TopLikedAccomList
          initial="hidden"
          animate="visible"
          variants={Styled.ContainerVariants}
        >
          {topThreeLikedAccomData &&
            topThreeLikedAccomData?.map((item: CategoryProps) => (
              <Styled.ItemContainer key={item.id}>
                <Styled.ItemLink to={`/accommodations/${item.id}`}>
                  <Styled.ItemPicture variants={Styled.ItemVariants}>
                    <img src={HotelDefaultImg} alt={item.name} />
                  </Styled.ItemPicture>
                </Styled.ItemLink>
                <Styled.ItemInfo>
                  <Styled.ItemInfoFirstColumn>
                    <h3 className="item-name">{item.name}</h3>
                    {/* <h3>{item.price}</h3> */}
                    <h3 className="item-price">~ ₩110,000 부터</h3>
                  </Styled.ItemInfoFirstColumn>
                  <Styled.ItemInfoSecondColumn>
                    <HeartClick
                      likes={item.like_count}
                      likes_clicked={item.likes_available}
                    />
                  </Styled.ItemInfoSecondColumn>
                </Styled.ItemInfo>
              </Styled.ItemContainer>
            ))}
        </Styled.TopLikedAccomList>

        <Styled.Title>
          🚗 주차할 곳 찾기 힘드셨죠? 여기선 걱정 없어요!
        </Styled.Title>
        <Styled.ParkingAccomList
          initial="hidden"
          animate="visible"
          variants={Styled.ContainerVariants}
        >
          {parkingAvailableAccomData &&
            parkingAvailableAccomData?.map((item: CategoryProps) => (
              <Styled.ItemContainer key={item.id}>
                <Styled.ItemLink to={`/accommodations/${item.id}`}>
                  <Styled.ItemPicture variants={Styled.ItemVariants}>
                    <img src={HotelDefaultImg} alt={item.name} />
                  </Styled.ItemPicture>
                </Styled.ItemLink>
                <Styled.ItemInfo>
                  <Styled.ItemInfoFirstColumn>
                    <h3 className="item-name">{item.name}</h3>
                    {/* <h3>{item.price}</h3> */}
                    <h3 className="item-price">~ ₩110,000 부터</h3>
                  </Styled.ItemInfoFirstColumn>
                  <Styled.ItemInfoSecondColumn>
                    <HeartClick
                      likes={item.like_count}
                      likes_clicked={item.likes_available}
                    />
                  </Styled.ItemInfoSecondColumn>
                </Styled.ItemInfo>
              </Styled.ItemContainer>
            ))}
        </Styled.ParkingAccomList>

        <Styled.Title>더 많은 숙소를 둘러보실 수 있어요.</Styled.Title>
        <Styled.NormalAccomList
          initial="hidden"
          animate="visible"
          variants={Styled.ContainerVariants}
        >
          {randomAccomData &&
            randomAccomData.map((item: CategoryProps) => (
              <Styled.ItemContainer key={item.id}>
                <Styled.ItemLink to={`/accommodations/${item.id}`}>
                  <Styled.ItemPicture variants={Styled.ItemVariants}>
                    <img src={HotelDefaultImg} alt={item.name} />
                  </Styled.ItemPicture>
                </Styled.ItemLink>
                <Styled.ItemInfo>
                  <Styled.ItemInfoFirstColumn>
                    <h3 className="item-name">{item.name}</h3>
                    {/* <h3>{item.price}</h3> */}
                    <h3 className="item-price">~ ₩110,000 부터</h3>
                  </Styled.ItemInfoFirstColumn>
                  <Styled.ItemInfoSecondColumn>
                    <HeartClick
                      likes={item.like_count}
                      likes_clicked={item.likes_available}
                    />
                  </Styled.ItemInfoSecondColumn>
                </Styled.ItemInfo>
              </Styled.ItemContainer>
            ))}
        </Styled.NormalAccomList>
      </Styled.Container>
    </>
  );
};

export default Main;
