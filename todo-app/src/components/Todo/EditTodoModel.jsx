// src/components/Todo/EditTodoModal.jsx
import React, { useContext, useState, useEffect } from 'react';
import { TodoContext } from '../../context/TodoContext';
import { Box, Button, TextField, Modal, Typography, Paper } from '@mui/material';

const EditTodoModal = () => {
  const { currentTodo, editTodo, stopEditing } = useContext(TodoContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (currentTodo) {
      setTitle(currentTodo.title);
      setDescription(currentTodo.description);
    }
  }, [currentTodo]);

  const handleSave = () => {
    editTodo(currentTodo.id, { title, description });
    stopEditing();
  };

  return (
    <Modal open={Boolean(currentTodo)} onClose={stopEditing}>
      <Box sx={{ width: 400, margin: 'auto', mt: 15 }}>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h6" gutterBottom>Edit Task</Typography>
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
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button variant="contained" onClick={handleSave} color="primary">
              Save
            </Button>
            <Button variant="outlined" onClick={stopEditing}>
              Cancel
            </Button>
          </Box>
        </Paper>
      </Box>
    </Modal>
  );
};

export default EditTodoModal;
