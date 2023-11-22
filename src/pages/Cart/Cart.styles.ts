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

  padding: 0 5em;
`;

export const AllSelect = styled.div`
  display: flex;

  position: relative;
  margin-bottom: 1rem;

  font-size: 14px;
  font-weight: normal;

  & > input {
    margin-right: 0.5rem;
  }
`;

export const CheckBox = styled.input`
  appearance: none;

  margin-right: 0.5rem;
  margin-left: 0;

  width: 15px;
  height: 15px;

  border: 2px solid #ececec;
  border-radius: 0.2rem;

  &:checked {
    border-color: #ff5100;
    background-image: url("./src/assets/checkbox.svg");

    background-repeat: no-repeat;
    background-size: 90%;
    background-position: center;
  }
`;

export const ListWrapper = styled(Wrapper)`
  margin-right: 1rem;

  width: 70%;

  & label {
    user-select: none;
  }
`;

export const EstimateWrapper = styled(Wrapper)`
  width: 30%;
`;
