import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 5em;

  height: calc(100vh - 350px);
`;

export const Wrapper = styled.div`
  & > p:first-of-type {
    font-size: 7rem;
  }

  & > p:last-of-type {
    font-size: 3rem;
  }
`;
