"use client";

import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Fab,
  ThemeProvider,
  createTheme
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2674DE',
    },
  },
});

export default function AboutPage() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: '#2674DE' }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Software Solutions
            </Typography>
            <Button color="inherit" sx={{ mx: 1 }} component={Link} href="/">
              Home
            </Button>
            <Button color="inherit" sx={{ mx: 1 }} component={Link} href="/contact">
              Contact
            </Button>
          </Toolbar>
        </AppBar>
        <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
          <Typography variant="h3" align="center" fontWeight={700} sx={{ mb: 4 }}>
            About
          </Typography>
          <Typography variant="h5" align="left" sx={{ mb: 4, color: '#222', maxWidth: 700, mx: 'auto', fontWeight: 400, lineHeight: 1.5 }}>
            We are a leading software solutions company specializing in delivering high-quality, innovative software products and services. Our team of expers is dedicated to helping businesses achieve their goals with tailor-made solutions.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 8 }}>
            <Fab color="primary" aria-label="add" sx={{ backgroundColor: '#4A90E2', '&:hover': { backgroundColor: '#2674DE' } }}>
              <AddIcon />
            </Fab>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
