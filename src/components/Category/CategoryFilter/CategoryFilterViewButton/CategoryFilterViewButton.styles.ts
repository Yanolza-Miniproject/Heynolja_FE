import styled from "@emotion/styled";

type CategoryItemWrapperProps = {
  view: boolean;
};

export const CategoryFilterViewButton = styled.button<CategoryItemWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 45%;
  padding: 0.5rem 1rem;

  border: none;
  border-radius: 10px;

  color: white;
  background-color: ${(props) => (props.view ? "#191554" : "#646464")};
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #ff5100;
  }
`;
