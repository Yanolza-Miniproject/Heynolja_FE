import styled from "@emotion/styled";

export const MyOrderItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  border: 1px solid #e6e6e6;
  border-radius: 1rem;
  padding: 2rem;
  margin-top: 2rem;
  transition: box-shadow border 0.5s;

  &:hover {
    border: 1px solid #ff5100;
    box-shadow: 0px 0px 20px 0px rgba(255, 81, 0, 0.05);
  }
`;

export const ItemWrapper = styled.div`
  height: 19rem;
  overflow: auto;
  padding-top: 1rem;
  border-bottom: 1px solid #e6e6e6;
  padding: 1.5rem;
`;

export const Header = styled.div`
  border-bottom: 1px solid #e6e6e6;
  padding: 0rem 0 0.94rem 0;

  display: flex;
  justify-content: space-between;

  color: #ff5100;
  font-weight: 700;
  letter-spacing: -0.05rem;
`;

export const OrderInfo = styled.span``;

export const OrderTotalPrice = styled.span``;
