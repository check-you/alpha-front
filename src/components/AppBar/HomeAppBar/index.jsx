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
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            component={Link}
            to="/"
          >
            <HomeIcon style={{ fontSize: 40, color: '#471AA0' }} />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            {label}
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}