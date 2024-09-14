// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { TodoProvider } from './context/TodoContext';
import TodoList from './components/Todo/TodoList';
import AddTodo from './components/Todo/AddTodo';

function App() {
  return (
    <TodoProvider>
      <Router>
        <Routes>
          <Route path="/todos" element={<><AddTodo /><TodoList /></>} />
          <Route path="*" element={<Navigate to="/todos" />} />
        </Routes>
      </Router>
    </TodoProvider>
  );
}

export default App;
