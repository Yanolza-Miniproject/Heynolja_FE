export type CategoryViewType = "Grid" | "List";

export type CategoryFilterViewButtonProps = {
  type: CategoryViewType;
  isOn: boolean;
  fn: () => void;
};

export type CategoryItemWrapperProps = {
  view: boolean;
};
