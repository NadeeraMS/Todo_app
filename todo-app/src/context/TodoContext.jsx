import React, { createContext, useState, useEffect } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState(null); // For editing

  // Load from localStorage on mount
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);
  }, []);

  // Save to localStorage on state change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title, description) => {
    setTodos([...todos, { id: Date.now(), title, description, completed: false }]);
  };

  const editTodo = (id, updatedTodo) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, ...updatedTodo } : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleCompletion = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const startEditing = (todo) => {
    setCurrentTodo(todo);
  };

  const stopEditing = () => {
    setCurrentTodo(null);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        editTodo,
        deleteTodo,
        toggleCompletion,
        currentTodo,
        startEditing,
        stopEditing,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
