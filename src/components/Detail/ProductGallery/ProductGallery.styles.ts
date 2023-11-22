import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Slider from "react-slick";

export const GalleryContainer = styled(Box)`
  height: 80vh;

  overflow-x: hidden;
  overflow-y: hidden;
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
  margin-left: auto;
  margin-right: auto;
  max-width: 75vw;
  max-height: 90vh;
  object-fit: cover;
`;

export const StyledSlider = styled(Slider)`
  margin: auto;
  max-width: 80vw;
`;
