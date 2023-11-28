import { useInView } from "framer-motion";
import HeartClick from "../HeartClick";
import * as Styled from "./CategoryItem.styles";

import { useRef } from "react";
import { random } from "lodash";
import { useNavigate } from "react-router-dom";
import { CategoryItemProps } from "./CategoryItem.types";

const CategoryItem = ({ data }: CategoryItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const router = useNavigate();

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();

    router(`/detail?accommodation-id=${data.id}`);
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
          data-testid="individual-item"
        />
        <Styled.CategoryTextWrapper>
          <Styled.CategoryName>{data.name}</Styled.CategoryName>
          <Styled.CategoryView>
            구매한 사람 {data.viewCount}명
          </Styled.CategoryView>
          <Styled.CategoryDownWrapper>
            <Styled.CategoryPrice>
              ￦{data.lowest_price}원 부터
            </Styled.CategoryPrice>
            <HeartClick
              likes={data.wishCount}
              likes_clicked={data.likes_available}
            />
          </Styled.CategoryDownWrapper>
        </Styled.CategoryTextWrapper>
      </Styled.CategoryItemWrapper>
    </Styled.CategoryItemContainer>
  );
};

export default CategoryItem;
