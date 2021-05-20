import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveTodo } from "../../features/todoSlice";
import "./Input.css";

const Input = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const addTodo = (e) => {
    e.preventDefault();
    dispatch(
      saveTodo({
        item: input,
        done: false,
        id: Date.now(),
      })
    );
    setInput("");
  };
  return (
    <div className='input'>
      <form>
        <input
          type='text'
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
          placeholder='Enter Here'
        />
        <button onClick={addTodo}>Add</button>
      </form>
    </div>
  );
};

export default Input;
