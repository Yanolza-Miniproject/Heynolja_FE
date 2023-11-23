import styled from "@emotion/styled";

export const Empty = styled.div`
  flex-grow: 1;
`;

export const Container = styled.div<{ check: boolean }>`
  margin-bottom: 1rem;
  padding: 1.2rem;

  border-radius: 10px;
  border: ${(props) =>
    props.check ? "1px solid #ff5100" : "1px solid #e6e6e6"};
`;

export const itemTop = styled.div`
  // border: 1px solid red;
  display: flex;
  align-items: center;

  position: relative;
  margin-bottom: 1rem;

  font-size: 18px;
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

export const itemBottom = styled.div`
  display: flex;
  font-weight: normal;
`;

export const Image = styled.div`
  margin-right: 1.5rem;

  background-image: url("https://picsum.photos/200");
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;

  width: 130px;
  height: 130px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  & > p {
    margin: 0.3rem 0;
  }

  & > p > span {
    font-weight: 600;
  }

  & > p:last-of-type {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-grow: 1;

    font-size: 18px;
    font-weight: bold;
  }
`;
