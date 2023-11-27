import styled from "@emotion/styled";

export const CardTitleText = styled.div`
  margin-right: 16px;
  //   margin-top: 10px;
  margin-bottom: 20px;

  min-width: 100px;

  color: #222;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.15rem;
`;

export const CardListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const IconImage = styled.img<{ isActive: boolean }>`
  width: 8vw;
  height: 8vh;

  filter: ${({ isActive }) => (isActive ? "none" : "grayscale(100%)")};
`;
