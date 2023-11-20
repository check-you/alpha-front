import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import '../../../assets/font/font.css';

const defaultTheme = createTheme({
  typography: {
    fontFamily: 'ONESHINHANMEDIUM',
  },
  palette: {
    primary: {
      main: '#ffffff',
    },
  },
});

export default function HomeAppBar({ label }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppBar position="fixed" sx={{ top: '10vh', width: '100vw', backgroundColor: 'transparent' }} elevation={0}>
        <Toolbar sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            component={Link}
            to="/"
          >
            <HomeIcon style={{ fontSize: 40, color: '#471AA0' }} />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, marginLeft: '-5%' }}>
            {label}
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}