import styled from "@emotion/styled";

export const CategorySvgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 36px;
  height: 36px;

  transition: scale 0.3s ease-in-out;

  &:hover {
    scale: 1.1;
  }
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
