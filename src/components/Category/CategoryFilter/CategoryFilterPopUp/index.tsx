import { memo, useState } from "react";
import * as Styled from "./CategoryFilterPopUp.styles";
import { categoryQueryAtom } from "../../../../store/categoryQueryAtom";
import { CategoryFilterPopUpProps } from "./CategoryFilterPopUp.types";
import { useSetRecoilState } from "recoil";

const CategoryFilterPopUp = memo(
  ({ buttonText, listData }: CategoryFilterPopUpProps) => {
    const [buttonLabel, setButtonLabel] = useState(buttonText);
    const [isOpen, setIsOpen] = useState(false);
    const setCategoryQuery = useSetRecoilState(categoryQueryAtom);

    const handleClick = () => {
      setIsOpen((prev) => !prev);
    };

    const categoryClick = (e: React.MouseEvent<HTMLLIElement>) => {
      const { innerText } = e.target as HTMLLIElement;
      const { value } = e.target as HTMLLIElement;
      setButtonLabel(innerText);
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
      <Styled.CategoryFilterPopUpContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Styled.CategoryButton
          onClick={handleClick}
          data-testid="CategorySearchButton"
        >
          {buttonLabel}
        </Styled.CategoryButton>
        {isOpen && (
          <Styled.CategoryPopUp
            isOpen={isOpen}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: isOpen ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", stiffness: 100 }}
          >
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
        )}
      </Styled.CategoryFilterPopUpContainer>
    );
  },
);

export default CategoryFilterPopUp;
