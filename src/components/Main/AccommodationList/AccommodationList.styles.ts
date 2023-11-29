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

export const Title = styled.h3`
  margin: 1.5rem;

  font-size: 1.3rem;
  font-weight: 700;
  text-align: center;
`;

export const AccomList = styled(motion.div)`
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
    grid-template-columns: repeat(1, auto);
  }
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
    grid-template-columns: repeat(1, auto);
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
    width: 13rem;
    height: 13rem;
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

  h3 {
    cursor: pointer;
  }

  .item-name {
    font-size: 0.9rem;
  }
  .item-price {
    font-size: 0.88rem;
    font-weight: 700;
  }

  img {
    width: 1.2rem;
    height: 1.2rem;
    cursor: pointer;
  }
`;

export const ItemInfoFirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  gap: 0.4rem;
`;

export const ItemInfoSecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  gap: 0.2rem;

  font-size: 0.8rem;
`;
