import ProductImage from "../../components/DetailList/ProductImage";
import ProductInfo from "../../components/DetailList/ProductInfo/index.tsx";
import ProductTitle from "../../components/DetailList/ProductTitle";
import { accommodationDetail } from "../../mock/detailListPageData.ts";
import * as Styled from "./DetailList.styles.ts";

const DetailList = () => {
  const {
    thumbnailUrl,
    type,
    name,
    address,
    infoDetail,
    phoneNumber,
    homepage,
    checkIn,
    checkOut,
  } = accommodationDetail;
  return (
    <Styled.container>
      <Styled.Layout>
        <ProductImage image={thumbnailUrl} />
        <Styled.DetailsContainer>
          {/* <Styled.HorizontalContainer> */}
          <ProductTitle type={type} name={name} />
          {/* <StockStatusBanner /> */}
          {/* </Styled.HorizontalContainer> */}
          <ProductInfo
            address={address}
            infoDetail={infoDetail}
            phoneNumber={phoneNumber}
            homepage={homepage}
            checkIn={checkIn}
            checkOut={checkOut}
          />
        </Styled.DetailsContainer>
      </Styled.Layout>
    </Styled.container>
  );
};

export default DetailList;
