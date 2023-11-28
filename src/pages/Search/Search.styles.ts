import styled from "@emotion/styled";

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
