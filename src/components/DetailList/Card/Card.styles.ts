import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Card = styled(Box)<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 26vw;
  height: 12vh;

  border-radius: 4px;
  padding: 0 20px; // 양쪽에 20px의 패딩 추가
  border: ${({ isActive }) =>
    isActive ? "1px solid #D3D3D3" : "1px solid #E6E6E6"};
`;

export const CardContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardIcon = styled.div`
  display: flex;
  justify-content: center;

  font-size: 4rem;
  svg {
    width: 480px;
    height: 48px;
  }
`;

export const CardTitle = styled.div`
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
`;

export const CardDescription = styled.div<{ isActive: boolean }>`
  text-align: center;
  color: ${({ isActive }) => (isActive ? "black" : "#E6E6E6")};
`;
