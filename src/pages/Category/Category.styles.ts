import styled from "@emotion/styled";

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  margin-top: 2rem;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-items: center;

  width: 80%;
  height: 100%;
  padding: 2rem;

  gap: 1rem;
  row-gap: 1rem;

  overflow-y: scroll;
`;
