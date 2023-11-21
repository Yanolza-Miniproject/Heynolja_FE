import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

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
  text-align: center;
  margin: 1.5em;
`;

export const MyAreaAccomList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1em;
`;

export const TopLikedAccomList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1em;
`;

export const NormalAccomList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  align-items: start;

  gap: 1em;
  margin-bottom: 4em;

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

export const ItemLink = styled(Link)`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemPicture = styled.div`
  position: relative;

  padding: 0.6em;

  border: 1px solid #e6e6e6;
  border-radius: 0.6em;
  background-color: white;

  overflow: hidden;

  &:hover {
    border: 1px solid #ff5100;
  }

  div {
    width: 10em;
    height: 10em;
    object-fit: cover;

    background-color: #e6e6e6;

    &:hover {
      background-color: #ff5100;
    }
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  margin-top: 0.5em;
  font-size: 0.9em;

  img {
    width: 1.3em;
    height: 1.3em;
  }
`;
