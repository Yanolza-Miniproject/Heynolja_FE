import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  max-width: 55rem;
  padding: 2rem;
  margin: 0 auto;

  background-color: white;

  h2 {
    margin-top: 1rem;
    margin-bottom: 1rem;

    font-size: 1.25rem;
    font-weight: 700;
  }
`;

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
