import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    setTodos([...todos, { id: Date.now(), task }]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newTask) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, task: newTask } : todo)));
  };

  return (
    <div>
      <NewTodoForm addTodo={addTodo} />
      <ul>
        {todos.map(todo => (
          <Todo key={todo.id} id={todo.id} task={todo.task} removeTodo={removeTodo} editTodo={editTodo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
