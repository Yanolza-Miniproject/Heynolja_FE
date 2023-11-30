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
  const handleClick = () => {
    fn();
  };

  return (
    <Styled.CategoryFilterViewButton
      type="button"
      view={isOn}
      onClick={handleClick}
    >
      {buttonText}
    </Styled.CategoryFilterViewButton>
  );
};

export default CategoryFilterViewButton;
