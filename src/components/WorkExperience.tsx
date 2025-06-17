import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Paper,
  Modal,
  IconButton,
  List,
  ListItem,
  ListItemText 
} from '@mui/material';
import { motion } from 'framer-motion';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import CloseIcon from '@mui/icons-material/Close';

const experiences = [
  {
    title: "Full-Stack Software Engineer Intern",
    company: "Genda AI Learning Platform",
    location: "Frisco, TX",
    period: "June 2024 - Present",
    description: [
      "Developed and presented cloud-based solutions leveraging AWS services, resulting in reduced infrastructure costs, accelerated development timelines, and minimized operational overhead.",
      "Developed and integrated a custom Large Language Model (LLM) to dynamically generate lab instructions, assignments, quizzes, and flashcards in LaTeX format, with automated PDF generation for efficient and streamlined content delivery.",
      "Optimized AWS cloud infrastructure by restructuring VPC configurations, implementing batch processing for RDS queries, and refining EC2 Auto Scaling policies. Achieved a 50% reduction in server utilization and overall cloud expenses.",
      "Designed and developed production-grade frontend components and implemented backend functionality to enable seamless database access and dynamic data display through robust API communication between frontend and backend systems.",
      "Performed comprehensive unit testing to validate proper execution and functionality, including handling edge cases effectively.",
      "Consistently resolved bugs and provided prompt client support, ensuring immediate issue resolution and maintaining high customer satisfaction."
    ],
    technologies: ["AWS", "LLM", "LaTeX", "VPC", "RDS", "EC2", "Auto Scaling", "Frontend", "Backend", "API", "Unit Testing"],
    achievements: ["50% reduction in server utilization", "Reduced infrastructure costs", "Improved content delivery efficiency"]
  },
  {
    title: "Software Engineer Intern",
    company: "State Farm Insurance",
    location: "Richardson, TX",
    period: "June 2022 - Aug 2023",
    description: [
      "Developed a web application integrated with the AWS Cloud platform to enable seamless data retrieval, deletion, and modification.",
      "Deployed a Python program on the AWS Cloud platform, accessible via a REST API, to dynamically generate SQL code for a PostgreSQL database.",
      "Redesigned a web interface for on-premises data clusters and services, enhancing resource monitoring and improving user experience."
    ],
    technologies: ["AWS", "Python", "REST API", "PostgreSQL", "Web Development", "UI/UX"],
    achievements: ["Improved data management efficiency", "Enhanced monitoring capabilities", "Streamlined database operations"]
  }
];

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: '800px',
  maxHeight: '90vh',
  overflow: 'auto',
  bgcolor: 'rgba(18, 18, 18, 0.95)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  backdropFilter: 'blur(10px)',
};

const WorkExperience = () => {
  const [selectedExp, setSelectedExp] = useState<number | null>(null);

  const handleOpen = (index: number) => setSelectedExp(index);
  const handleClose = () => setSelectedExp(null);

  return (
    <Box
      id="experience"
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
          Work Experience
        </Typography>

        <Timeline position="alternate">
          {experiences.map((experience, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                color="text.secondary"
                sx={{ 
                  m: 'auto 0',
                  background: 'rgba(0, 0, 0, 0.3)',
                  padding: 2,
                  borderRadius: 2,
                  backdropFilter: 'blur(10px)'
                }}
              >
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * index }}
                >
                  <Typography variant="h6" component="span">
                    {experience.period}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {experience.location}
                  </Typography>
                </motion.div>
              </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineDot 
                  sx={{ 
                    background: 'linear-gradient(45deg, #00a0ff 30%, #ff4081 90%)',
                    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                    cursor: 'pointer'
                  }}
                  onClick={() => handleOpen(index)}
                />
                <TimelineConnector sx={{ background: 'linear-gradient(45deg, #00a0ff 30%, #ff4081 90%)' }} />
              </TimelineSeparator>

              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * index }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      padding: 3,
                      background: 'rgba(0, 0, 0, 0.3)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      cursor: 'pointer',
                      transition: 'transform 0.2s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.02)'
                      }
                    }}
                    onClick={() => handleOpen(index)}
                  >
                    <Typography variant="h5" component="h3" 
                      sx={{ 
                        background: 'linear-gradient(45deg, #00a0ff 30%, #ff4081 90%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      {experience.title}
                    </Typography>
                    <Typography variant="h6" color="primary" gutterBottom>
                      {experience.company}
                    </Typography>
                    <Box component="ul" sx={{ mt: 1, pl: 2 }}>
                      {experience.description.slice(0, 2).map((point, idx) => (
                        <Typography
                          component="li"
                          key={idx}
                          sx={{ 
                            mb: 1,
                            color: 'text.secondary',
                            '&:last-child': { mb: 0 }
                          }}
                        >
                          {point}
                        </Typography>
                      ))}
                      {experience.description.length > 2 && (
                        <Typography
                          sx={{ 
                            color: 'primary.main',
                            mt: 1,
                            fontStyle: 'italic'
                          }}
                        >
                          Click to see more...
                        </Typography>
                      )}
                    </Box>
                  </Paper>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>

      <Modal
        open={selectedExp !== null}
        onClose={handleClose}
        aria-labelledby="experience-modal-title"
      >
        <Box sx={modalStyle}>
          {selectedExp !== null && (
            <>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                <Box>
                  <Typography 
                    id="experience-modal-title"
                    variant="h4"
                    sx={{ 
                      background: 'linear-gradient(45deg, #00a0ff 30%, #ff4081 90%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    {experiences[selectedExp].title}
                  </Typography>
                  <Typography variant="h5" color="primary" gutterBottom>
                    {experiences[selectedExp].company}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {experiences[selectedExp].location} | {experiences[selectedExp].period}
                  </Typography>
                </Box>
                <IconButton 
                  onClick={handleClose}
                  sx={{ 
                    color: 'text.secondary',
                    '&:hover': { color: 'primary.main' }
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>

              <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                Key Responsibilities & Achievements
              </Typography>
              <List>
                {experiences[selectedExp].description.map((point, idx) => (
                  <ListItem key={idx}>
                    <ListItemText 
                      primary={point}
                      sx={{ 
                        '& .MuiListItemText-primary': { 
                          color: 'text.primary',
                          lineHeight: 1.6 
                        }
                      }}
                    />
                  </ListItem>
                ))}
              </List>

              <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                Technologies & Skills
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                {experiences[selectedExp].technologies.map((tech, idx) => (
                  <Paper
                    key={idx}
                    sx={{
                      px: 2,
                      py: 0.5,
                      background: 'rgba(0, 160, 255, 0.1)',
                      border: '1px solid rgba(0, 160, 255, 0.2)',
                      borderRadius: 2
                    }}
                  >
                    <Typography variant="body2">{tech}</Typography>
                  </Paper>
                ))}
              </Box>

              <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                Key Achievements
              </Typography>
              <List>
                {experiences[selectedExp].achievements.map((achievement, idx) => (
                  <ListItem key={idx}>
                    <ListItemText 
                      primary={achievement}
                      sx={{ 
                        '& .MuiListItemText-primary': { 
                          color: 'primary.main',
                          fontWeight: 500
                        }
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default WorkExperience; 