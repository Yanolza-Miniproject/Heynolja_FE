import * as Styled from "./InfiniteScroller.styles";

type InfiniteScrollerProps = {
  children: React.ReactNode;
  length: number | undefined;
  fn: () => void;
  hasNextPage: boolean;
};

const InfiniteScroller = ({
  children,
  length,
  fn,
  hasNextPage,
}: InfiniteScrollerProps) => {
  return (
    <Styled.InfiniteScrollWrapper
      dataLength={length || 0}
      next={() => fn()}
      hasMore={hasNextPage}
      loader={<h4>Loading...</h4>}
      scrollThreshold={0.95}
    >
      {children}
    </Styled.InfiniteScrollWrapper>
  );
};

export default InfiniteScroller;
