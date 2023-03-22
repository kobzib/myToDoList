import React from "react";
import styled from "styled-components";

const Root = styled.div`
  background-color: #5463ff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  margin-top: 0;
  padding: 16px 32px;
  color: white;
  font-size: 3rem;
  font-weight: bold;
  font-family: "Lato", sans-serif;
`;
function Header() {
  return <Root>Your ToDO list</Root>;
}

export default Header;
