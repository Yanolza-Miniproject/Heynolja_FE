import styled from "@emotion/styled";

type CategoryItemWrapperProps = {
  view: boolean;
};

export const CategoryFilterViewButton = styled.button<CategoryItemWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 45%;
  height: 2rem;

  border: none;

  background-color: ${(props) => (props.view ? "#FFD600" : "#F6F6F6")};

  &:hover {
    cursor: pointer;
  }
`;
