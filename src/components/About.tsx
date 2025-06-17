import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import PersonIcon from '@mui/icons-material/Person';
import BuildIcon from '@mui/icons-material/Build';
import TiltedCard from './TiltedCard';

const About = () => {
  return (
    <Box
      id="about"
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
          About Me
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(2, 1fr)'
            },
            gap: 4,
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <TiltedCard
              containerHeight="300px"
              containerWidth="100%"
              imageHeight="300px"
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
                textAlign: 'center',
                p: 3
              }}>
                <PersonIcon 
                  sx={{ 
                    mb: 2,
                    background: 'linear-gradient(45deg, #00a0ff 30%, #ff4081 90%)',
                    borderRadius: '50%',
                    p: 1,
                    fontSize: '3rem'
                  }} 
                />
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    background: 'linear-gradient(45deg, #00a0ff 30%, #ff4081 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 600,
                    mb: 2
                  }}
                >
                  Who I Am
                </Typography>
                <Typography
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.7,
                  }}
                >
                  I'm a Full Stack Developer Specialized in Cloud and AI. I have been programming for 8 years and graduated from UTD with a Bachelors in Computer Science. I am always looking to grow and meet new people.
                </Typography>
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
              containerHeight="300px"
              containerWidth="100%"
              imageHeight="300px"
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
                textAlign: 'center',
                p: 3
              }}>
                <BuildIcon 
                  sx={{ 
                    mb: 2,
                    background: 'linear-gradient(45deg, #00a0ff 30%, #ff4081 90%)',
                    borderRadius: '50%',
                    p: 1,
                    fontSize: '3rem'
                  }} 
                />
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    background: 'linear-gradient(45deg, #00a0ff 30%, #ff4081 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 600,
                    mb: 2
                  }}
                >
                  What I Do
                </Typography>
                <Typography
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.7,
                  }}
                >
                  I develop full-stack applications leveraging AI and LLMs to meet customer needs while building affordable and scalable solutions.
                  I leverage cloud services to build scalable and cost-effective solutions that meet customer demands while looking to automate processes and save time.
                </Typography>
              </Box>
            </TiltedCard>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default About; 