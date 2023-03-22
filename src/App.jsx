import React from "react";
import Header from "./components/Header";
import InputRow from "./components/InputRow";
import List from "./components/List";
import styled from "styled-components";

const Root = styled.div`
  background-color: #ececec;
`;

export default function App() {
  return (
    <Root>
      <Header />
      <InputRow />
    </Root>
  );
}
