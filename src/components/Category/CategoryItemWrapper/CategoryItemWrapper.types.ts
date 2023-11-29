import { CategoryProps } from "../../../pages/Category/Category.types";

export type CategoryItemPageProps = {
  message: string;
  data: CategoryProps[];
};

export type CategoryItemWrapperProps = {
  data: CategoryItemPageProps[];
};
