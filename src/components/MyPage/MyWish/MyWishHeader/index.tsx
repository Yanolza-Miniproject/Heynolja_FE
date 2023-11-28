import * as Styled from "./MyWIshHeader.styles";

type MyWishHeaderProps = {
  wishCount: number;
};

const MyWishHeader = ({ wishCount }: MyWishHeaderProps) => {
  return (
    <Styled.MyBox>
      <Styled.Content>
        <Styled.Title>❤️ 찜한 목록</Styled.Title>
        <Styled.Count data-testid="wishCount">{wishCount}</Styled.Count>
      </Styled.Content>
    </Styled.MyBox>
  );
};

export default MyWishHeader;
