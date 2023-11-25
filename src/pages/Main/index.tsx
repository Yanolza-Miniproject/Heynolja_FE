import * as Styled from "./Main.styles";
import { useEffect, useState } from "react";
import { mainAccomList } from "../../mock/mainPageData";
import LikeIcon from "../../assets/svg/like-icon.svg";
import LikedIcon from "../../assets/svg/liked-icon.svg";
import { AccomData } from "./Main.types";
import HotelDefaultImg from "../../assets/image/hotel-default.jpg";
import Sidebar from "../../components/Common/Sidebar";

const Main = () => {
  const [randomAccoms, setRandomAccoms] = useState<AccomData[]>([]);
  const [myAreaAccoms, setMyAreaAccoms] = useState<AccomData[]>([]);
  const [topLikedAccoms, setTopLikedAccoms] = useState<AccomData[]>([]);
  const [parkingAccoms, setParkingAccoms] = useState<AccomData[]>([]);
  const [likedItems, setLikedItems] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    const accomData = [...mainAccomList].sort(() => Math.random() - 0.5);
    const myAreaAccoms = accomData.slice(0, 3);
    const topLikedAccoms = accomData
      .sort((a, b) => b.likes - a.likes)
      .slice(0, 3);
    const parkingAccoms = accomData.slice(0, 2);
    const randomAccoms = accomData.slice(0, 10);

    setMyAreaAccoms(myAreaAccoms);
    setTopLikedAccoms(topLikedAccoms);
    setParkingAccoms(parkingAccoms);
    setRandomAccoms(randomAccoms);
  }, []);

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
          {myAreaAccoms.map((item) => (
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
          {topLikedAccoms.map((item) => (
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
          {parkingAccoms.map((item) => (
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
          {randomAccoms.map((item) => (
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
