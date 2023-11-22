import { useState } from "react";
import * as Styled from "./CategoryFilterPopUp.styles";
import { accommoationTypes } from "../CategoryFilter.constants";

type CategoryFilterPopUpProps = {
  buttonText: string;
};

const CategoryFilterPopUp = ({ buttonText }: CategoryFilterPopUpProps) => {
  const [selected, setSelected] = useState("전체보기");
  const [isOpen, setIsOpen] = useState(false);
  // const staggerMenuItems = stagger(1.5, { startDelay: 1.55 });

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const categoryClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const { innerText } = e.target as HTMLLIElement;
    setSelected(innerText);
    handleClick();
  };

  return (
    <Styled.CategoryFilterPopUpContainer>
      <Styled.CategoryButton onClick={handleClick}>
        {buttonText}
      </Styled.CategoryButton>
      <Styled.CategoryPopUp isOpen={isOpen}>
        {accommoationTypes.map((type) => (
          <Styled.CategoryPopUpItem key={type.value} onClick={categoryClick}>
            {type.label}
          </Styled.CategoryPopUpItem>
        ))}
      </Styled.CategoryPopUp>
      <Styled.CategoryChoiceValue>{selected}</Styled.CategoryChoiceValue>
    </Styled.CategoryFilterPopUpContainer>
  );
};

export default CategoryFilterPopUp;
