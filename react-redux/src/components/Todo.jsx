import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/crud/axtion";

const Todo = () => {
  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  console.log(todos, "99999999");

  const handleAdd = () => {
    if (input.trim() !== "") {
      dispatch(addTodo(input));
      setInput("");
    }
  };
  return (
    <div>
      <div>
        <h2>Todo app</h2>
      </div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Please Enter Text"
        />
        <button onClick={handleAdd}>Add Todo</button>
      </div>
      <div>
        {todos?.map((todo, index) => (
          <div>{todo}</div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
