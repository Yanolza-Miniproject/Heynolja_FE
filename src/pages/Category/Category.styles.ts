import styled from "@emotion/styled";

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 700px;
  margin: 0 auto;

  width: 98%;

  box-sizing: border-box;
`;

export const ItemWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;

  width: 80%;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Main = styled.div`
  width: 75%;
`;

export const Aside = styled.div`
  width: 25%;
  position: relative;
  background-color: #191554;
`;
