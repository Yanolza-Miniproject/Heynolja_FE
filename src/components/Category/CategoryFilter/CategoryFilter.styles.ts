import styled from "@emotion/styled";
import Button from "../../Common/Button";

export const CategoryFilterContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 500px;
  padding: 1rem;
  margin: 0 auto;

  color: #222;
  box-sizing: border-box;

  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.25));
`;

export const CategoryFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
  width: 100%;
`;

export const CategoryButton = styled(Button)``;
