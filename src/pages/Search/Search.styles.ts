import styled from "@emotion/styled";
import {
  OptionItemProps,
  RegionItemProps,
  TypeItemProps,
} from "./Search.types";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 2em;
  margin: 0 auto;
  width: 40rem;

  background-color: white;

  h2 {
    margin-top: 1em;
    margin-bottom: 1em;

    font-size: 1.25rem;
    font-weight: 700;
  }
`;

export const SearchCard = styled.div`
  display: flex;

  padding: 0.7em;
  gap: 0.6em;

  width: 45rem;
  height: 30rem;
  border: 1px solid #e6e6e6;

  border-radius: 1em;
`;

export const SearchCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  position: relative;

  height: 100%;

  background-color: #ff6c27;
  /* background-color: #191554; */
  border: 1px solid #e6e6e6;
  border-radius: 2px;

  overflow: hidden;
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    flex: 4;

    background-color: white;
    border: 1px solid #ff5100;

    span {
      color: #ff5100;
    }
  }

  span {
    min-width: 14em;

    transition: all 0.5s;
    text-align: center;
    text-transform: uppercase;
    color: white;
    font-weight: 700;
    letter-spacing: 0.1em;
  }

  img {
    width: 3.7em;
    height: 3.7em;
  }
`;

export const SelectedItemDisplay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 30% 0 0;

  width: 100%;
  gap: 0.3em;

  background-color: white;
  border-top: 1px solid #e6e6e6;
  font-size: 1.3em;
`;

export const RegionList = styled.div`
  display: block;
  flex-direction: column;

  width: 60%;
`;

export const RegionItem = styled.div<RegionItemProps>`
  padding: 0.5em 1em;
  margin-bottom: 0.5em;

  background-color: ${({ selected }) => (selected ? "#ff5100" : "white")};
  border: ${({ selected }) =>
    selected ? "1px solid #ff5100" : "1px solid #e6e6e6"};
  border-radius: 4px;

  color: ${({ selected }) => (selected ? "white" : "black")};

  transition:
    background-color 0.3s,
    color 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #ff5100;
    color: white;
  }
`;

export const TypeList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, 1fr);

  gap: 0.2em;
  width: 80%;
`;

export const TypeItem = styled.div<TypeItemProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  grid-column: ${({ isFullWidth }) => (isFullWidth ? "1 / -1" : "auto")};

  padding: 0.5em;

  width: auto;
  height: 2.6em;
  border-radius: 4px;
  border: ${({ selected }) =>
    selected ? "1px solid #ff5100" : "1px solid #e6e6e6"};

  background-color: ${({ selected }) => (selected ? "#ff5100" : "white")};
  color: ${({ selected }) => (selected ? "white" : "black")};
  transition:
    background-color 0.3s,
    color 0.3s;

  cursor: pointer;
  &:hover {
    background-color: #ff5100;
    color: white;
  }

  img {
    width: auto;
    height: 3.1em;

    box-sizing: border-box;

    border: 1px solid white;
  }
`;

export const OptionList = styled.div`
  display: grid;
  grid-template-rows: repeat(4, auto);
  justify-content: center;
  align-items: center;

  gap: 0.4em;
  width: 90%;
`;

export const OptionItem = styled.div<OptionItemProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.5em;
  margin-bottom: 0.5em;

  width: 20em;
  height: 3.2em;
  border-radius: 4px;
  border: ${({ selected }) =>
    selected ? "1px solid #ff5100" : "1px solid #e6e6e6"};

  background-color: ${({ selected }) => (selected ? "#ff5100" : "white")};
  color: ${({ selected }) => (selected ? "white" : "black")};

  transition:
    background-color 0.3s,
    color 0.3s;

  cursor: pointer;
  &:hover {
    background-color: #ff5100;
    color: white;
  }

  img {
    width: auto;
    height: 3.1em;

    box-sizing: border-box;

    border: 1px solid white;
  }
`;
