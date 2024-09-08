import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', isCompleted: false },
    { id: 2, text: 'Learn javascript in depth', completed: false },
  ]);
  const [mewTodo, setNewTodo] =useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false}]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id? {...todo, completed:!todo.completed} : todo
    ));
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id!== id));
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => toggleTodo(todo.id)} style={{
            textDecoration: todo.completed? 'line-through' : 'none', cursor:'pointer'
          }}>
            {todo.text}
            <button onClick={(e) => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default TodoList;