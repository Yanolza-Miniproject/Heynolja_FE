import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Banner = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 100%;
  height: 30vh;
  background-color: #191554;

  border-radius: 10px;
`;

export const CategoryBannerWrapper = styled.div`
  width: 90%;
  height: 100%;

  margin-left: 10%;
`;

export const CategoryBannerTextMotion = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;

  width: 100%;
  height: 100%;

  gap: 0.5rem;

  font-size: 3em;
  font-weight: 800;
  color: white;
`;

export const CategoryBannerTextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.6rem;
`;

export const CategoryBannerSearchMotion = styled(motion.div)`
  margin-top: 1.2rem;

  @media (max-width: 800px) {
    width: 80%;
  }
`;
