import styled from "@emotion/styled";
import { CategoryItemWrapperProps } from "./CategoryFilterViewButton.types";

export const CategoryFilterViewButton = styled.button<CategoryItemWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 48%;
  padding: 0.7rem 1.2rem;

  border: none;
  border-radius: 10px;

  color: white;
  background-color: ${(props) => (props.view ? "#191554" : "#646464")};
  transition: background-color 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #ff5100;
  }
`;
