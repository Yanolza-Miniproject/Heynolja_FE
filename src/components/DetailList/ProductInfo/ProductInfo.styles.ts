import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const DetailsContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 10px;
  height: 50vh;

  overflow-y: auto;
`;

export const AddressInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: space-between;
`;
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: space-between;
`;
export const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: space-between;
`;

export const InfoTitleText = styled.div`
  min-width: 100px;
  margin-right: 16px;
  color: #222;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.05rem;
`;

export const InfoDetailText = styled.div`
  text-align: left;
  color: #222;
  font-size: 0.95rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.02375rem;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  margin-bottom: 10px;
`;
