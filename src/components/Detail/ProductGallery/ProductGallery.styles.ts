import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Slider from "react-slick";

export const GalleryContainer = styled(Box)`
  overflow-x: hidden;
  overflow-y: hidden;
  height: 80vh;
`;

export const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  text-align: center;
`;

export const ProductImage = styled("img")`
  max-width: 75vw;
  max-height: 90vh;
  object-fit: cover;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledSlider = styled(Slider)`
  max-width: 80vw;
  margin: auto;
`;
