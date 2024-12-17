import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { 
  CssBaseline,
  ThemeProvider,
  createTheme,
  Box
} from '@mui/material'
import Header from './components/common/header'
import {Home} from './pages/home/home'
import {LandingPage} from './pages/landingPage/landingPage'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
      dark: '#1976d2',
      light: '#64b5f6',
    },
    text: {
      primary: '#2c3e50',
      secondary: '#546e7a',
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
    },
    secondary: {
      main: '#5cbed1'
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h2: {
      fontSize: '3.5rem',
      [createTheme().breakpoints.down('md')]: {
        fontSize: '2.5rem',
      },
    },
    h3: {
      fontSize: '2.5rem',
      [createTheme().breakpoints.down('md')]: {
        fontSize: '2rem',
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        },
      },
    },
  },
});

function App() {
  return (
    <div>

    
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3860233258250214"
       crossOrigin="anonymous"></script>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          minHeight: '100vh',
          margin: 0,
          padding: 0,
          width: '100%'
        }}>
          <Header />
          <Box component="main" sx={{ p: 3 }}>
            <Routes>
              <Route path="/search" element={<Home />} />
              <Route path="/" element={<LandingPage />}></Route>
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
    </div>
  )
}

export default App
