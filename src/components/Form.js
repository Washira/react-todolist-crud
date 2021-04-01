import React, { useState } from "react";
import firebase from "../utils/firebase";

function Form() {
  const [title, setTitle] = useState("");

  const handleOnChange = (e) => {
    setTitle(e.target.value);
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
      <form onSubmit={createTodo}>
        <input type="text" onChange={handleOnChange} />
        <button className="add-btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default Form;
