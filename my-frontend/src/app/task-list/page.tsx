"use client";

import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container, 
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Fab,
  ThemeProvider,
  createTheme
} from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
import Link from 'next/link';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2674DE', 
    },
  },
});

interface Task {
  id: number;
  name: string;
  status: 'Pending' | 'Done';
}

const initialTasks: Task[] = [
  { id: 1, name: 'Complete the report', status: 'Pending' },
  { id: 2, name: 'Update website', status: 'Pending' },
  { id: 3, name: 'Email client', status: 'Done' },
  { id: 4, name: 'Make a call', status: 'Done' },
];

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const handleEdit = (taskId: number) => {
    console.log('Edit task:', taskId);
  };

  const handleDelete = (taskId: number) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleAddTask = () => {
    console.log('Add new task');
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: '#2674DE' }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Task Manager
            </Typography>
            <Button color="inherit" sx={{ mx: 1 }} component={Link} href="/">
              Home
            </Button>
            <Button color="inherit" sx={{ mx: 1 }} component={Link} href="/task-list">
              Tasks
            </Button>
            <Button color="inherit" sx={{ mx: 1 }}>
              About
            </Button>
          </Toolbar>
        </AppBar>

       
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 'bold',
              mb: 4,
              color: '#333',
              textAlign: 'center',
            }}
          >
            Task List
          </Typography>

          
          <TableContainer component={Paper} sx={{ mt: 4 }}>
            <Table sx={{ minWidth: 650 }} aria-label="task table">
              <TableHead>
                <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                  <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                    Task Name
                  </TableCell>
                  <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                    Status
                  </TableCell>
                  <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tasks.map((task) => (
                  <TableRow
                    key={task.id}
                    sx={{ 
                      '&:last-child td, &:last-child th': { border: 0 },
                      '&:hover': { backgroundColor: '#f9f9f9' }
                    }}
                  >
                    <TableCell sx={{ fontSize: '1rem', py: 2 }}>
                      {task.name}
                    </TableCell>
                    <TableCell sx={{ fontSize: '1rem', py: 2 }}>
                      {task.status}
                    </TableCell>
                    <TableCell sx={{ py: 2 }}>
                      <IconButton
                        aria-label="edit"
                        onClick={() => handleEdit(task.id)}
                        sx={{ mr: 1, color: '#666' }}
                      >
                        <Edit />
                      </IconButton>
                      <IconButton
                        aria-label="delete"
                        onClick={() => handleDelete(task.id)}
                        sx={{ color: '#666' }}
                      >
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>

       
        <Fab
          color="primary"
          aria-label="add"
          onClick={handleAddTask}
          sx={{
            position: 'fixed',
            bottom: 32,
            right: 32,
            backgroundColor: '#2674DE',
            '&:hover': {
              backgroundColor: '#2674DE',
            },
          }}
        >
          <Add />
        </Fab>
      </Box>
    </ThemeProvider>
  );
}
