import styled from "@emotion/styled";
import {
  OptionItemProps,
  RegionItemProps,
  TypeItemProps,
  TypeWrapperProps,
} from "./SearchSelector.types";

export const SearchCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 0.7rem;
  gap: 0.6rem;

  width: 100%;
  max-width: 60rem;
  height: 30rem;

  border: 1px solid #e6e6e6;
  border-radius: 1rem;
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
  border: 1px solid #e6e6e6;
  border-radius: 1rem;

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
    min-width: 14rem;

    transition: all 0.5s;
    text-align: center;
    text-transform: uppercase;
    color: white;
    font-weight: 700;
    letter-spacing: 0.1rem;
  }

  img {
    width: 3.4rem;
    height: 3.4rem;
  }
`;

export const SelectedItemDisplay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 30% 0 0;

  width: 100%;
  gap: 0.3rem;

  background-color: white;
  border-top: 1px solid #e6e6e6;
  font-size: 1.3rem;
`;

export const RegionList = styled.div`
  display: block;
  flex-direction: column;

  width: 60%;
`;

export const RegionItem = styled.div<RegionItemProps>`
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;

  background-color: ${({ selected }) => (selected ? "#ff5100" : "white")};
  border: ${({ selected }) =>
    selected ? "1px solid #ff5100" : "1px solid #e6e6e6"};
  border-radius: 0.5rem;

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

  gap: 0.2rem;
  width: 80%;
`;

export const TypeItem = styled.div<TypeItemProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  grid-column: ${({ isFullWidth }) => (isFullWidth ? "1 / -1" : "auto")};

  padding-left: 1rem;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;

  width: auto;
  height: 2.2rem;
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
    width: 3.4rem;
    height: 3.4rem;
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

  gap: 0.4rem;
  width: 90%;
`;

export const OptionItem = styled.div<OptionItemProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;

  width: 15rem;
  height: 3rem;
  border-radius: 0.5rem;
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
    width: 3.5rem;
    height: 3.5rem;

    object-fit: contain;
    filter: ${({ selected }) => (selected ? "none" : "grayscale(100%)")};
    transition: filter 0.3s;
  }

  &:hover img {
    filter: none;
  }
`;
