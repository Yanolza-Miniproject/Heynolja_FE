import styled from "@emotion/styled";
import Button from "../../Common/Button";

export const CategoryFilterContainer = styled.div`
  position: absolute;
  top: 0;

  display: flex;
  justify-content: center;

  width: 100%;
  padding: 1rem;
  margin: 0 auto;

  color: #222;
  background-color: white;
  box-sizing: border-box;
  border-radius: 5px;

  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.25));

  transform: translateY(-50%);
`;

export const CategoryFilterWrapper = styled.div`
  display: flex;
  justify-content: space-around;

  width: 80%;
`;

export const CategoryButton = styled(Button)``;
