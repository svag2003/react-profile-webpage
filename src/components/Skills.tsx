import React from 'react';
import { Box, Typography, Container, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import CloudIcon from '@mui/icons-material/Cloud';
import StorageIcon from '@mui/icons-material/Storage';
import BuildIcon from '@mui/icons-material/Build';
import DnsIcon from '@mui/icons-material/Dns';
import GitHubIcon from '@mui/icons-material/GitHub';
import TiltedCard from './TiltedCard';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Proficient Languages",
    icon: <CodeIcon />,
    skills: ["Python", "C++", "C", "Java", "SQL", "TypeScript", "HTML"],
    color: "#00a0ff"
  },
  {
    title: "Cloud Platforms",
    icon: <CloudIcon />,
    skills: ["AWS", "Microsoft Azure", "OCI"],
    color: "#ff4081"
  },
  {
    title: "Databases",
    icon: <StorageIcon />,
    skills: ["PostgreSQL", "MySQL", "AWS RDS"],
    color: "#00bcd4"
  },
  {
    title: "Frameworks & Tools",
    icon: <BuildIcon />,
    skills: [
      "React",
      "Node.js",
      "Jupyter Notebook",
      "Conda",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Scikit-learn",
      "Streamlit"
    ],
    color: "#ffd700"
  },
  {
    title: "Cloud Services",
    icon: <DnsIcon />,
    skills: [
      "AWS EC2",
      "AWS S3",
      "AWS IAM",
      "AWS Lambda",
      "AWS CloudWatch",
      "AWS VPC",
      "Subnets",
      "Route Tables",
      "Security Groups",
      "ELB",
      "Auto Scaling",
      "CloudFormation"
    ],
    color: "#4caf50"
  },
  {
    title: "Version Control",
    icon: <GitHubIcon />,
    skills: ["Git", "GitHub", "GitLab", "Bitbucket"],
    color: "#9c27b0"
  }
];

const Skills = () => {
  return (
    <Box
      id="skills"
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
          Skills
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(2, 1fr)',
            },
            gap: 3,
          }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
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
                      sx={{ 
                        p: 1,
                        borderRadius: '50%',
                        background: `linear-gradient(45deg, ${category.color} 30%, ${category.color}88 90%)`,
                      }}
                    >
                      {category.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        background: `linear-gradient(45deg, ${category.color} 30%, ${category.color}88 90%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 600
                      }}
                    >
                      {category.title}
                    </Typography>
                  </Box>

                  <Box sx={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: 1,
                    mt: 'auto'
                  }}>
                    {category.skills.map((skill, idx) => (
                      <Chip
                        key={idx}
                        label={skill}
                        sx={{
                          background: `${category.color}11`,
                          border: `1px solid ${category.color}33`,
                          color: 'text.primary',
                          '&:hover': {
                            background: `${category.color}22`,
                          }
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </TiltedCard>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Skills; 