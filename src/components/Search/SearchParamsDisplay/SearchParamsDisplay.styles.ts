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
`;
