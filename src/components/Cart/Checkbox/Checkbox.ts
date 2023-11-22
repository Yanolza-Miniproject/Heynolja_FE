import styled from "@emotion/styled";

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
