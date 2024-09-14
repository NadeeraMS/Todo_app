import React, { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import { Box, Button, Card, CardContent, Typography, Grid } from '@mui/material';

const CompletedTodoItem = ({ todo }) => {
  const { deleteCompletedTodo } = useContext(TodoContext);

  return (
    <Card sx={{ mt: 2, backgroundColor: '#3a3f44' }}>
      <CardContent>
        <Typography variant="h5" sx={{ color: '#22363b' }}>{todo.title}</Typography>
        <Typography variant="body2" sx={{ color: '#22363b' }}>{todo.description}</Typography>
        <Typography variant="body2" color="textSecondary">
          Completed at: {todo.completedAt}
        </Typography>
        <Grid container spacing={2} sx={{ mt: 1 }} className="left-align">
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="error"
              onClick={() => deleteCompletedTodo(todo.id)}
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

export default CompletedTodoItem;
