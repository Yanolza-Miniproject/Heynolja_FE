import styled from "@emotion/styled";

export const PaymentItemWrapper = styled.div`
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Title = styled.p`
  font-weight: 600;
`;

export const ItemList = styled.li`
  width: 100%;
  height: 20rem;
  border-bottom: 1px solid #d3d3d3;
  overflow: auto;
`;

export const TotalPriceWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d3d3d3;
  padding-bottom: 1.5rem;
`;

export const ItemPriceWrapper = styled.div`
  display: flex;
`;

export const ItemPrice = styled.div`
  width: 100%;

  color: #222;
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -0.05625rem;
`;
