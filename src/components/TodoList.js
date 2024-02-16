import React from "react";
import "./Todo.css";
function TodoList(props) {
  // console.log(props);
  return (
    <div>
      <li className="list-item">
        <p className="single-list-item">{props.item}</p>
        <span className="icons">
          <i
            className="fa fa-trash"
            onClick={() => props.handleDelete(props.index)}
          ></i>
        </span>
      </li>
    </div>
  );
}

export default TodoList;
