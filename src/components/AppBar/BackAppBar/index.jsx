import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import '../../../assets/font/font.css';

const defaultTheme = createTheme({
  typography: {
    fontFamily: 'ONESHINHANBOLD',
  },
  palette: {
    primary: {
      main: '#ffffff',
    },
  },
});

export default function BackAppBar({ label }) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <AppBar position="fixed" sx={{ top: '10vh', width: '100vw', backgroundColor: 'transparent' }} elevation={0}>
        <Toolbar sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', textAlign: 'left' }}>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleBack}
          >
            <ArrowBackIosNewIcon style={{ fontSize: 30, color: '#471AA0' }} />
          </IconButton>
          <Typography variant="h5" noWrap component="div" color="#471AA0">
            {label}
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}