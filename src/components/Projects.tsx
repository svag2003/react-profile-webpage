import React, { useState, JSX } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Modal,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent
} from '@mui/material';
import { motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CodeIcon from '@mui/icons-material/Code';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ArticleIcon from '@mui/icons-material/Article';
import CloudIcon from '@mui/icons-material/Cloud';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import TiltedCard from './TiltedCard';
import CircularGallery from './CircularGallery/CircularGallery';

interface Project {
  title: string;
  description: string;
  icon: JSX.Element;
  details: string[];
  technologies: string[];
  metrics: string[];
  category: string;
  image?: string; // Optional image URL for the project
}

const projects: Project[] = [
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
    category: "AI/ML",
    image: process.env.PUBLIC_URL + '/project-images/instant-pot.jpg'
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
    category: "Machine Learning",
    image: process.env.PUBLIC_URL + '/project-images/twitter-sentiment.jpg'
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
    category: "AI/Healthcare",
    image: process.env.PUBLIC_URL + '/project-images/self-help.jpg'
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
    category: "AI/Content",
    image: process.env.PUBLIC_URL + '/project-images/ai-blog.jpg'
  },
  {
    title: "Database Management System Project",
    description: "Developed a comprehensive database management system for a College Administration System using MySQL",
    icon: <CodeIcon />,
    details: [
      "Designed and implemented a normalized database schema with 15+ interconnected tables to manage student records, faculty information, course schedules, and academic performance",
      "Created complex SQL queries and stored procedures to automate common administrative tasks like course registration, grade calculation, and attendance tracking",
      "Implemented data integrity constraints and triggers to maintain data consistency and enforce business rules across the database",
      "Developed an ER diagram to visualize database relationships and optimize table structures for efficient data retrieval",
      "Built views and materialized views to simplify complex reporting requirements and improve query performance",
      "Implemented role-based access control (RBAC) to ensure secure data access for different user types (admin, faculty, students)"
    ],
    technologies: ["MySQL Workbench", "ER Diagram", "SQL", "Stored Procedures", "Triggers", "RBAC"],
    metrics: ["99.9% data integrity", "50% faster query performance", "Zero data redundancy"],
    category: "Database Development",
    image: process.env.PUBLIC_URL + '/project-images/database-management.jpg'
  },
  {
    title: "Weather Alert System",
    description: "Developed an automated weather monitoring and alert system using Weather API integration",
    icon: <CloudIcon />,
    details: [
      "Integrated with OpenWeatherMap API to fetch real-time weather data for multiple geographic locations",
      "Implemented a notification system that sends automated alerts during severe weather conditions via SMS and email",
      "Built a caching mechanism to optimize API calls and reduce latency while maintaining data freshness",
      "Developed custom algorithms to analyze weather patterns and predict potential weather-related risks",
      "Created a dashboard for real-time monitoring of weather conditions across different locations",
      "Implemented geolocation services to automatically detect and track user locations for personalized alerts"
    ],
    technologies: ["Java", "Express", "OpenWeatherMap API", "Twilio", "MongoDB", "JWT", "Socket.io"],
    metrics: ["99.9% uptime", "< 500ms response time", "5000+ daily active users"],
    category: "API Integration",
    image: process.env.PUBLIC_URL + '/project-images/weather.jpg'
  },
  {
    title: "Self Driving Car Simulation",
    description: "Developed a program for a self driving car to navigate various tasks using C# and Unity",
    icon: <DirectionsCarIcon />,
    details: [
      "Implemented autonomous navigation algorithms using raycasting and pathfinding to enable the car to detect and avoid obstacles",
      "Developed a physics-based vehicle controller system for realistic car behavior including acceleration, braking, and steering",
      "Created multiple test environments with varying difficulty levels including city streets, highways, and parking scenarios",
      "Integrated machine learning models to improve the car's decision-making capabilities in complex traffic situations",
      "Built a real-time visualization system to display sensor data, decision points, and navigation paths",
      "Implemented performance metrics tracking to measure success rates across different scenarios"
    ],
    technologies: ["C#", "Unity3D", "ML-Agents", "Physics Engine", "Neural Networks", "Visual Studio"],
    metrics: ["95% navigation success rate", "60 FPS performance", "20+ test scenarios"],
    category: "Game Development & AI",
    image: process.env.PUBLIC_URL + '/project-images/self-driving.jpg'
  },
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
    category: "AI/ML",
    image: process.env.PUBLIC_URL + '/project-images/instant-pot.jpg'
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
    category: "Machine Learning",
    image: process.env.PUBLIC_URL + '/project-images/twitter-sentiment.jpg'
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
    category: "AI/Healthcare",
    image: process.env.PUBLIC_URL + '/project-images/self-help.jpg'
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
    category: "AI/Content",
    image: process.env.PUBLIC_URL + '/project-images/ai-blog.jpg'
  },
  {
    title: "Database Management System Project",
    description: "Developed a comprehensive database management system for a College Administration System using MySQL",
    icon: <CodeIcon />,
    details: [
      "Designed and implemented a normalized database schema with 15+ interconnected tables to manage student records, faculty information, course schedules, and academic performance",
      "Created complex SQL queries and stored procedures to automate common administrative tasks like course registration, grade calculation, and attendance tracking",
      "Implemented data integrity constraints and triggers to maintain data consistency and enforce business rules across the database",
      "Developed an ER diagram to visualize database relationships and optimize table structures for efficient data retrieval",
      "Built views and materialized views to simplify complex reporting requirements and improve query performance",
      "Implemented role-based access control (RBAC) to ensure secure data access for different user types (admin, faculty, students)"
    ],
    technologies: ["MySQL Workbench", "ER Diagram", "SQL", "Stored Procedures", "Triggers", "RBAC"],
    metrics: ["99.9% data integrity", "50% faster query performance", "Zero data redundancy"],
    category: "Database Development",
    image: process.env.PUBLIC_URL + '/project-images/database-management.jpg'
  },
  {
    title: "Weather Alert System",
    description: "Developed an automated weather monitoring and alert system using Weather API integration",
    icon: <CloudIcon />,
    details: [
      "Integrated with OpenWeatherMap API to fetch real-time weather data for multiple geographic locations",
      "Implemented a notification system that sends automated alerts during severe weather conditions via SMS and email",
      "Built a caching mechanism to optimize API calls and reduce latency while maintaining data freshness",
      "Developed custom algorithms to analyze weather patterns and predict potential weather-related risks",
      "Created a dashboard for real-time monitoring of weather conditions across different locations",
      "Implemented geolocation services to automatically detect and track user locations for personalized alerts"
    ],
    technologies: ["Java", "Express", "OpenWeatherMap API", "Twilio", "MongoDB", "JWT", "Socket.io"],
    metrics: ["99.9% uptime", "< 500ms response time", "5000+ daily active users"],
    category: "API Integration",
    image: process.env.PUBLIC_URL + '/project-images/weather.jpg'
  },
  {
    title: "Self Driving Car Simulation",
    description: "Developed a program for a self driving car to navigate various tasks using C# and Unity",
    icon: <DirectionsCarIcon />,
    details: [
      "Implemented autonomous navigation algorithms using raycasting and pathfinding to enable the car to detect and avoid obstacles",
      "Developed a physics-based vehicle controller system for realistic car behavior including acceleration, braking, and steering",
      "Created multiple test environments with varying difficulty levels including city streets, highways, and parking scenarios",
      "Integrated machine learning models to improve the car's decision-making capabilities in complex traffic situations",
      "Built a real-time visualization system to display sensor data, decision points, and navigation paths",
      "Implemented performance metrics tracking to measure success rates across different scenarios"
    ],
    technologies: ["C#", "Unity3D", "ML-Agents", "Physics Engine", "Neural Networks", "Visual Studio"],
    metrics: ["95% navigation success rate", "60 FPS performance", "20+ test scenarios"],
    category: "Game Development & AI",
    image: process.env.PUBLIC_URL + '/project-images/self-driving.jpg'
  },
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

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const galleryItems = projects.map(project => ({
    image: project.image || `${process.env.PUBLIC_URL}/project-images/placeholder.svg`,
    text: project.title
  }));

  const handleProjectClick = (index: number) => {
    setSelectedProject(projects[index]);
  };

  return (
    <Box 
      component="section" 
      sx={{ 
        minHeight: '65vh',
        width: '100vw',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'transparent',
        overflow: 'visible',
        left: '50%',
        transform: 'translateX(-50%)',
        py: 2
      }}
    >
      <Typography 
        variant="h2" 
        align="center"
        sx={{
          position: 'relative',
          zIndex: 2,
          mb: 1,
          width: '100%'
        }}
      >
        Projects
      </Typography>

      <Box sx={{ 
        position: 'absolute',
        width: '100vw',
        height: '100%',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1
      }}>
        <CircularGallery items={galleryItems} onItemClick={handleProjectClick} />
      </Box>

      <Dialog
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        maxWidth="md"
        fullWidth
      >
        {selectedProject && (
          <>
            <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h5" component="div">
                {selectedProject.title}
              </Typography>
              <IconButton
                aria-label="close"
                onClick={() => setSelectedProject(null)}
                sx={{ color: 'grey.500' }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom>
                {selectedProject.description}
              </Typography>
              
              <List>
                {selectedProject.details.map((detail, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={detail} />
                  </ListItem>
                ))}
              </List>

              <Box sx={{ mt: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Technologies
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {selectedProject.technologies.map((tech, index) => (
                    <Chip key={index} label={tech} variant="outlined" />
                  ))}
                </Box>
              </Box>

              <Box sx={{ mt: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Metrics
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {selectedProject.metrics.map((metric, index) => (
                    <Chip key={index} label={metric} color="primary" />
                  ))}
                </Box>
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
} 