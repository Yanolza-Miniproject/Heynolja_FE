import styled from "@emotion/styled";
import {
  OptionItemProps,
  RegionItemProps,
  TypeItemProps,
  TypeWrapperProps,
} from "./Search.types";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  max-width: 55rem;
  padding: 2em;
  margin: 0 auto;

  background-color: white;

  h2 {
    margin-top: 1em;
    margin-bottom: 1em;

    font-size: 1.25rem;
    font-weight: 700;
  }
`;

export const SearchHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 1em;

  h2 {
    margin-right: 1em;
  }
`;

export const SearchTitle = styled.div`
  width: 20em;
`;

export const SearchParamsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 100%;
`;

export const SearchParams = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1 0 40%;

  gap: 0.5em;

  font-size: 1.1em;
  font-weight: 500;

  .region,
  .type {
    padding: 0.3em;
    background-color: #e6e6e6;
  }

  .option {
    display: flex;
    flex-direction: row;

    gap: 0.5em;
  }

  .option-each {
    padding: 0.3em;
    background-color: #e6e6e6;
  }
`;

export const SearchCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 0.7em;
  gap: 0.6em;

  width: 100%;
  max-width: 60rem;
  height: 30rem;

  border: 1px solid #e6e6e6;
  border-radius: 1em;
`;

export const SearchCardWrapper = styled.div<TypeWrapperProps>`
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
  border-radius: 1em;

  overflow: hidden;
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    flex: ${({ isType }) => (isType ? "4.5" : "2.5")};

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
  border-radius: 0.5em;

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

  padding-left: 1em;
  padding-top: 0.6em;
  padding-bottom: 0.6em;

  width: auto;
  height: 2.2em;
  border-radius: 0.625rem;
  border: 1px solid #e6e6e6;

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
    width: 3.4em;
    height: 3.4em;
    border-radius: 0 0.625rem 0.625rem 0;
    filter: ${({ selected }) => (selected ? "none" : "grayscale(100%)")};
    transition: filter 0.3s;
  }

  &:hover img {
    filter: none;
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

  padding: 1em;

  width: 15em;
  height: 3em;
  border-radius: 0.5em;
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
    width: 3.5em;
    height: 3.5em;

    object-fit: contain;
    filter: ${({ selected }) => (selected ? "none" : "grayscale(100%)")};
    transition: filter 0.3s;
  }

  &:hover img {
    filter: none;
  }
`;
