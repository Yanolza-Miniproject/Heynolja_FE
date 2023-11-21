import styled from "@emotion/styled";
import { flexCenter } from "../../../pages/Signin/Signin.styles";

export const CategoryItemContainer = styled.div`
  ${flexCenter};

  width: 230px;
  height: 330px;

  padding: 1rem;

  border: 1px solid #e0e0e0;
  border-radius: 10px;

  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    border: 1px solid #ff5100;
    scale: 1.05;
  }
`;

export const CategoryItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  gap: 0.5rem;
`;

export const CategoryImage = styled.img`
  width: 195px;
  height: 200px;

  border-radius: 5px;
`;

export const CategoryTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  width: 195px;
  gap: 0.5rem;
`;

export const CategoryName = styled.strong`
  font-size: 14px;
  font-weight: 700;

  color: #222222;
`;

export const CategoryView = styled.span`
  font-size: 14px;
  color: #222222;
`;

export const CategoryDownWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const CategorySvgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 36px;
  height: 36px;
`;

export const CategorySvgImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const CategorySvgText = styled.span`
  font-size: 12px;
  font-weight: 400;

  color: #ff5100;
`;

export const CategoryPrice = CategoryName.withComponent("span");
