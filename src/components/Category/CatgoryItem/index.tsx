import { useInView } from "framer-motion";
import { CategoryProps } from "../../../pages/Category/Category.types";
import HeartClick from "../HeartClick";
import * as Styled from "./CategoryItem.styles";

import { useRef } from "react";
import { random } from "lodash";

type CategoryItemProps = {
  data: CategoryProps;
};

const CategoryItem = ({ data }: CategoryItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
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
        <Styled.CategoryImage src={data.thumbnail_url} alt={data.name} />
        <Styled.CategoryTextWrapper>
          <Styled.CategoryName>{data.name}</Styled.CategoryName>
          <Styled.CategoryView>
            구매한 사람 {data.view_count}명
          </Styled.CategoryView>
          <Styled.CategoryDownWrapper>
            <Styled.CategoryPrice>￦{data.price}000원</Styled.CategoryPrice>
            <HeartClick
              likes={data.like_count}
              likes_clicked={data.likes_available}
            />
          </Styled.CategoryDownWrapper>
        </Styled.CategoryTextWrapper>
      </Styled.CategoryItemWrapper>
    </Styled.CategoryItemContainer>
  );
};

export default CategoryItem;
