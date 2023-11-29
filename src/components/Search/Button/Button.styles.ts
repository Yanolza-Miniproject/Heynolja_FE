import styled from "@emotion/styled";

export const SearchButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 10rem;
  height: 100%;
  gap: 0.5rem;

  background-color: #e6e6e6;
  border: 1px solid #e6e6e6;
  border-radius: 0.5rem;

  font-size: 2rem;
  transition:
    background-color 0.3s,
    color 0.1s,
    translate 0.3s;

  cursor: pointer;
  &:hover {
    background-color: #191554;
    color: white;

    img {
      filter: brightness(0) invert(1);
    }
  }

  img {
    width: 5rem;
    height: 4rem;
  }

  &:active {
    transform: translateX(0.15rem) translateY(0.15rem);
  }
`;

export const SearchResetButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 7rem;
  height: 5rem;
  padding: 0;
  margin-left: 1rem;

  background-color: transparent;
  appearance: none;
  border: none;

  cursor: pointer;
  overflow: hidden;

  img {
    padding: 0.2rem;

    border-radius: 2rem;

    width: 3rem;
    height: 2.5rem;
    transition:
      transform 0.3s,
      scale 0.3s,
      border-color 0.3s,
      opacity 0.3s;

    &:hover {
      transform: rotate(-180deg) scale(1.1);
      background-color: #f6f6f6;
      opacity: 0.8;
    }
  }

  &:active img {
    transform: rotate(-180deg) scale(0.95);
  }
`;
