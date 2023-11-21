import * as Styled from "./Main.styles";
import { mainAccomList } from "../../mock/mainPageData";
import LikeIcon from "../../assets/svg/like-icon.svg";

const Main = () => {
  return (
    <>
      <Styled.Container>
        <Styled.Banner>
          거기어때?
          <br /> 지금 둘러보세요. 👀
        </Styled.Banner>
        <Styled.Title>📌 지금 내 주변에는 이런 숙소도 있어요.</Styled.Title>
        <Styled.MyAreaAccomList>
          {mainAccomList.slice(0, 3).map((item) => (
            <Styled.ItemLink key={item.id} to={`/accommodations/${item.id}`}>
              <Styled.ItemPicture>
                <div></div>
                {/* <img
                  src={item.picture || "default-image-url"}
                  alt={item.name}
                /> */}
              </Styled.ItemPicture>
              <Styled.ItemInfo>
                <h3>{item.name}</h3>
                <img src={LikeIcon} alt="like" />
                {/* <h4>{item.likes_available}</h4> */}
              </Styled.ItemInfo>
            </Styled.ItemLink>
          ))}
        </Styled.MyAreaAccomList>

        <Styled.Title>🔥🔥 바로 여기! 요즘 제일 핫한 숙소</Styled.Title>
        <Styled.TopLikedAccomList>
          {mainAccomList.slice(0, 3).map((item) => (
            <Styled.ItemLink key={item.id} to={`/accommodations/${item.id}`}>
              <Styled.ItemPicture>
                <div></div>
                {/* <img
                  src={item.picture || "default-image-url"}
                  alt={item.name}
                /> */}
              </Styled.ItemPicture>
              <Styled.ItemInfo>
                <h3>{item.name}</h3>
                <img src={LikeIcon} alt="like" />
                {/* <h4>{item.likes_available}</h4> */}
              </Styled.ItemInfo>
            </Styled.ItemLink>
          ))}
        </Styled.TopLikedAccomList>

        <Styled.Title>한번 둘러볼까요?</Styled.Title>
        <Styled.NormalAccomList>
          {mainAccomList.slice(0, 10).map((item) => (
            <Styled.ItemLink key={item.id} to={`/accommodations/${item.id}`}>
              <Styled.ItemPicture>
                <div></div>
                {/* <img
                  src={item.picture || "default-image-url"}
                  alt={item.name}
                /> */}
              </Styled.ItemPicture>
              <Styled.ItemInfo>
                <h3>{item.name}</h3>
                <img src={LikeIcon} alt="like" />
                {/* <h4>{item.likes_available}</h4> */}
              </Styled.ItemInfo>
            </Styled.ItemLink>
          ))}
        </Styled.NormalAccomList>
      </Styled.Container>
    </>
  );
};

export default Main;
