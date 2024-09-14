
import React, { useContext, useState } from 'react';
import { TodoContext } from '../../context/TodoContext';
import { Box, Button, TextField, Paper, Container } from '@mui/material';

const AddTodo = () => {
  const { addTodo } = useContext(TodoContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(title, description);
    setTitle('');
    setDescription('');
  };

  return (
    <Container maxWidth="sm" className="container-center">
      <Paper elevation={3} sx={{ p: 3, mt: 3, width: '100%' }}>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            variant="filled"
            InputLabelProps={{ style: { color: '#ecf0f1' } }}
            InputProps={{ style: { color: '#ecf0f1' } }}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            variant="filled"
            InputLabelProps={{ style: { color: '#ecf0f1' } }}
            InputProps={{ style: { color: '#ecf0f1' } }}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mt: 2, width: '50%', textAlign: 'left' }}
            className="button-left"
          >
            Add Todo
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default AddTodo;
