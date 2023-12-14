import styled from "@emotion/styled";

const Wrapper = styled.div`
  padding-top: 1rem;

  font-weight: bold;
`;

export const Empty = styled.div`
  flex-grow: 1;
`;

export const Container = styled.div`
  display: flex;

  padding: 0 5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const WrapTitle = styled.p`
  padding: 1rem 0;
`;

export const AllSelect = styled.div`
  display: flex;

  position: relative;
  margin-bottom: 1rem;

  font-size: 0.9rem;
  font-weight: normal;

  & > input {
    margin-right: 0.5rem;
  }

  & > label {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ListWrapper = styled(Wrapper)`
  margin-right: 1rem;

  width: 70%;

  & label {
    user-select: none;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const EstimateWrapper = styled(Wrapper)`
  width: 30%;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;
