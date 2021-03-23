import React, { useState, useEffect } from "react";
import firebase from "../utils/firebase";
import Todo from "./Todo";

function Todolist() {
  const [todoList, setTodoList] = useState();

  useEffect(() => {
    const todoRef = firebase.database().ref("Todo");
    //listen every time data change in todoRef
    todoRef.on("value", (snapshot) => {
      const todos = snapshot.val();
      const todoList = [];
      for (let id in todos) {
        todoList.push({ id, ...todos[id] });
      }
      setTodoList(todoList);
    });
  }, []);
  return (
    <div>
      {todoList
        ? todoList.map((todo, index) => <Todo todo={todo} key={index} />)
        : ""}
    </div>
  );
}

export default Todolist;
