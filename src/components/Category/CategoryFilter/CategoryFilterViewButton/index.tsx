import * as Styled from "./CategoryFilterViewButton.styles";
import { CategoryFilterViewButtonProps } from "./CategoryFilterViewButton.types";

const CategoryFilterViewButton = ({
  buttonText,
  isOn,
  fn,
}: CategoryFilterViewButtonProps) => {
  const isViewMode = () => {
    if (buttonText === "바둑판보기") {
      return isOn;
    } else {
      return !isOn;
    }
  };

  return (
    <Styled.CategoryFilterViewButton
      type="button"
      view={isViewMode()}
      onClick={fn}
    >
      {buttonText}
    </Styled.CategoryFilterViewButton>
  );
};

export default CategoryFilterViewButton;
