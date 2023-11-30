import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { flexCenter } from "../../../../../pages/Signin/Signin.styles";

export const CategoryItemContainer = styled.div`
  ${flexCenter};

  width: 100%;
  height: auto;

  padding: 1rem;
  position: relative;

  border: 1px solid #e0e0e0;
  border-radius: 10px;

  font-size: 0.9rem;

  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    border: 1px solid #ff5100;
  }
`;

export const CategoryItemWrapper = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 100%;

  gap: 0.5rem;
`;

export const CategoryImage = styled.img`
  width: 10vw;
  height: 10vw;

  padding: 1rem;

  object-fit: cover;
  object-position: center;
  border-radius: 30px;

  @media (max-width: 768px) {
    width: 20vw;
    height: 20vw;
  }
`;

export const CategoryTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  width: 90%;

  gap: 1rem;
`;

export const CategoryName = styled.strong`
  font-size: 1.1rem;
  font-weight: 700;

  color: #222222;
`;

export const CategoryTopWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.3rem;
`;

export const CategoryDescription = styled.span`
  color: #222222;
`;

export const CategoryView = styled.span`
  color: #222222;
`;

export const CategoryDownWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 90%;
`;

export const CategoryPrice = styled.span`
  color: #222222;
  font-weight: 600;
`;
