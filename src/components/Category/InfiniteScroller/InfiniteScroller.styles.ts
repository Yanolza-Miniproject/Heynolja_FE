import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroll-component";

export const InfiniteScrollWrapper = styled(InfiniteScroll)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;

  height: object-fit;

  padding: 1rem;

  gap: 1rem;

  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;
