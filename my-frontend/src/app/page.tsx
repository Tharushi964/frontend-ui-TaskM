
"use client";


import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4A90E2',
    },
  },
});

export default function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: '#2674DE' }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Task Manager
            </Typography>
            <Button color="inherit" sx={{ mx: 1 }}>
              Home
            </Button>
            <Button color="inherit" sx={{ mx: 1 }}>
              Tasks
            </Button>
            <Button color="inherit" sx={{ mx: 1 }}>
              About
            </Button>
          </Toolbar>
        </AppBar>
        <Container maxWidth="md">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '80vh',
              textAlign: 'center',
              py: 8,
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 'bold',
                mb: 4,
                color: '#333',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
              }}
            >
              Welcome to Our
              <br />
              Task Manager
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: 4,
                color: '#666',
                maxWidth: '600px',
                lineHeight: 1.6,
              }}
            >
              This is a simple task management application built with Next.js and Material UI.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                borderRadius: 2,
                backgroundColor: '#2674DE',
                '&:hover': {
                  backgroundColor: '#2674DE',
                },
              }}
            >
              Get Started
            </Button>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
