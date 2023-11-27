import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 8rem;
  gap: 4rem;

  height: 100%;
  max-height: 400px;
`;

export const IconWrapper = styled.div`
  .gps-icon {
    position: absolute;

    width: 6rem;
    height: 6rem;
  }

  .arrow-icon {
    position: relative;
    top: 40%;
    left: 50%;

    width: 7rem;
    height: 7rem;
    margin-left: -2.8rem;
    margin-top: -0.8rem;

    transform: translate(-50%, -50%);
    animation: rotate 0.9s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  .main-text {
    padding: 0.6rem;
    margin-bottom: 2.3rem;

    background-color: #ff5100;

    font-size: 2.3rem;
    font-weight: 700;
    color: white;
  }

  .text {
    margin-bottom: 0.5rem;

    font-size: 1.5rem;
  }

  .text-btn {
    display: flex;
    flex-direction: row;
    gap: 1.8rem;

    button {
      padding: 0.5rem;

      background-color: transparent;
      border: none;
      outline: none;
      appearance: none;
      border-top: 1px dashed #ff5100;
      border-bottom: 1px dashed #ff5100;

      font-size: 1.8rem;
      font-weight: 700;
      color: #191540;
      cursor: pointer;

      &:hover {
        color: #ff5100;
      }
    }
  }
`;
