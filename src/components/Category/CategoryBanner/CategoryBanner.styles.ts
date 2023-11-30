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

export const AbsoluteBackground = styled.div`
  position: absolute;
  width: 200%;
  height: 100%;

  background-color: #191554;
  opacity: 0.5;
`;

export const CategoryBannerTextMotion = styled(motion.div)`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;

  margin-top: 2%;
  margin-left: 20%;

  text-align: start;

  font-size: 3em;
  color: white;
  font-weight: 800;

  @media (max-width: 800px) {
    margin-top: 2rem;
    margin-left: 2rem;

    font-size: 2rem;
  }
`;

export const CategoryBannerSearchMotion = styled(motion.div)`
  width: object-fit;
  margin-top: 1.2rem;

  @media (max-width: 800px) {
    width: 80%;
  }
`;
