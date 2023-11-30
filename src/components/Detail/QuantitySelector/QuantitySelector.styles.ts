import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const SelectorContainer = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;
`;

export const ControlContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const QuantityText = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2.5rem;
  height: 2.5rem;

  color: #222;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.05625rem;
  border: 1px solid #f4f4f4;
  border-radius: 4;
`;

export const LabelText = styled.div`
  color: #222;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.15rem;
`;

export const PriceText = styled.div`
  color: #222;
  text-align: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.04375rem;
`;

export const MinusButton = styled(Button)`
  background-size:
    40% 2px,
    2px 40%;
  color: #222;
  text-align: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.04375rem;
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
`;

export const PlusButton = styled(Button)`
  color: #ff5100;
  background-size:
    40% 2px,
    2px 40%;
`;
export const PriceLabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
`;
export const InfoText = styled.div`
  font-size: 0.8rem;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.04375rem;
  color: #646464;
`;
