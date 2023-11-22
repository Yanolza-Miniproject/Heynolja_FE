import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroll-component";

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  overflow: auto;
`;

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const InfiniteScrollWrapper = styled(InfiniteScroll)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  padding: 1rem;

  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;
