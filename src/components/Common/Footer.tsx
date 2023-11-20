/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Footer = () => {
  return (
    <div css={footerStyle}>
      <h5>footer</h5>
    </div>
  );
};

export default Footer;

const footerStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 2em;
  height: 100px;
  background-color: #f6f6f6;

  h5 {
    font-weight: 400;
  }
`;
