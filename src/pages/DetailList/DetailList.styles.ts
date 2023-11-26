import styled from "@emotion/styled";

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 24px;
  align-items: start;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 20px;
  }
`;
export const container = styled.div`
  // padding: 0 10em;
  // margin-top: 20px;
  padding: 3.19rem 12.5rem 3.18rem 12.5rem;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: auto;
`;
