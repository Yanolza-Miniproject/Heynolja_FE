import styled from "@emotion/styled";

export const SearchButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 5em;
  height: 100%;
  gap: 0.5em;

  background-color: #e6e6e6;
  border: 1px solid #e6e6e6;
  border-radius: 0.5em;

  font-size: 2em;
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
    width: 2em;
    height: 2em;
  }

  &:active {
    transform: translateX(0.05em) translateY(0.05em);
  }
`;

export const SearchResetButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 7em;
  height: 5em;
  padding: 0;
  margin-left: 1em;

  background-color: transparent;
  appearance: none;
  border: none;

  cursor: pointer;
  overflow: hidden;

  img {
    padding: 0.2em;

    border-radius: 2rem;

    width: 3em;
    height: 3em;
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
