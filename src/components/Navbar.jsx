import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SavingsIcon from '@mui/icons-material/Savings';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  return (
    <AppBar 
      position="sticky"
      elevation={4}
      sx={{
        background: 'linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)',
        py: 1
      }}
    >
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <SavingsIcon sx={{ mr: 1, fontSize: '2rem' }} />
          <Typography 
            variant="h6" 
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 'bold',
              letterSpacing: '1px',
              background: 'linear-gradient(90deg, #ffffff 0%, #e0f7fa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            SmartSaveAI
          </Typography>
        </Box>

        {isMobile ? (
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
        ) : (
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button 
              color="inherit" 
              href="/"
              sx={{
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              Home
            </Button>
            <Button 
              color="inherit" 
              href="/survey"
              sx={{
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              Survey
            </Button>
            <Button 
              color="inherit" 
              href="/dashboard"
              sx={{
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              Dashboard
            </Button>
            <Button 
              variant="outlined" 
              color="inherit"
              href="/login"
              sx={{
                ml: 2,
                fontWeight: 600,
                borderWidth: 2,
                '&:hover': {
                  borderWidth: 2,
                  backgroundColor: 'rgba(255,255,255,0.2)'
                }
              }}
            >
              Login
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;