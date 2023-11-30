import styled from "@emotion/styled";

export const ItemWrapper = styled.ul`
  position: relative;
  border-radius: 0.625rem;
  border: 1px solid #e6e6e6;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 1.19rem 0.81rem 2.19rem 1.81rem;
  margin-bottom: 1.5rem;

  /* cursor: pointer;
  &:hover {
    border: 1px solid #ff5100;
    box-shadow: 0px 0px 20px 0px rgba(255, 81, 0, 0.05);
  } */
`;

export const ItemTitle = styled.p`
  color: #222;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.05625rem;
  margin-bottom: 1rem;
`;

export const ItemContent = styled.div`
  display: flex;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

export const ItemValueWrapper = styled.div``;

export const Title = styled.span`
  color: #222;
  font-size: 1rem;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.05rem;
`;

export const ItemImg = styled.div`
  position: relative;

  background-color: white;

  overflow: hidden;

  img {
    width: 13rem;
    height: 13rem;
  }
`;

export const Content = styled.span``;

export const ItemHeadCount = styled.span``;

export const ItemPriceWrapper = styled.div`
  position: absolute;
  right: 3%;
  bottom: 10%;

  color: #222;
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -0.05625rem;
`;

export const ItemPrice = styled.span``;
