import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Banner = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 100%;
  height: 30vh;
  background-color: #191554;
`;

export const CategoryBannerTextMotion = styled(motion.div)`
  max-width: 500px;
  width: 100%;
  margin-top: 3rem;

  font-size: 3em;
  color: white;
  font-weight: 800;
`;

export const CategoryBannerSearchMotion = styled(motion.div)`
  width: object-fit;
  margin-top: 1.2rem;
`;
