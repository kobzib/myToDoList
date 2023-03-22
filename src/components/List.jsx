import React, { useCallback, useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 10px;
  border: solid;
  font-family: "Lato", sans-serif;
  font-size: 1.5rem;
  text-decoration: none;
  padding-bottom: 3px;
  border-radius: 5px;
  background-color: #ffeaa7;
`;

const Li = styled.div`
  padding: 10px;
  border: solid;
  font-size: 1.5rem;
  width: 70%;
  margin: 20px;
`;

function List(props) {
  console.log(props);
  return (
    <div>
      <Li>{props.text}</Li>
      <Button onClick={() => props.removeItem(props.id)}>Delete</Button>
    </div>
  );
}

export default List;
