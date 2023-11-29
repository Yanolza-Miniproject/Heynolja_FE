import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  gap: 0.8rem;
  height: auto;
  min-height: 100%;

  background-color: white;
`;

export const Banner = styled.div`
  height: 100%;
  padding: 5rem 10rem;

  background-color: #191554;

  font-size: 3rem;
  line-height: 4rem;
  color: white;
  font-weight: 800;
`;

export const CityName = styled.span`
  color: #ff5100;
`;
