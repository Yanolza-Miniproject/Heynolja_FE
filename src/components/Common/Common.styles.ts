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
  border-bottom: 2px solid #f6f6f6;

  height: 80px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 100%;
    padding: 0;
  }

  @media (max-width: 480px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 100%;
    padding: 0;
  }
`;

export const headerWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 300;
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
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(3, auto);
  grid-column-gap: 10rem;
  grid-row-gap: 0.5rem;
  justify-content: space-between;
  align-items: center;

  width: 70%;

  padding: 3rem 12rem;
  margin-bottom: 1rem;
  background-color: #f6f6f6;

  font-size: 0.9rem;

  .title {
    font-weight: 700;
    margin-bottom: 1.5rem;
  }
  .team {
    font-size: 1.1rem;
    font-weight: 700;

    img {
      width: 1.2rem;
      height: 1.2rem;
    }
  }

  cursor: default;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(2, auto);
    grid-column-gap: 5rem;
    grid-row-gap: 0.5rem;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 100%;
    padding: 2rem 0;

    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(2, auto);
    grid-column-gap: 1rem;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 5rem;
    padding: 1rem 0;

    font-size: 0.9rem;
  }
`;

export const SidebarContainer = styled.aside`
  position: fixed;
  right: 1rem;
  bottom: 0;

  border-radius: 1.5rem;
  background-color: white;

  transform: translateY(-50%);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
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

export const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.15);

  z-index: 999;
`;

export const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 1rem;
  border-radius: 2rem;

  width: 13rem;
  background-color: white;

  p {
    margin-top: 1rem;

    color: #666666;
    text-align: center;
    line-height: 1.2rem;

    cursor: default;
  }
`;
