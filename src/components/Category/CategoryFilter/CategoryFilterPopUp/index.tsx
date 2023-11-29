import { memo, useState } from "react";
import * as Styled from "./CategoryFilterPopUp.styles";
import { categoryQueryAtom } from "../../../../store/categoryQueryAtom";
import {
  CategoryFilterPopUpProps,
  CategoryQueryType,
} from "./CategoryFilterPopUp.types";
import { useRecoilState } from "recoil";

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
    // const [buttonLabel, setButtonLabel] = useState(buttonText);
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
        <Styled.CategoryButton
          onClick={handleClick}
          data-testid="CategorySearchButton"
        >
          {buttonText}
        </Styled.CategoryButton>
        <Styled.CategoryPopUp isOpen={isOpen}>
          {listData.map((type) => (
            <Styled.CategoryPopUpItem
              key={type.value}
              value={type.value}
              onClick={categoryClick}
              data-testid="CategoryPopUpItem"
            >
              {type.label}
            </Styled.CategoryPopUpItem>
          ))}
        </Styled.CategoryPopUp>
        <Styled.CategoryChoiceValue data-testid="CategorySelected">
          {selected}
        </Styled.CategoryChoiceValue>
      </Styled.CategoryFilterPopUpContainer>
    );
  },
);

export default CategoryFilterPopUp;
