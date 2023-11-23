import { memo, useState } from "react";
import * as Styled from "./CategoryFilterPopUp.styles";
import { categoryQueryAtom } from "../../../../store/categoryQueryAtom";
import { CategoryFilterPopUpProps } from "./CategoryFilterPopUp.types";
import { useRecoilState } from "recoil";

type CategoryQueryType = {
  region_name: string;
  region: number;
  type_name: string;
  type: number;
};

const getInitialState = (
  categoryQuery: CategoryQueryType,
  buttonText: string,
) => {
  if (buttonText === "원하는 숙소를 찾아보세요") {
    const initialState = categoryQuery.type_name;
    return initialState;
  } else {
    const initialState = categoryQuery.region_name;
    return initialState;
  }
};

const CategoryFilterPopUp = memo(
  ({ buttonText, listData }: CategoryFilterPopUpProps) => {
    const [categoryQuery, setCategoryQuery] = useRecoilState(categoryQueryAtom);

    const [selected, setSelected] = useState(
      getInitialState(categoryQuery, buttonText),
    );
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
      setIsOpen((prev) => !prev);
    };

    const categoryClick = (e: React.MouseEvent<HTMLLIElement>) => {
      const { innerText } = e.target as HTMLLIElement;
      const { value } = e.target as HTMLLIElement;
      setSelected(innerText);
      setCategoryQuery((prev) => {
        if (buttonText === "원하는 숙소를 찾아보세요") {
          return { ...prev, type: value, type_name: innerText };
        } else {
          return { ...prev, region: value, region_name: innerText };
        }
      });
      handleClick();
    };

    return (
      <Styled.CategoryFilterPopUpContainer>
        <Styled.CategoryButton onClick={handleClick}>
          {buttonText}
        </Styled.CategoryButton>
        <Styled.CategoryPopUp isOpen={isOpen}>
          {listData.map((type) => (
            <Styled.CategoryPopUpItem
              key={type.value}
              value={type.value}
              onClick={categoryClick}
            >
              {type.label}
            </Styled.CategoryPopUpItem>
          ))}
        </Styled.CategoryPopUp>
        <Styled.CategoryChoiceValue>{selected}</Styled.CategoryChoiceValue>
      </Styled.CategoryFilterPopUpContainer>
    );
  },
);

export default CategoryFilterPopUp;
