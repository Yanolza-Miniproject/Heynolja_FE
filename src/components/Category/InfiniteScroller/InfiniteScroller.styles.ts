import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroll-component";

export const InfiniteScrollWrapper = styled(InfiniteScroll)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  padding: 1rem;

  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;
