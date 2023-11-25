import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const ContainerVariants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
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

  gap: 0.8em;
  height: auto;
  min-height: 100%;

  background-color: white;
`;

export const Banner = styled.div`
  height: 100px;
  padding: 2em 5em;

  background-color: #191554;

  font-size: 3em;
  color: white;
  font-weight: 800;
`;

export const Title = styled.h3`
  margin: 1em;

  font-weight: 700;
  text-align: center;
`;

export const MyAreaAccomList = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1em;
  margin-bottom: 3em;
`;

export const TopLikedAccomList = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1em;
  margin-bottom: 3em;
`;

export const ParkingAccomList = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1em;
  margin-bottom: 3em;
`;

export const NormalAccomList = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(5, auto);
  justify-content: center;
  align-items: start;

  gap: 1em;
  margin-bottom: 6em;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const ItemContainer = styled.div`
  padding: 0.8em;

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
    width: 10em;
    height: 10em;
    object-fit: cover;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 0.5em;
  width: 100%;

  font-size: 0.8em;

  h3 {
    cursor: pointer;
  }

  img {
    width: 1.5em;
    height: 1.5em;
    cursor: pointer;
  }
`;
