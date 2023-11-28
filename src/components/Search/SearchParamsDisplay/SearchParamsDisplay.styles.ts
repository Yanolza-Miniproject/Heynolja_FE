import styled from "@emotion/styled";

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
