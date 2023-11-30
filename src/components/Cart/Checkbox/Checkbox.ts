import styled from "@emotion/styled";

export const CheckBox = styled.input`
  appearance: none;

  margin-right: 0.5rem;
  margin-left: 0;

  width: 0.9rem;
  height: 0.9rem;

  border: 2px solid #ececec;
  border-radius: 3px;

  &:checked {
    border-color: #ff5100;
    background-image: url("/checkbox.svg");

    background-repeat: no-repeat;
    background-size: 90%;
    background-position: center;
  }
`;
