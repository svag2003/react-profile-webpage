import React from 'react';
import { Box, Typography, Container, Button, Avatar } from '@mui/material';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <Box
      id="home"
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      sx={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        py: 8,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container 
        maxWidth="md"
        sx={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Avatar
            src="/headshot.jpg"
            alt="Ashis Gajula"
            sx={{
              width: 200,
              height: 200,
              margin: '0 auto 2rem',
              border: '4px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 160, 255, 0.2)',
              background: 'linear-gradient(45deg, rgba(0, 160, 255, 0.1), rgba(255, 64, 129, 0.1))',
              backdropFilter: 'blur(10px)',
              transform: 'rotate(180deg)',
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05) rotate(180deg)',
                boxShadow: '0 12px 48px rgba(0, 160, 255, 0.3)',
                border: '4px solid rgba(255, 255, 255, 0.2)',
              }
            }}
          />
        </motion.div>
        <Typography
          component={motion.h1}
          variant="h1"
          gutterBottom
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Hi, I'm Ashis Gajula
        </Typography>
        <Typography
          component={motion.h2}
          variant="h5"
          color="textSecondary"
          gutterBottom
          sx={{ mb: 4 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Full Stack Developer | Problem Solver | Cloud Enthusiast | AI Engineer
        </Typography>
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ mr: 2 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Me
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero; 