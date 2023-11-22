import styled from "@emotion/styled";

export const BtnWrapper = styled.div`
  position: absolute;
  right: 0%;
  display: flex;
  margin-top: 1.3rem;
  gap: 0.63rem;
`;

export const BackToCart = styled.button`
  width: 15.875rem;
  height: 2.5rem;

  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-radius: 0.06;
  text-align: center;
  font-size: 0.9rem;
  cursor: pointer;

  &:hover {
    border: 1px solid #ff5100;
    color: #ff5100;
  }
`;

export const GoToPay = styled.button`
  width: 15.875rem;
  height: 2.5rem;

  background-color: #ff5100;
  border: 1px solid #ff5100;
  border-radius: 0.06;
  text-align: center;
  color: #fff;
  font-size: 0.9rem;

  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:hover {
    border: 1px solid #ff5100;
    background-color: #fff;
    color: #ff5100;
  }
`;

export const ItemPriceWrapper = styled.div`
  font-weight: 600;
  display: flex;
  text-align: center;
  align-items: center;
`;

export const ItemPrice = styled.div`
  width: 100%;
  margin-right: 0.2rem;
`;
