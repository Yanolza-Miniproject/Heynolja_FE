import styled from "@emotion/styled";

export const ListGridItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;

  width: 60%;
  height: object-fit;

  margin-top: 2rem;

  box-sizing: border-box;
  padding: 1rem 1rem;

  gap: 1rem;

  overflow: auto;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;
