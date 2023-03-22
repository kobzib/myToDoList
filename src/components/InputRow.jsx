import React, { useCallback, useState } from "react";
import List from "./List";
import styled from "styled-components";

const Input = styled.input`
  box-sizing: border-box;
  background-color: transparent;
  padding: 0.7rem;
  border: solid 3px;
  font-family: "Lato", sans-serif;
  font-size: 1.5rem;
  color: hsla(260, 2%, 25%, 0.7);
  width: 70%;
  margin: 20px;
`;

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

function inputRow() {
  const [newItem, setNewItem] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const addItem = useCallback(() => {
    setToDoList((preList) => {
      return [newItem, ...preList];
    });
    setNewItem("");
  }, [newItem]);

  function handleChange(event) {
    const newValue = event.target.value;
    setNewItem(() => newValue);
  }

  function itemDelete(id) {
    setToDoList((preList) => {
      return preList.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Input
        onChange={handleChange}
        placeholder="Add task..."
        value={newItem}
        type="text"
      />
      <Button onClick={addItem}>Add</Button>
      {console.log(toDoList)}
      {toDoList.map((item, index) => (
        <List key={index} id={index} text={item} removeItem={itemDelete} />
      ))}
    </div>
  );
}

export default inputRow;
