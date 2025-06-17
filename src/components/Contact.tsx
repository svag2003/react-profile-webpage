import React from 'react';
import { Box, Typography, Container, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TiltedCard from './TiltedCard';

const Contact = () => {
  return (
    <Box
      id="contact"
      component={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      sx={{
        py: 8,
        background: 'transparent',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          component={motion.h2}
          variant="h2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          align="center"
          gutterBottom
          sx={{ mb: 6 }}
        >
          Contact Me
        </Typography>

        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: 'repeat(2, 1fr)'
          },
          gap: 4
        }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <TiltedCard
              containerHeight="400px"
              containerWidth="100%"
              imageHeight="400px"
              imageWidth="100%"
              scaleOnHover={1.05}
              rotateAmplitude={10}
              showTooltip={false}
            >
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column',
                height: '100%',
                width: '100%',
                p: 3
              }}>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    background: 'linear-gradient(45deg, #00a0ff 30%, #ff4081 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 600,
                    mb: 3,
                    textAlign: 'center'
                  }}
                >
                  Send Me a Message
                </Typography>
                <Box
                  component="form"
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                  }}
                >
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.23)',
                        },
                        '&:hover fieldset': {
                          borderColor: '#00a0ff',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#ff4081',
                        },
                      },
                    }}
                  />
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    type="email"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.23)',
                        },
                        '&:hover fieldset': {
                          borderColor: '#00a0ff',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#ff4081',
                        },
                      },
                    }}
                  />
                  <TextField
                    label="Message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.23)',
                        },
                        '&:hover fieldset': {
                          borderColor: '#00a0ff',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#ff4081',
                        },
                      },
                    }}
                  />
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      background: 'linear-gradient(45deg, #00a0ff 30%, #ff4081 90%)',
                      color: 'white',
                      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #0070b3 30%, #b22c5a 90%)',
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
              </Box>
            </TiltedCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <TiltedCard
              containerHeight="400px"
              containerWidth="100%"
              imageHeight="400px"
              imageWidth="100%"
              scaleOnHover={1.05}
              rotateAmplitude={10}
              showTooltip={false}
            >
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                width: '100%',
                p: 3,
                gap: 4
              }}>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    background: 'linear-gradient(45deg, #00a0ff 30%, #ff4081 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 600,
                    mb: 2,
                    textAlign: 'center'
                  }}
                >
                  Connect With Me
                </Typography>

                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  gap: 3,
                  alignItems: 'center'
                }}>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    gap: 2,
                    cursor: 'pointer',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'scale(1.05)'
                    }
                  }}>
                    <EmailIcon sx={{ 
                      fontSize: '2rem',
                      color: '#00a0ff'
                    }} />
                    <Typography color="text.secondary">
                      ashis.gajula@gmail.com
                    </Typography>
                  </Box>

                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    gap: 2,
                    cursor: 'pointer',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'scale(1.05)'
                    }
                  }}>
                    <LinkedInIcon sx={{ 
                      fontSize: '2rem',
                      color: '#0077b5'
                    }} />
                    <Typography color="text.secondary">
                      linkedin.com/in/ashisgajula
                    </Typography>
                  </Box>

                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    gap: 2,
                    cursor: 'pointer',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'scale(1.05)'
                    }
                  }}>
                    <GitHubIcon sx={{ 
                      fontSize: '2rem',
                      color: '#fff'
                    }} />
                    <Typography color="text.secondary">
                      github.com/ashisgajula
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </TiltedCard>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact; 