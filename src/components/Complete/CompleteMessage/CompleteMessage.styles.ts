import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-top: 3rem;

  width: 100%;
  height: 281px;

  border: 1px solid #e6e6e6;
  border-radius: 10px;
`;

export const TextTop = styled.p`
  margin-bottom: 1.5rem;

  font-size: 30px;
  font-weight: bold;
`;

export const TextMid = styled.p`
  padding: 0.2rem;

  font-size: 18px;
  font-weight: 500;

  & > span {
    color: #ff5100;
    font-weight: bold;
  }
`;

export const AmountWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 1rem;

  font-weight: bold;
  color: #222;
`;
