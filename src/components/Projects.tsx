import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Modal,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Chip
} from '@mui/material';
import { motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CodeIcon from '@mui/icons-material/Code';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ArticleIcon from '@mui/icons-material/Article';
import TiltedCard from './TiltedCard';

const projects = [
  {
    title: "Instant Pot Customer Service Agent",
    description: "AI-powered customer support agent using RAG architecture",
    icon: <AutoAwesomeIcon />,
    details: [
      "Designed and deployed an AI-powered customer support agent using Retrieval-Augmented Generation (RAG) architecture",
      "Implemented in Python and integrated with OpenAI APIs to interpret and respond with accurate information from Instant Pot manuals and FAQs",
      "Utilized Pinecone as the vector database for storing and querying embedded document chunks for high-speed semantic search",
      "Hosted the full application on AWS EC2 for scalability and reliability",
      "Reduced customer service training time and information lookup overhead by over 75%, significantly improving support response time and consistency"
    ],
    technologies: ["Python", "OpenAI API", "RAG", "Pinecone", "AWS EC2", "Vector Database"],
    metrics: ["75% reduction in training time", "Improved response time", "Enhanced consistency"],
    category: "AI/ML"
  },
  {
    title: "Twitter Sentiment Analysis",
    description: "Machine learning-based sentiment analysis with high accuracy",
    icon: <CodeIcon />,
    details: [
      "Cleaned and preprocessed training data by removing noise, handling missing values, and standardizing input features",
      "Evaluated and compared multiple machine learning algorithms including Random Forest, Naive Bayes, Isolation Forest (IF)",
      "Performed hyperparameter optimization using Grid Search to fine-tune models",
      "Achieved over 95% accuracy by selecting the optimal model and parameter set",
      "Authored comprehensive technical documentation outlining methodology",
      "Presented findings to technical stakeholders"
    ],
    technologies: ["Python", "Random Forest", "Naive Bayes", "Isolation Forest", "Grid Search", "ML"],
    metrics: ["95% accuracy", "Optimized parameters", "Production-ready"],
    category: "Machine Learning"
  },
  {
    title: "Self Help RAG Chat Bot",
    description: "Mental health and psychology focused chat bot using RAG",
    icon: <PsychologyIcon />,
    details: [
      "Developed a chat bot supplied with mental health and psychology related documents",
      "Implemented RAG architecture to reduce hallucinations",
      "Provided expert advice based on verified sources",
      "Enhanced response accuracy through document context"
    ],
    technologies: ["Python", "RAG", "LLM", "Vector Database", "NLP"],
    metrics: ["Reduced hallucinations", "Expert-level advice", "Verified sources"],
    category: "AI/Healthcare"
  },
  {
    title: "AI Blog Summarizer",
    description: "Intelligent blog content analyzer and summarizer",
    icon: <ArticleIcon />,
    details: [
      "Developed a chat bot that processes blog URLs",
      "Extracts simple summaries using LLM",
      "Identifies 3 key facts/insights",
      "Provides concise takeaways"
    ],
    technologies: ["Python", "LLM", "Web Scraping", "NLP"],
    metrics: ["Quick summaries", "Key insights extraction", "Efficient reading"],
    category: "AI/Content"
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

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const handleOpen = (index: number) => setSelectedProject(index);
  const handleClose = () => setSelectedProject(null);

  return (
    <Box
      id="projects"
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
          Projects
        </Typography>

        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)'
          },
          gap: 3
        }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              onClick={() => handleOpen(index)}
              style={{ cursor: 'pointer' }}
            >
              <TiltedCard
                containerHeight="250px"
                containerWidth="100%"
                imageHeight="250px"
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
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    mb: 2,
                    gap: 2
                  }}>
                    <Box
                      className="project-icon"
                      sx={{ 
                        p: 1.5,
                        borderRadius: '50%',
                        background: 'linear-gradient(45deg, #00a0ff 30%, #ff4081 90%)',
                        transition: 'transform 0.3s ease-in-out'
                      }}
                    >
                      {project.icon}
                    </Box>
                    <Box>
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                          background: 'linear-gradient(45deg, #00a0ff 30%, #ff4081 90%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          fontWeight: 600
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {project.description}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: 1, 
                    mt: 'auto'
                  }}>
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <Chip
                        key={idx}
                        label={tech}
                        size="small"
                        sx={{
                          background: 'rgba(0, 160, 255, 0.1)',
                          border: '1px solid rgba(0, 160, 255, 0.2)',
                        }}
                      />
                    ))}
                    {project.technologies.length > 3 && (
                      <Chip
                        label={`+${project.technologies.length - 3}`}
                        size="small"
                        sx={{
                          background: 'rgba(255, 64, 129, 0.1)',
                          border: '1px solid rgba(255, 64, 129, 0.2)',
                        }}
                      />
                    )}
                  </Box>
                </Box>
              </TiltedCard>
            </motion.div>
          ))}
        </Box>
      </Container>

      <Modal
        open={selectedProject !== null}
        onClose={handleClose}
        aria-labelledby="project-modal-title"
      >
        <Box sx={modalStyle}>
          {selectedProject !== null && (
            <>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ 
                    p: 1.5,
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, #00a0ff 30%, #ff4081 90%)'
                  }}>
                    {projects[selectedProject].icon}
                  </Box>
                  <Box>
                    <Typography 
                      id="project-modal-title"
                      variant="h4"
                      sx={{ 
                        background: 'linear-gradient(45deg, #00a0ff 30%, #ff4081 90%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      {projects[selectedProject].title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {projects[selectedProject].category}
                    </Typography>
                  </Box>
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
                Key Features & Achievements
              </Typography>
              <List>
                {projects[selectedProject].details.map((detail, idx) => (
                  <ListItem key={idx}>
                    <ListItemText 
                      primary={detail}
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
                Technologies Used
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                {projects[selectedProject].technologies.map((tech, idx) => (
                  <Chip
                    key={idx}
                    label={tech}
                    sx={{
                      background: 'rgba(0, 160, 255, 0.1)',
                      border: '1px solid rgba(0, 160, 255, 0.2)',
                    }}
                  />
                ))}
              </Box>

              <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                Key Metrics
              </Typography>
              <List>
                {projects[selectedProject].metrics.map((metric, idx) => (
                  <ListItem key={idx}>
                    <ListItemText 
                      primary={metric}
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

export default Projects; 