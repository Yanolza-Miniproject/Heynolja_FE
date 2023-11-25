import styled from "@emotion/styled";

export const Empty = styled.div`
  flex-grow: 1;
`;

export const Item = styled.div`
  display: flex;

  padding: 0.5rem 0;

  & > div > p {
    margin: 0;
  }

  & > div > p:last-of-type {
    font-weight: normal;
    font-size: 0.8rem;
  }
`;

export const Container = styled.div`
  position: sticky;
  top: 2rem;
  left: 0;

  padding: 1rem;

  border: 1px solid #e6e6e6;
  border-radius: 10px;
`;

export const Top = styled.div``;

export const Line = styled.div`
  margin-top: 1rem;

  width: 100%;

  border: 1.5px solid #d3d3d3;
`;

export const Bottom = styled.div`
  display: flex;

  padding: 1rem 0;
`;

export const Button = styled.button`
  height: 40px;
  width: 100%;
`;
