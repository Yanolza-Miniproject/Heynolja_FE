import styled from "@emotion/styled";

type CategoryItemWrapperProps = {
  view: boolean;
};

export const CategoryItemWrapper = styled.div<CategoryItemWrapperProps>`
  display: flex;
  flex-wrap: ${(props) => (props.view ? "wrap" : "nowrap")};
  justify-content: center;
  gap: 1rem;
`;
