import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Input from "./app/components/Input";
import { selectTodoList } from "./features/todoSlice";
import TodoItem from "./TodoItem";

function App() {
  const todoList = useSelector(selectTodoList);
  return (
    <div className='App'>
      <div className='app__container'>
        <div className='app__todoContainer'>
          {todoList.map((todo) => (
            <TodoItem
              name={todo.item}
              done={todo.done}
              id={todo.id}
              key={todo.id}
            />
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
