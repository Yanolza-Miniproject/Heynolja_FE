import styled from "@emotion/styled";
import { flexCenter } from "../../../pages/Signin/Signin.styles";
import { motion } from "framer-motion";

type CategoryItemContainerProps = {
  view: boolean;
};

export const CategoryItemContainer = styled.div<CategoryItemContainerProps>`
  ${flexCenter};

  width: ${(props) => (props.view ? "195px" : "100%")}
  height: ${(props) => (props.view ? "290px;" : "auto")}

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

export const CategoryItemWrapper = styled(
  motion.div,
)<CategoryItemContainerProps>`
  display: flex;
  flex-direction: ${(props) => (props.view ? "column" : "row")};
  align-items: center;

  width: 100%;
  height: 100%;

  gap: 0.5rem;
`;

export const CategoryImage = styled.img<CategoryItemContainerProps>`
  width: ${(props) => (props.view ? "15vw" : "10vw")};
  height: ${(props) => (props.view ? "15vw" : "10vw")};

  padding: 1rem;

  border-radius: 30px;

  @media (max-width: 768px) {
    width: ${(props) => (props.view ? "20vw" : "20vw")};
    height: ${(props) => (props.view ? "20vw" : "20vw")};
  }
`;

export const CategoryTextWrapper = styled.div<CategoryItemContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: start;

  width: ${(props) => (props.view ? "195px" : "90%")};

  gap: 1rem;
`;

export const CategoryName = styled.strong<CategoryItemContainerProps>`
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

export const CategoryView = styled.span<CategoryItemContainerProps>`
  color: #222222;
`;

export const CategoryDownWrapper = styled.div<CategoryItemContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: ${(props) => (props.view ? "100%" : "90%")};
`;

export const CategoryPrice = styled.span`
  color: #222222;
  font-weight: 600;
`;
