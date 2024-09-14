// src/components/Todo/TodoList.jsx
import React, { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import TodoItem from './TodoItem';
import { Container, Typography, Divider } from '@mui/material';
import EditTodoModal from './EditTodoModal';

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <Container maxWidth="md" className="container-center">
      <Typography variant="h4" gutterBottom sx={{ mt: 3, color: '#ecf0f1' }}>
        Todo List
      </Typography>
      {todos.length === 0 ? (
        <Typography variant="body1" color="textSecondary">
          No tasks available. Please add some tasks!
        </Typography>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
      <EditTodoModal />
    </Container>
  );
};

export default TodoList;
