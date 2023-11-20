import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const flexCenter = `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  ${flexCenter}

  width: 100%;
  height: 100%;

  background-color: #191554;
`;

export const Wrapper = styled.div`
  ${flexCenter}

  width: 50%;
  max-width: 600px;
  height: 50%;
`;

export const MotionScaleDiv = styled(motion.div)`
  ${flexCenter}

  width: 100%;
  height: 100%;

  background-color: #fff;
  border-radius: 10px;
`;
