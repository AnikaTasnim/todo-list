import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";
function App() {
  const [listTodo, setListTodo] = useState([]);

  let addList = (data) => {
    console.log(data);
    setListTodo([...listTodo, data]);
    console.log(listTodo);
  };

  let deleteData = (dataTwo) => {
    const newListTodo = listTodo.filter((listTodo, index) => index !== dataTwo);
    setListTodo(newListTodo);
  };
  return (
    <div className="main-container">
      <div className="center-container">
        <h1 className="heading">ToDo List</h1>
        <Todo addList={addList} />

        <hr />
        {listTodo.map((listItem, i) => {
          return (
            <TodoList
              item={listItem}
              key={i}
              index={i}
              handleDelete={deleteData}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
