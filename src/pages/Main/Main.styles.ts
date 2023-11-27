import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const ContainerVariants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const ItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  gap: 0.8rem;
  height: auto;
  min-height: 100%;

  background-color: white;
`;

export const Banner = styled.div`
width: 100%;
  height: 100px;
  padding: 5rem 10rem;

  background-color: #191554;

  font-size: 3rem;
  color: white;
  font-weight: 800;
`;

export const Title = styled.h3`
  margin: 1rem;

  font-weight: 700;
  text-align: center;
`;

export const MyAreaAccomList = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: center;
  align-items: center;

  gap: 1rem;
  margin-bottom: 3rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, auto);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, auto);
  }

  @media (max-width: 480px) {
    grid-template-columns:repeat(2, auto);
  }
`;

export const TopLikedAccomList = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: center;
  align-items: center;

  gap: 1em;
  margin-bottom: 3em;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, auto);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, auto);
  }

  @media (max-width: 480px) {
    grid-template-columns:repeat(2, auto);
  }
`;

export const ParkingAccomList = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1rem;
  margin-bottom: 3rem;
`;

export const NormalAccomList = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(5, auto);
  justify-content: center;
  align-items: start;

  gap: 1rem;
  margin-bottom: 6rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, auto);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, auto);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, auto);
  }
`;

export const ItemContainer = styled.div`
  padding: 0.8rem;

  border: 1px solid #e6e6e6;
  border-radius: 0.625rem;

  transition: all 0.1s ease;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.08);

  &:hover {
    border: 1px solid #ff5100;
    color: #ff5100;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transform: scale(1.05);
  }
`;

export const ItemLink = styled(Link)`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemPicture = styled(motion.div)`
  position: relative;

  background-color: white;

  overflow: hidden;

  img {
    width: 10rem;
    height: 10rem;
    object-fit: cover;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 0.5rem;
  width: 100%;

  font-size: 0.8rem;

  h3 {
    cursor: pointer;
  }

  img {
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
  }
`;
