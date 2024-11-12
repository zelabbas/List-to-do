import { useState } from "react";
import "./CSS/Todo.css";
import { useRef } from "react";
import { useEffect } from "react";
import TodoItmes from "./TodoItmes";

let count = 0;

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const add = () => {
    if (inputRef.current.value == "") return;
    setTodos([
      ...todos,
      { no: count++, text: inputRef.current.value, display: "" },
    ]);
    inputRef.current.value = "";
    localStorage.setItem("todos_count", count);
  };

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")));
    count = localStorage.getItem("todos_count");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      console.log(todos);
      localStorage.setItem("todos", JSON.stringify(todos));
    }, 1000);
  }, [todos]);

  return (
    <div className="todo">
      <div className="todo-header">To-do-List</div>
      <div className="todo-add">
        <input
          type="text"
          ref={inputRef}
          placeholder="Add your task here... "
          className="todo-input"
          onKeyDown={(e) => e.key === "Enter" && add()}
        />
        <div onClick={() => add()} className="todo-add-btn">
          ADD
        </div>
      </div>
      <div className="todo-list">
        {todos.map((item, index) => {
          return (
            <TodoItmes
              key={index}
              no={item.no}
              display={item.display}
              text={item.text}
              setTodos={setTodos}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
