import InfiniteScroll from "react-infinite-scroll-component";

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
    <InfiniteScroll
      dataLength={length || 0}
      next={() => fn()}
      hasMore={hasNextPage}
      loader={<></>}
      scrollThreshold={0.95}
    >
      {children}
    </InfiniteScroll>
  );
};

export default InfiniteScroller;
