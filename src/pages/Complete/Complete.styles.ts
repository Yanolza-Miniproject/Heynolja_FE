import styled from "@emotion/styled";

const flexCenter = `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  ${flexCenter}

  padding: 0 5em;
`;

export const Line = styled.div`
  width: 100%;

  border: 1.5px solid #e6e6e6;
`;
