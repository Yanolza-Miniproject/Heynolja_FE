import styled from "@emotion/styled";

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

export const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;

  padding: 2rem;

  row-gap: 1rem;
  column-gap: 1rem;

  overflow-y: scroll;
  overflow-x: hidden;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;
