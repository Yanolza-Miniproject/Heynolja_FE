import { CategoryProps } from "../../../pages/Category/Category.types";

import * as Styled from "./CategoryItem.styles";
import HeartSVGComponent from "./HeartIcon";

type CategoryItemProps = {
  data: CategoryProps;
};

const CategoryItem = ({ data }: CategoryItemProps) => {
  return (
    <Styled.CategoryItemContainer>
      <Styled.CategoryItemWrapper>
        <Styled.CategoryImage src={data.thumbnail_url} alt={data.name} />
        <Styled.CategoryTextWrapper>
          <Styled.CategoryName>{data.name}</Styled.CategoryName>
          <Styled.CategoryView>
            구매한 사람 {data.view_count}명
          </Styled.CategoryView>
          <Styled.CategoryDownWrapper>
            <Styled.CategoryPrice>￦{data.price}000원</Styled.CategoryPrice>
            <Styled.CategorySvgWrapper>
              {/* <Styled.CategorySvgImage src={Heart} alt="heart" /> */}
              <HeartSVGComponent />
              <Styled.CategorySvgText>{data.like_count}</Styled.CategorySvgText>
            </Styled.CategorySvgWrapper>
          </Styled.CategoryDownWrapper>
        </Styled.CategoryTextWrapper>
      </Styled.CategoryItemWrapper>
    </Styled.CategoryItemContainer>
  );
};

export default CategoryItem;
