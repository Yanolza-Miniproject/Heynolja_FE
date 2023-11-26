import styled from "@emotion/styled";

export const ItemWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 1.19rem 0.81rem 1.19rem 1.81rem;

  position: relative;
  border-radius: 0.625rem;
  border: 1px solid #e6e6e6;
  background: #fff;

  cursor: pointer;
  &:hover {
    border: 1px solid #ff5100;
    box-shadow: 0px 0px 20px 0px rgba(255, 81, 0, 0.05);
  }
`;

export const ImageContainer = styled.div`
  flex-shrink: 0;
  width: 300px;
  height: 200px;

  background-color: #f0f0f0;
  margin-right: 20px;
  border-radius: 0.625rem;
  overflow: hidden;
`;

export const ItemImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;

  padding: 0 20px;
`;

export const NameCapacityContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
`;

export const ItemName = styled.h3`
  color: #333;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.08125rem;
`;

export const ItemCapacity = styled.span`
  color: #646464;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.05rem;
`;

export const InventoryPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  margin-top: auto;

  gap: 4px;
`;

export const ItemInventory = styled.span`
  color: #646464;

  font-size: 0.9rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.04688rem;
`;

export const ItemPrice = styled.span`
  font-size: 1.2rem;
  color: #333;
  font-weight: bold;
`;

export const CapacityPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const CapacityContainer = styled.span`
  display: flex;
  align-items: center;

  margin-top: 20px;
`;

export const IconImage = styled.img`
  width: 2vw;
  height: 2vh;
`;
