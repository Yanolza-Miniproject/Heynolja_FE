import styled from "@emotion/styled";

type CategoryItemWrapperProps = {
  view: boolean;
};

export const CategoryItemWrapper = styled.div<CategoryItemWrapperProps>`
  display: flex;
  flex-wrap: ${(props) => (props.view ? "wrap" : "nowrap")};
  flex-direction: ${(props) => (props.view ? "row" : "column")};
  justify-content: center;
  gap: 1rem;
`;
