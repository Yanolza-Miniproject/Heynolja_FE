import styled from "@emotion/styled";
import emotionReset from "emotion-reset";
import { css } from "@emotion/react";

export const globalStyle = css`
  ${emotionReset}

  @font-face {
    font-family: "Noto Sans KR";
    src: url("../assets/font/NotoSans-Regular.woff2") format("font-woff2");
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

  padding: 0 5rem;

  background-color: white;
  border-bottom: 1px solid #f6f6f6;

  height: 80px;
`;

export const headerLeftWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 2.5rem;

  span {
    position: relative;

    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 0.05rem;

    &::after {
      content: "";
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      right: 0;

      height: 1.5px;
      background-color: #ff5100;
      opacity: 0;
      transition: opacity 0.2s;
    }

    &:hover::after {
      opacity: 1;
    }
  }
`;

export const headerRightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;

  a {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    &:nth-of-type(2)::after,
    &:nth-of-type(3)::after,
    &:nth-last-of-type(1)::after {
      content: "";
      position: absolute;
      left: -10px;
      height: 0.8rem;
      top: 50%;
      margin-top: -0.4rem;
      color: #b3b3b3;
      border-left: 1px solid #dbdbdb;
    }
  }

  img {
    width: 1.4rem;
    height: 1.4rem;
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

  padding: 0 5rem;

  height: 200px;

  background-color: #f6f6f6;
`;

export const footerLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 0 2rem;
  gap: 1rem;

  height: 100px;
  background-color: #f6f6f6;

  font-size: 0.8rem;
  line-height: 1.4rem;
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

  gap: 5rem;

  width: 25rem;
  height: 100px;

  font-size: 0.8rem;
  line-height: 1.3rem;
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

  gap: 1rem;
`;

export const footerBottomWrapper = styled.div`
  padding: 1rem 6.5rem;
  margin-bottom: 2rem;

  text-align: left;
  font-size: 0.8rem;
  color: #646464;
`;

export const footerLine = styled.hr`
  margin: 0 6rem;

  height: 1px;

  border: none;
  background-color: #d9d9d9;
`;

export const SidebarContainer = styled.aside`
  position: fixed;
  right: 1rem;
  bottom: 0;

  border-radius: 1.5rem;
  background-color: white;

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
  padding: 0.5rem;

  outline: none;
  appearance: none;
  border: none;
  border-radius: 20rem;
  background-color: #fff;

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
    width: 5rem;
    height: 1rem;
    margin: auto;
  }

  font-size: 0.8rem;
  font-weight: 600;
  text-align: center;
  color: black;
`;
