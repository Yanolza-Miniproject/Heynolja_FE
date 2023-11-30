import * as Styled from "./CategoryFilterViewButton.styles";

export type CategoryFilterViewButtonProps = {
  buttonText: string;
  isOn: boolean;
  fn: () => void;
};

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
