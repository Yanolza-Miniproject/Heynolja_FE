import styled from "@emotion/styled";
import emotionReset from "emotion-reset";
import { css } from "@emotion/react";

export const globalStyle = css`
  ${emotionReset}

  @font-face {
    font-family: "Noto Sans KR";
    src: url("../assets/font/NotoSans-Regular.woff2") format("woff2-variations");
  }

  body {
    font-family: "Noto Sans KR", sans-serif;
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

  width: 28em;
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

export const SidebarContainer = styled.aside`
  position: fixed;
  right: 1em;
  bottom: 0;

  border-radius: 0.625rem;

  transform: translateY(-50%);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 200;
`;

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NavButton = styled.button`
  display: block;

  padding: 0.5em;

  outline: none;
  appearance: none;
  border: none;
  background-color: #e6e6e6;

  color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;

  cursor: pointer;

  &:hover {
    background-color: #ff5100;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }

  img {
    display: block;
    width: 6em;
    height: 2em;
    margin: auto;
  }

  font-size: 0.8em;
  font-weight: 600;
  text-align: center;
  color: black;
`;

export const RecentlyViewedItem = styled.div`
  padding: 1em;

  width: 5em;
  height: 7em;

  font-size: 0.8em;
`;
