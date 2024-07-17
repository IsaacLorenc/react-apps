import React from "react";

const Todo = ({ id, task, removeTodo, editTodo }) => {
  const handleRemove = () => removeTodo(id);
  const handleEdit = () => {
    const updatedTask = prompt("Enter new task:", task);
    if (updatedTask) {
      editTodo(id, updatedTask);
    }
  };

  return (
    <li>
      <div>{task}</div>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleRemove}>X</button>
    </li>
  );
};

export default Todo;