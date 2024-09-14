// src/components/Todo/TodoItem.jsx
import React, { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import { Box, Button, Card, CardContent, Typography, Grid } from '@mui/material';

const TodoItem = ({ todo }) => {
  const { toggleCompletion, deleteTodo, startEditing } = useContext(TodoContext);

  return (
    <Card sx={{ mt: 2, backgroundColor: '#3a3f44' }}>
      <CardContent>
        <Typography variant="h5" sx={{ color: '#ecf0f1' }}>{todo.title}</Typography>
        <Typography variant="body2" sx={{ color: '#bdc3c7' }}>{todo.description}</Typography>
        <Grid container spacing={2} sx={{ mt: 1 }} className="left-align">
          <Grid item xs={4}>
            <Button
              variant="outlined"
              color={todo.completed ? 'success' : 'secondary'}
              onClick={() => toggleCompletion(todo.id)}
              className="button-left"
            >
              {todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              color="info"
              onClick={() => startEditing(todo)}
              className="button-left"
            >
              Edit
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              color="error"
              onClick={() => deleteTodo(todo.id)}
              className="button-left"
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TodoItem;
