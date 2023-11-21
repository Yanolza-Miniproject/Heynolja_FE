import { CategoryProps } from "../../../pages/Category/Category.types";
import HeartClick from "../HeartClick";

import * as Styled from "./CategoryItem.styles";

type CategoryItemProps = {
  data: CategoryProps;
};

const CategoryItem = ({ data }: CategoryItemProps) => {
  return (
    <Styled.CategoryItemContainer>
      <Styled.CategoryItemWrapper>
        <Styled.CategoryImage src={data.picture} alt={data.name} />
        <Styled.CategoryTextWrapper>
          <Styled.CategoryName>{data.name}</Styled.CategoryName>
          <Styled.CategoryView>구매한 사람 {data.view}명</Styled.CategoryView>
          <Styled.CategoryDownWrapper>
            <Styled.CategoryPrice>￦{data.price}000원</Styled.CategoryPrice>
            <HeartClick
              likes={data.likes}
              likes_clicked={data.likes_available}
            />
          </Styled.CategoryDownWrapper>
        </Styled.CategoryTextWrapper>
      </Styled.CategoryItemWrapper>
    </Styled.CategoryItemContainer>
  );
};

export default CategoryItem;
