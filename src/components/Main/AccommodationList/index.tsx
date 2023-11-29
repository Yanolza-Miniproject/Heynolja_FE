import * as Styled from "./AccommodationList.styles";
import HeartClick from "../../Category/HeartClick";
import {
  AccommodationData,
  AccommodationListProps,
} from "./AccommodationList.types";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { random } from "lodash";
import formatNumber from "../../../utils/formatNumber";

export const AccommodationList = ({
  accommodations,
  title,
  isRandomAccomData,
}: AccommodationListProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <Styled.Title>{title}</Styled.Title>
      <Styled.AccomList
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{
          duration: random(0.4, 1.2),
          delay: 0.1,
          ease: "easeInOut",
        }}
        ref={ref}
        isRandomAccomData={isRandomAccomData}
      >
        {accommodations?.map((item: AccommodationData) => (
          <Styled.ItemContainer key={item.id}>
            <Styled.ItemLink to={`/accommodations/${item.id}`}>
              <Styled.ItemPicture>
                <img src={`${item.thumbnailUrl}`} alt={item.name} />
              </Styled.ItemPicture>
              <Styled.ItemInfoFirstColumn>
                <h3 className="item-name">{item.name}</h3>
                <h3 className="item-price">
                  ~{item.lowest_price && formatNumber(item.lowest_price)}원 부터
                </h3>
              </Styled.ItemInfoFirstColumn>
            </Styled.ItemLink>
            <Styled.ItemInfo>
              <Styled.ItemInfoSecondColumn>
                <HeartClick
                  likes={item.wishCount}
                  likes_clicked={item.isWish}
                />
              </Styled.ItemInfoSecondColumn>
            </Styled.ItemInfo>
          </Styled.ItemContainer>
        ))}
      </Styled.AccomList>
    </>
  );
};
