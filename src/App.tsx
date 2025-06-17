import React from 'react';
import { ThemeProvider, createTheme, CssBaseline, Container, Box } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Aurora from './components/Aurora';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00a0ff',
      light: '#33b4ff',
      dark: '#0070b3',
    },
    secondary: {
      main: '#ff4081',
      light: '#ff669a',
      dark: '#b22c5a',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 600,
      background: 'linear-gradient(45deg, #00a0ff 30%, #ff4081 90%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 500,
      background: 'linear-gradient(45deg, #00a0ff 30%, #ff4081 90%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '2rem',
    },
    h5: {
      color: '#00a0ff',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#1e1e1e',
          '&:hover': {
            backgroundColor: '#252525',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(18, 18, 18, 0.8)',
          backdropFilter: 'blur(8px)',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        minHeight: '100vh',
        position: 'relative',
        background: 'rgba(18, 18, 18, 0.3)',
        overflow: 'hidden'
      }}>
        <Aurora 
          colorStops={["#00a0ff", "#ff4081", "#00a0ff"]}
          blend={1}
          amplitude={0.8}
          speed={0.8}
        />
        <Box sx={{ 
          position: 'relative', 
          zIndex: 2,
          minHeight: '100vh',
          backdropFilter: 'blur(10px)',
          background: 'rgba(18, 18, 18, 0.3)',
        }}>
          
          <Container>
            <Hero />
            <About />
            <WorkExperience />
            <Certifications />
            <Projects />
            <Skills />
            <Contact />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
