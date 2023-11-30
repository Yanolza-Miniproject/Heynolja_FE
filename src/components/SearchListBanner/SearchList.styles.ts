import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { CategoryViewButtonWrapper } from "../Category/CategoryFilter/CategoryFilter.styles";

export const SearchListContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  padding: 1rem;
  margin: 0 auto;

  color: #222;
  box-sizing: border-box;

  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.25));
`;
export const SearchListWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
  width: 100%;
`;

export const SearchListQueryText = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #222;
`;

export const SearchListButtonWrapper =
  CategoryViewButtonWrapper.withComponent("div");

export const SearchListButton = styled(motion.div)`
  padding: 0.5rem 1rem;

  font-size: 1.2rem;
  font-weight: 700;
  color: #ff5100;
  background-color: transparent;
  border: 1px solid #ff5100;
  border-radius: 5px;

  cursor: pointer;

  &:hover {
    background-color: #ff5100;
    color: white;
  }
`;

export const SearchListText = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  color: #ff5100;
`;
