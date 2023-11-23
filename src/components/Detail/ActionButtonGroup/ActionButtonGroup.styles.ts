import styled from "@emotion/styled";
import { Button, Box } from "@mui/material";

export const ButtonGroupContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  gap: 4px;

  margin-top: 20px;
`;

export const AddToCartButton = styled(Button)`
  flex: 1;

  width: 15.875rem;
  height: 2.5rem;

  background-color: #fff;
  border: 1px solid #d3d3d3;
  color: #222;
  text-align: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.04375rem;

  &:hover {
    background-color: #dcdcdc;
`;

export const BuyNowButton = styled(Button)`
  flex: 1;

  width: 15.875rem;
  height: 2.5rem;

  background-color: #ff5100;
  color: #fff;
  text-align: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.04375rem;

  &:hover {
    background-color: #e64a19;
  }
`;
