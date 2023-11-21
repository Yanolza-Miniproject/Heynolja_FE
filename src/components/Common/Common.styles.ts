import styled from "@emotion/styled";
import emotionReset from "emotion-reset";
import { css } from "@emotion/react";

export const globalStyle = css`
  ${emotionReset}

  @font-face {
    font-family: "PretendardVariable";
    src: url("../assets/font/PretendardVariable.woff2")
      format("woff2-variations");
  }

  body {
    font-family: "Pretendard", sans-serif;
    color: black;
  }

  a {
    text-decoration: none;
    color: black;

    &:hover {
      text-decoration: none;
      color: #ff5100;
    }
  }
`;

export const outletStyle = styled.div`
  height: 700px;

  background-color: white;
`;

export const headerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0 5em;

  background-color: white;
  border-bottom: 1px solid #f6f6f6;

  height: 80px;
`;

export const headerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1.2em;

  a {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    &:nth-child(2)::after,
    &:nth-child(3)::after,
    &:last-child::after {
      content: "";
      position: absolute;
      left: -10px;
      height: 0.8em;
      top: 50%;
      margin-top: -0.4em;
      color: #b3b3b3;
      border-left: 1px solid #dbdbdb;
    }
  }

  img {
    width: 1.4em;
    height: 1.4em;
    transition:
      filter 0.2s,
      transform 0.1s;

    &:hover {
      filter: brightness(0) saturate(100%) invert(20%) sepia(100%)
        saturate(5000%) hue-rotate(11deg) brightness(100%) contrast(101%);
      transform: scale(1.2);
    }
  }
`;

export const footerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0 5em;

  height: 200px;

  background-color: #f6f6f6;
`;

export const footerLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 0 2em;
  gap: 1em;

  height: 100px;
  background-color: #f6f6f6;

  font-size: 0.8em;
  line-height: 1.7em;
  font-weight: 400;
  color: #646464;

  h5 {
    font-weight: 800;
    color: black;
  }
`;

export const footerRightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  gap: 5em;

  height: 100px;
  background-color: #f6f6f6;

  font-size: 0.8em;
  line-height: 1.7em;
  font-weight: 400;
  color: #646464;

  h5 {
    font-weight: 800;
    color: black;
  }
`;

export const footerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  gap: 1em;
`;

export const footerBottomWrapper = styled.div`
  padding: 1em 8em;
  margin-bottom: 2em;

  background-color: #f6f6f6;

  text-align: left;
  font-size: 0.8em;
  color: #646464;
`;

export const footerLine = styled.hr`
  margin: 0 6em;

  height: 1px;

  border: none;
  background-color: #d9d9d9;
`;
