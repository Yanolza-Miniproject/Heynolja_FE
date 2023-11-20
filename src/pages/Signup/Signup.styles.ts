import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
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

  background-color: #fff;
  border-radius: 10px;
`;

export const SigninBox = styled(Box)`
  ${flexCenter}

  width: 50%;

  padding: 2rem;

  background-color: #f6f6f6;
  border-radius: 10px;
`;

export const SignForm = styled.form`
  ${flexCenter}

  width: 100%;
  gap: 1rem;
`;

export const SigninHeader = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: #222;
`;

export const SigninMotionDiv = styled(motion.div)`
  ${flexCenter}

  width: 100%;
  gap: 1rem;
`;

export const SigninButton = styled(Button)`
  width: 254px;
  height: 40px;

  color: #222;
  border: 1px solid #d3d3d3;
  background-color: none;

  &:hover {
    border: 1px solid #191554;
    color: #191554;
  }
`;

export const SigninOutButton = SigninButton.withComponent(Button);
