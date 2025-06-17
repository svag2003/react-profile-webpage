import React, { useState } from 'react';
import {
  AppBar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import GlassIcons from '../blocks/Components/GlassIcons/GlassIcons';
import { motion } from 'framer-motion';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import EmailIcon from '@mui/icons-material/Email';
import './Header.css';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const menuItems = [
    { 
      name: 'Home', 
      icon: <HomeIcon />, 
      color: 'linear-gradient(to right bottom,  #00a0ff, #ff4081)'
    },
    { 
      name: 'About', 
      icon: <PersonIcon />, 
      color: 'linear-gradient(to right bottom,  #00a0ff, #ff4081)'
    },
    { 
      name: 'Skills', 
      icon: <LightbulbIcon />, 
      color: 'linear-gradient(to right bottom, #00a0ff, #ff4081)'
    },
    { 
      name: 'Projects', 
      icon: <RocketLaunchIcon />, 
      color: 'linear-gradient(to right bottom, #33b4ff, #ff669a)'
    },
    { 
      name: 'Contact', 
      icon: <EmailIcon />, 
      color: 'linear-gradient(to right bottom, #0070b3, #b22c5a)'
    }
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (mobileOpen) {
      handleDrawerToggle();
    }
  };

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem 
          key={item.name} 
          onClick={() => scrollToSection(item.name)}
          sx={{
            background: 'transparent',
            margin: '8px',
            borderRadius: '8px',
            '&:hover': {
              background: 'transparent',
            }
          }}
        >
          <Box 
            sx={{ 
              mr: 2,
              background: item.color,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              '& svg': {
                filter: 'brightness(1.5)'
              }
            }}
          >
            {item.icon}
          </Box>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </List>
  );

  const glassIconItems = menuItems.map(item => ({
    icon: item.icon,
    color: item.color,
    label: item.name,
    customClass: 'nav-icon',
  }));

  return (
    <AppBar 
      position="fixed"
      elevation={0}
      sx={{
        background: 'rgba(18, 18, 18, 0.3)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: 1,
          px: 2,
          pointerEvents: 'none',
          background: 'transparent',
          '&:hover': {
            background: 'transparent',
          }
        }}
      >
        {isMobile ? (
          <Box sx={{ pointerEvents: 'auto' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                background: 'transparent',
                backdropFilter: 'blur(10px)',
                '&:hover': {
                  background: 'transparent',
                }
              }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              PaperProps={{
                sx: {
                  background: 'rgba(18, 18, 18, 0.8)',
                  backdropFilter: 'blur(10px)',
                  width: '250px',
                }
              }}
            >
              {drawer}
            </Drawer>
          </Box>
        ) : (
          <Box 
            component={motion.div}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            sx={{ 
              display: 'flex', 
              gap: 6,
              padding: '4px 24px',
              pointerEvents: 'auto',
              background: 'transparent',
              '&:hover': {
                background: 'transparent',
              }
            }}
          >
            <GlassIcons
              items={glassIconItems}
              className="nav-icons"
            />
          </Box>
        )}
      </Box>
    </AppBar>
  );
};

export default Header; 