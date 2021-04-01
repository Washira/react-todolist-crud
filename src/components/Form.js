import React, { useState } from "react";
import firebase from "../utils/firebase";

function Form() {
  const [title, setTitle] = useState("");

  const handleOnChange = (e) => {
    setTitle(e.target.value);
    e.preventDefault();
  };

  const createTodo = (e) => {
    const todoRef = firebase.database().ref("Todo");
    const todo = {
      title,
      complete: false,
    };
    todoRef.push(todo);
    e.preventDefault();
  };

  return (
    <div>
      <input type="text" onChange={handleOnChange} value={title} />
      <button className="add-btn" onClick={createTodo}>
        Add
      </button>
    </div>
  );
}

export default Form;
