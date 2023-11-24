import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const flexCenter = `
  display: flex;
  align-items: center;
  justify-content: center;
`;

const blinkAnimation = keyframes`
  0%, 50%, 100% {
    opacity: 1;
  }
  25%, 75% {
    opacity: 0.5;
  }
`;

export const Container = styled.div`
  ${flexCenter}
  flex-direction: column;

  padding: 0 5rem;

  height: calc(100vh - 80px - 300px);
`;

export const Wrapper = styled.div`
  ${flexCenter}

  margin-bottom: 2rem;

  height: 4rem;
`;

export const P = styled.div`
  font-size: 5rem;
`;

export const DotWrap = styled.div`
  display: flex;
  align-items: end;

  height: 100%;
  width: 100%;
`;

const Dot = styled.div`
  margin: 0 0.3rem;

  width: 0.8rem;
  height: 0.8rem;

  border-radius: 50%;
  background-color: #222;

  animation: ${blinkAnimation} 2s infinite;
`;

export const Dot1 = styled(Dot)`
  animation-delay: 0s;
`;

export const Dot2 = styled(Dot)`
  animation-delay: 0.2s;
`;

export const Dot3 = styled(Dot)`
  animation-delay: 0.4s;
`;

export const Text = styled.div`
  ${flexCenter}
  flex-direction: column;

  margin-bottom: 1rem;

  & > p:first-of-type {
    margin-bottom: 0.3rem;

    font-size: 1.3rem;
    font-weight: 500;
  }
`;
