import { useInView } from "framer-motion";
import * as Styled from "./MyWishItem.styles";
import Empty from "../../../assets/image/empty.png";

import * as _ from "lodash";
import { useRef } from "react";
import { random } from "lodash";
import { useNavigate } from "react-router-dom";
import HeartClick from "../../../../Category/HeartClick";
import { myWishProps } from "../../../../../pages/Category/Category.types";

type myWishItemProps = {
  data: myWishProps;
};

const MyWishItem = ({ data }: myWishItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const router = useNavigate();

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();

    router(`/detailList?accommodation-id=${data.id}`);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = Empty;
  };

  return (
    <Styled.CategoryItemContainer ref={ref}>
      <Styled.CategoryItemWrapper
        id="itemTest"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{
          duration: random(0.7, 1.7),
          delay: 0.2,
          ease: "easeInOut",
        }}
      >
        <Styled.CategoryImage
          src={data.thumbnailUrl}
          alt={data.name}
          onClick={handleClick}
          onError={handleError}
          data-testid="individual-item"
        />
        <Styled.CategoryTextWrapper>
          <Styled.CategoryName>{data.name}</Styled.CategoryName>
          <Styled.CategoryTopWrapper>
            <Styled.CategoryDescription>
              {_.truncate(data.infoDetail, {
                length: 40,
              })}
            </Styled.CategoryDescription>
            <Styled.CategoryView>조회수 : {data.viewCount}</Styled.CategoryView>
          </Styled.CategoryTopWrapper>
          <Styled.CategoryDownWrapper>
            <HeartClick
              likes={data.wishCount}
              likes_clicked={true}
              accommodationId={data.id}
            />
          </Styled.CategoryDownWrapper>
        </Styled.CategoryTextWrapper>
      </Styled.CategoryItemWrapper>
    </Styled.CategoryItemContainer>
  );
};

export default MyWishItem;
