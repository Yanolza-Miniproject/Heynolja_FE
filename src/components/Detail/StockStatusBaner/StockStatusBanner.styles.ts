import styled from "@emotion/styled";

// interface BannerProps {
//   lowStock?: boolean;
//   outOfStock?: boolean;
// }

export const Banner = styled.div`
  //   background-color: #191554l;
  display: inline-block;
  padding: 4px 8px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: bold;
  text-align: center;
  color: white;
  background-color: #5645d6;
  cursor: default;
  margin-bottom: 16px;
  margin-right: 20px;
  ${(props) => props.lowStock && `background-color: #191554l;`}
  ${(props) => props.outOfStock && `background-color: red;`}
`;
