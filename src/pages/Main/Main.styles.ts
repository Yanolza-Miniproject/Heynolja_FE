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

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    height: 10rem;
    padding: 0;

    span {
      font-size: 2.5rem;
      line-height: 100%;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    height: 10rem;
    padding: 0;

    span {
      font-size: 2.2rem;
      line-height: 100%;
    }
  }
`;

export const CityName = styled.span`
  color: #ff5100;
`;
