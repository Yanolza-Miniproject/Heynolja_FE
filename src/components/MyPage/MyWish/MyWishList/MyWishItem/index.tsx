import { useInView } from "framer-motion";
import * as Styled from "./MyWishItem.styles";
import Empty from "../../../../../assets/image/empty.png";

import { useRef } from "react";
import { random } from "lodash";
import { useNavigate } from "react-router-dom";
import HeartClick from "../../../../Category/HeartClick";
import { myWishItemProps } from "./MyWishList.types";

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
        <div>
          <Styled.CategoryImage
            src={data.thumbnailUrl}
            alt={data.name}
            onClick={handleClick}
            onError={handleError}
            data-testid="individual-item"
          />
        </div>
        <Styled.CategoryTextWrapper>
          <Styled.CategoryName>{data.name}</Styled.CategoryName>
          <Styled.CategoryTopWrapper>
            <Styled.CategoryDescription>
              {data.infoDetail}
            </Styled.CategoryDescription>
          </Styled.CategoryTopWrapper>
          <Styled.CategoryDownWrapper>
            <Styled.CategoryView>조회수 : {data.viewCount}</Styled.CategoryView>
            <HeartClick
              likes={data.wishCount}
              likesClicked={true}
              accommodationId={data.id}
            />
          </Styled.CategoryDownWrapper>
        </Styled.CategoryTextWrapper>
      </Styled.CategoryItemWrapper>
    </Styled.CategoryItemContainer>
  );
};

export default MyWishItem;
