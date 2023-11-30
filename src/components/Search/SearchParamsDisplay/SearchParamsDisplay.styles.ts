import styled from "@emotion/styled";

export const SearchHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 1rem;

  h2 {
    margin-right: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 0;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 0;
  }
`;

export const SearchTitle = styled.div`
  width: 20rem;
`;

export const SearchParamsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 100%;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 0;
    margin: 0;

    width: 100%;
  }

  @media (max-width: 480px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 0;
    margin: 0;

    width: 100%;
  }
`;

export const SearchParams = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1 0 40%;

  gap: 0.5rem;

  font-size: 1.1rem;
  font-weight: 500;

  .region,
  .type {
    padding: 0.3rem;
    background-color: #e6e6e6;
  }

  .option {
    display: flex;
    flex-direction: row;

    gap: 0.5rem;
  }

  .option-each {
    padding: 0.3rem;
    background-color: #e6e6e6;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-grow: 1;

    width: 100%;
    height: 100%;
    padding: 0;

    font-size: 1rem;
  }

  @media (max-width: 480px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-grow: 1;

    width: 22rem;
    height: 100%;
    padding: 0;

    font-size: 1rem;
  }
`;
