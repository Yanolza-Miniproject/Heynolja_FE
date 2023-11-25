import * as Styled from "./ProductInfo.styles";
import { ProductInfoProps } from "./ProductInfo.types";

const ProductInfo: React.FC<ProductInfoProps> = ({
  address,
  infoDetail,
  phoneNumber,
  homepage,
  checkIn,
  checkOut,
}) => (
  <Styled.DetailsContainer>
    <Styled.AddressInfoContainer>
      <Styled.ItemContainer>
        <Styled.InfoTitleText>주소</Styled.InfoTitleText>
        <Styled.InfoDetailText>{address}</Styled.InfoDetailText>
      </Styled.ItemContainer>
      <Styled.ItemContainer>
        <Styled.InfoTitleText>설명</Styled.InfoTitleText>
        <Styled.InfoDetailText>{infoDetail}</Styled.InfoDetailText>
      </Styled.ItemContainer>
    </Styled.AddressInfoContainer>

    <Styled.ContactContainer>
      <Styled.ItemContainer>
        <Styled.InfoTitleText>전화번호</Styled.InfoTitleText>
        <Styled.InfoDetailText>{phoneNumber}</Styled.InfoDetailText>
      </Styled.ItemContainer>
      <Styled.ItemContainer>
        <Styled.InfoTitleText>홈페이지</Styled.InfoTitleText>
        <Styled.InfoDetailText>{homepage}</Styled.InfoDetailText>
      </Styled.ItemContainer>
    </Styled.ContactContainer>

    <Styled.TimeContainer>
      <Styled.ItemContainer>
        <Styled.InfoTitleText>체크인</Styled.InfoTitleText>
        <Styled.InfoDetailText>{checkIn}</Styled.InfoDetailText>
      </Styled.ItemContainer>
      <Styled.ItemContainer>
        <Styled.InfoTitleText>체크아웃</Styled.InfoTitleText>
        <Styled.InfoDetailText>{checkOut}</Styled.InfoDetailText>
      </Styled.ItemContainer>
    </Styled.TimeContainer>
  </Styled.DetailsContainer>
);

export default ProductInfo;
