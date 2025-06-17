import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Modal,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip
} from '@mui/material';
import { motion } from 'framer-motion';
import VerifiedIcon from '@mui/icons-material/Verified';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import TiltedCard from './TiltedCard';

const certifications = [
  {
    title: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    icon: "aws",
    learningOutcomes: [
      "Designed resilient architectures using AWS services",
      "Implemented secure applications and architectures",
      "Deployed high-performing and scalable systems",
      "Created cost-optimized architectural solutions",
      "Mastered core AWS services and best practices"
    ],
    skills: ["EC2", "S3", "RDS", "Lambda", "VPC", "CloudFormation", "IAM", "Route53"],
    validUntil: "2025"
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    icon: "aws",
    learningOutcomes: [
      "Understanding of AWS Cloud concepts and services",
      "AWS Cloud security and compliance fundamentals",
      "Core AWS services and use cases",
      "AWS Cloud architectural principles",
      "AWS pricing and billing models"
    ],
    skills: ["AWS Core Services", "Cloud Concepts", "Security", "Pricing", "Support"],
    validUntil: "2025"
  },
  {
    title: "OCI AI/ML Foundations",
    issuer: "Oracle Cloud Infrastructure",
    icon: "oci",
    learningOutcomes: [
      "Fundamentals of AI and Machine Learning in OCI",
      "OCI AI Services and capabilities",
      "Data preparation and model training",
      "ML model deployment and management",
      "AI/ML security and governance"
    ],
    skills: ["OCI AI Services", "Machine Learning", "Data Science", "Model Deployment"],
    validUntil: "2025"
  },
  {
    title: "OCI GenAI Professional",
    issuer: "Oracle Cloud Infrastructure",
    icon: "oci",
    learningOutcomes: [
      "Generative AI fundamentals and applications",
      "Large Language Models (LLMs) in OCI",
      "Prompt engineering and optimization",
      "GenAI model deployment and scaling",
      "Responsible AI practices"
    ],
    skills: ["Generative AI", "LLMs", "Prompt Engineering", "Model Deployment"],
    validUntil: "2025"
  },
  {
    title: "Azure AZ-900 AI/ML Foundations",
    issuer: "Microsoft Azure",
    icon: "azure",
    learningOutcomes: [
      "Azure AI services and capabilities",
      "Machine Learning fundamentals in Azure",
      "Cognitive Services implementation",
      "AI model deployment on Azure",
      "Azure AI security and compliance"
    ],
    skills: ["Azure AI", "Cognitive Services", "Machine Learning", "Azure ML Studio"],
    validUntil: "2025"
  },
  {
    title: "OCI Vector Search Professional",
    issuer: "Oracle Cloud Infrastructure",
    icon: "oci",
    learningOutcomes: [
      "Vector database fundamentals and architecture",
      "Semantic search implementation",
      "Vector embeddings and similarity search",
      "Performance optimization techniques",
      "Scalable vector search solutions"
    ],
    skills: ["Vector Search", "Semantic Search", "Embeddings", "Search Optimization"],
    validUntil: "2025"
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

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const handleOpen = (index: number) => setSelectedCert(index);
  const handleClose = () => setSelectedCert(null);

  return (
    <Box
      id="certifications"
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
          Certifications
        </Typography>

        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)'
          },
          gap: 3
        }}>
          {certifications.map((cert, index) => (
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
                containerHeight="200px"
                containerWidth="100%"
                imageHeight="200px"
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
                  textAlign: 'center'
                }}>
                  <VerifiedIcon 
                    sx={{ 
                      mb: 2,
                      background: 'linear-gradient(45deg, #00a0ff 30%, #ff4081 90%)',
                      borderRadius: '50%',
                      p: 0.5,
                      fontSize: '2rem'
                    }} 
                  />
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      background: 'linear-gradient(45deg, #00a0ff 30%, #ff4081 90%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontWeight: 600,
                      mb: 1
                    }}
                  >
                    {cert.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {cert.issuer}
                  </Typography>
                </Box>
              </TiltedCard>
            </motion.div>
          ))}
        </Box>
      </Container>

      <Modal
        open={selectedCert !== null}
        onClose={handleClose}
        aria-labelledby="certification-modal-title"
      >
        <Box sx={modalStyle}>
          {selectedCert !== null && (
            <>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                <Box>
                  <Typography 
                    id="certification-modal-title"
                    variant="h4"
                    sx={{ 
                      background: 'linear-gradient(45deg, #00a0ff 30%, #ff4081 90%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    {certifications[selectedCert].title}
                  </Typography>
                  <Typography variant="h6" color="primary" gutterBottom>
                    {certifications[selectedCert].issuer}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    Valid until: {certifications[selectedCert].validUntil}
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
                Key Learning Outcomes
              </Typography>
              <List>
                {certifications[selectedCert].learningOutcomes.map((outcome, idx) => (
                  <ListItem key={idx}>
                    <ListItemIcon>
                      <CheckCircleOutlineIcon sx={{ color: 'primary.main' }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary={outcome}
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
                Skills & Technologies
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                {certifications[selectedCert].skills.map((skill, idx) => (
                  <Chip
                    key={idx}
                    label={skill}
                    sx={{
                      background: 'rgba(0, 160, 255, 0.1)',
                      border: '1px solid rgba(0, 160, 255, 0.2)',
                    }}
                  />
                ))}
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default Certifications; 