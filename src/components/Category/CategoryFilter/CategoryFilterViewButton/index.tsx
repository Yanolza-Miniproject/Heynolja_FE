import * as Styled from "./CategoryFilterViewButton.styles";
import {
  CategoryFilterViewButtonProps,
  CategoryViewType,
} from "./CategoryFilterViewButton.types";

const CategoryFilterViewButton = ({
  isOn,
  type,
  fn,
}: CategoryFilterViewButtonProps) => {
  const isViewMode = (type: CategoryViewType): boolean => {
    return type === "Grid" ? isOn : !isOn;
  };

  const isViewType = (type: CategoryViewType): string => {
    return type === "Grid" ? "바둑판보기" : "리스트보기";
  };

  return (
    <Styled.CategoryFilterViewButton
      type="button"
      view={isViewMode(type)}
      onClick={fn}
    >
      {isViewType(type)}
    </Styled.CategoryFilterViewButton>
  );
};

export default CategoryFilterViewButton;
