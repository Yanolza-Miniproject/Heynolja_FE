import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 200px;
  padding: 2em 5em;

  background-color: #191554;
`;

export const CategoryBannerTextMotion = styled(motion.div)`
  font-size: 3em;
  color: white;
  font-weight: 800;
`;

export const CategoryBannerSearchMotion = styled(motion.div)`
  margin-top: 1.2rem;
`;
