import styled from "@emotion/styled";

export const ItemWrapper = styled.ul`
  position: relative;
  border-radius: 0.625rem;
  border: 1px solid #e6e6e6;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 1.19rem 0.81rem 2.19rem 1.81rem;
  margin-bottom: 1.3rem;
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
  margin-top: 0.5rem;
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

  background-image: url("/src/assets/image/empty.png");
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  margin-right: 2rem;

  img {
    width: 10rem;
    height: 10rem;
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
