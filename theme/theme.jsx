import { createTheme } from '@mui/material';

export const luxoraTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#E8D5C4',
      light: '#F5EAE3',
      dark: '#D4C4B9',
    },
    secondary: {
      main: '#1a1a1a',
      light: '#2a2a2a',
      dark: '#0f0f0f',
    },
    background: {
      default: '#0a0a0a',
      paper: '#1a1a1a',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    },
    divider: '#333333',
  },
  typography: {
    fontFamily: '"Sohne", "Helvetica Neue", sans-serif',
    h1: {
      fontSize: '4rem',
      fontWeight: 300,
      letterSpacing: '-0.02em',
      lineHeight: 1.1,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 400,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 400,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.95rem',
      color: '#b0b0b0',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          borderRadius: '2px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        contained: {
          backgroundColor: '#E8D5C4',
          color: '#0a0a0a',
          '&:hover': {
            backgroundColor: '#F5EAE3',
            boxShadow: '0 20px 40px rgba(232, 213, 196, 0.2)',
          },
        },
        outlined: {
          borderColor: '#E8D5C4',
          color: '#E8D5C4',
          '&:hover': {
            backgroundColor: 'rgba(232, 213, 196, 0.05)',
            borderColor: '#F5EAE3',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#1a1a1a',
          border: '1px solid #2a2a2a',
          transition: 'all 0.3s ease',
          '&:hover': {
            borderColor: '#E8D5C4',
            boxShadow: '0 20px 40px rgba(232, 213, 196, 0.1)',
          },
        },
      },
    },
  },
});