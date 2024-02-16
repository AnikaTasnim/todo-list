import React, { useState } from "react";
import "./Todo.css";
function Todo(props) {
  const [inputText, setInpurText] = useState("");

  return (
    <div>
      <div className="input-container">
        <input
          type="text"
          value={inputText}
          className="add-todo-list"
          placeholder="write your todo here"
          onChange={(test) => {
            setInpurText(test.target.value);
          }}
        />
        <button
          className="add-btn"
          onClick={() => {
            props.addList(inputText);
            setInpurText("");
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Todo;
