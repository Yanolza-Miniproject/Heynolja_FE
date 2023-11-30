import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 700px;
  margin: 0 auto;

  width: 100%;

  box-sizing: border-box;
`;

export const ItemWrapper = styled(motion.div)`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  position: relative;

  width: 80%;

  margin: 2rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const Main = styled.div`
  width: 75%;
  padding: 1rem;

  background-color: #f6f6f6;
  border-radius: 20px;

  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.25));
`;

export const Aside = styled.div`
  width: 25%;
  position: relative;

  background-color: #f6f6f6;
  border-radius: 20px;

  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.25));

  @media (max-width: 768px) {
    width: 100%;
    order: -1;
  }
`;
