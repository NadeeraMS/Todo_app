// src/components/Auth/Login.jsx
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, TextField, Typography, Container, Paper } from '@mui/material';

const Login = () => {
  const { login } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    }),
    onSubmit: (values) => {
      login(values.email, values.password);
    },
  });

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ p: 4, mt: 5 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Login
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button variant="contained" color="primary" type="submit" fullWidth sx={{ mt: 2 }}>
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
