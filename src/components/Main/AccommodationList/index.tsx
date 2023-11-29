import { CategoryProps } from "../../../pages/Category/Category.types";
import * as Styled from "./AccommodationList.styles";
import HeartClick from "../../Category/HeartClick";
import { AccommodationListProps } from "./AccommodationList.types";

export const AccommodationList = ({
  accommodations,
  title,
}: AccommodationListProps) => {
  return (
    <>
      <Styled.Title>{title}</Styled.Title>
      <Styled.AccomList
        initial="hidden"
        animate="visible"
        variants={Styled.ContainerVariants}
      >
        {accommodations?.map((item: CategoryProps) => (
          <Styled.ItemContainer key={item.id}>
            <Styled.ItemLink to={`/accommodations/${item.id}`}>
              <Styled.ItemPicture variants={Styled.ItemVariants}>
                <img src={item.thumbnail_url} alt={item.name} />
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
      </Styled.AccomList>
    </>
  );
};
