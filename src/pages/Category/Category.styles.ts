import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroll-component";

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  box-sizing: border-box;
`;

export const ItemWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  item-align: center;

  width: 60%;
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
