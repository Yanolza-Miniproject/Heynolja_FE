import styled from "@emotion/styled";

export const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(1fr, 4);

  height: 700px;

  background-color: white;
`;

export const Banner = styled.div`
  height: 100px;
  padding: 2em 5em;

  background-color: #191554;

  font-size: 3em;
  color: white;
  font-weight: 800;
`;
