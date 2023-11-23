import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const SearchListContainer = styled.div`
  position: absolute;
  top: 0;

  display: flex;
  justify-content: center;

  width: 100%;
  padding: 0.5rem;
  margin: 0 auto;

  color: #222;
  background-color: white;
  box-sizing: border-box;
  border-radius: 5px;

  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.25));

  transform: translateY(-50%);
`;

export const SearchListWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SearchListButton = styled(motion.button)`
  padding: 0.5rem 1rem;

  font-size: 1.2rem;
  font-weight: 700;
  color: #ff5100;
  background-color: transparent;
  border: 1px solid #ff5100;
  border-radius: 5px;

  cursor: pointer;
  transition: all 0.2s ease-in-out;

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
