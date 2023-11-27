import * as Styled from "./Main.styles";
import { useState } from "react";
import LikeIcon from "../../assets/svg/like-icon.svg";
import LikedIcon from "../../assets/svg/liked-icon.svg";
import HotelDefaultImg from "../../assets/image/hotel-default.jpg";
import Sidebar from "../../components/Common/Sidebar";
import {
  useFetchAccomByRegion,
  useFetchTopLikedAccom,
  useFetchAccomWithParking,
  useFetchAllAccommodations,
} from "../../hooks/useMainListFetch";
import { CategoryProps } from "../Category/Category.types";

const Main = () => {
  const { data: regionAccomData } = useFetchAccomByRegion(0);
  const { data: topLikedAccomData } = useFetchTopLikedAccom();
  const topThreeLikedAccomData = topLikedAccomData
    ? topLikedAccomData.slice(0, 3)
    : [];
  const { data: parkingAccomData } = useFetchAccomWithParking(1);
  const parkingAvailableAccomData = parkingAccomData?.slice(0, 2);
  const { data: randomAccomData } = useFetchAllAccommodations();

  const [likedItems, setLikedItems] = useState<{ [key: number]: boolean }>({});

  const toLike = (id: number) => {
    setLikedItems((prevLikedItems) => ({
      ...prevLikedItems,
      [id]: !prevLikedItems[id],
    }));
  };

  return (
    <>
      <Sidebar />
      <Styled.Container>
        <Styled.Banner>
          거기어때?
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
                  <h3>{item.name}</h3>
                  {likedItems[item.id] ? (
                    <img
                      src={LikedIcon}
                      alt="liked"
                      onClick={() => toLike(item.id)}
                    />
                  ) : (
                    <img
                      src={LikeIcon}
                      alt="like"
                      onClick={() => toLike(item.id)}
                    />
                  )}
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
                  <h3>{item.name}</h3>
                  {likedItems[item.id] ? (
                    <img
                      src={LikedIcon}
                      alt="liked"
                      onClick={() => toLike(item.id)}
                    />
                  ) : (
                    <img
                      src={LikeIcon}
                      alt="like"
                      onClick={() => toLike(item.id)}
                    />
                  )}
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
                  <h3>{item.name}</h3>
                  {likedItems[item.id] ? (
                    <img
                      src={LikedIcon}
                      alt="liked"
                      onClick={() => toLike(item.id)}
                    />
                  ) : (
                    <img
                      src={LikeIcon}
                      alt="like"
                      onClick={() => toLike(item.id)}
                    />
                  )}
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
                  <h3>{item.name}</h3>
                  {likedItems[item.id] ? (
                    <img
                      src={LikedIcon}
                      alt="liked"
                      onClick={() => toLike(item.id)}
                    />
                  ) : (
                    <img
                      src={LikeIcon}
                      alt="like"
                      onClick={() => toLike(item.id)}
                    />
                  )}
                </Styled.ItemInfo>
              </Styled.ItemContainer>
            ))}
        </Styled.NormalAccomList>
      </Styled.Container>
    </>
  );
};

export default Main;
