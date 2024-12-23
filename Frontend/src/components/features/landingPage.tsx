import { 
    Box, 
    Button, 
    Container, 
    Typography, 
    Grid, 
    Card, 
    styled, 
    useTheme
  } from '@mui/material';
  import { useNavigate } from 'react-router-dom';
  import SearchIcon from '@mui/icons-material/Search';
  import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
  import LocalOfferIcon from '@mui/icons-material/LocalOffer';
  import BarcodeScannerIcon from '@mui/icons-material/QrCodeScanner';
  import PersonIcon from '@mui/icons-material/Person';
  import MoneyOffIcon from '@mui/icons-material/MoneyOff';



  const FeatureCard = styled(Card)(({ theme }) => ({
    padding: theme.spacing(2),
    height: '140px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    },
    [theme.breakpoints.down('sm')]: {
      height: '120px',
    },
  }));
  
  const IconWrapper = styled(Box)(({ theme }) => ({
    fontSize: '2rem',
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.75rem',
    },
  }));
  
  const CTAButton = styled(Button)(({ theme }) => ({
    padding: theme.spacing(1.5, 4),
    fontSize: '1.1rem',
    borderRadius: '25px',
    textTransform: 'none',
    boxShadow: '0 4px 12px rgba(33, 150, 243, 0.3)',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 16px rgba(33, 150, 243, 0.4)',
    },
  }));
  
  export default function LandingPage() {
    const theme = useTheme();
    const navigate = useNavigate();
  
    const features = [
      {
        icon: <SearchIcon fontSize="inherit" />,
        title: 'Quick Search',
        description: 'Find items instantly'
      },
      {
        icon: <BarcodeScannerIcon fontSize="inherit" />,
        title: 'Scan',
        description: 'Barcode scanning'
      },
      {
        icon: <MonetizationOnIcon fontSize="inherit" />,
        title: 'Profit',
        description: 'Calculate margins'
      },
      {
        icon: <LocalOfferIcon fontSize="inherit" />,
        title: 'Pricing',
        description: 'Market prices'
      },
      {
        icon: <PersonIcon fontSize="inherit" />,
        title: 'No Signup',
        description: 'Instant Use'
      },
      {
        icon: <MoneyOffIcon fontSize="inherit" />,
        title: 'No Cost',
        description: 'Totally Free'
      }
    ];
  
    return (
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
        <Box sx={{ 
          pt: { xs: 4, sm: 6 }, 
          pb: { xs: 3, sm: 4 },
          px: 2,
          textAlign: 'center' 
        }}>
          <Container maxWidth="sm">
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '2rem', sm: '2.5rem' },
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Flea-Marketn Flipper
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.text.secondary,
                mb: 3,
                fontSize: { xs: '1rem', sm: '1.25rem' },
                lineHeight: 1.4,
              }}
            >
              Turn Flea-Market finds into profitable treasures
            </Typography>
            <CTAButton
              variant="contained"
              size="large"
              onClick={() => navigate('/search')}
              startIcon={<SearchIcon />}
            >
              Start Scanning
            </CTAButton>
          </Container>
        </Box>
  
        <Container maxWidth="md" sx={{ py: 3 }}>
          <Grid container spacing={2}>
            {features.map((feature, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <FeatureCard onClick={() => navigate('/search')}>
                  <IconWrapper>
                    {feature.icon}
                  </IconWrapper>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 600,
                      mb: 0.5,
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.text.secondary,
                      fontSize: { xs: '0.75rem', sm: '0.875rem' },
                    }}
                  >
                    {feature.description}
                  </Typography>
                </FeatureCard>
              </Grid>
            ))}
          </Grid>
        </Container>
  
        <Box sx={{ 
          bgcolor: 'primary.main', 
          color: 'white',
          py: { xs: 4, sm: 5 },
          mt: 3,
          textAlign: 'center',
        }}>
          <Container maxWidth="sm">
            <Typography 
              variant="h5" 
              sx={{ 
                mb: 2,
                fontSize: { xs: '1.25rem', sm: '1.5rem' },
                fontWeight: 600 
              }}
            >
              Ready to Start Flipping?
            </Typography>
            <CTAButton
              variant="contained"
              onClick={() => navigate('/search')}
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                '&:hover': {
                  bgcolor: 'grey.100',
                },
              }}
            >
              Get Started Now
            </CTAButton>
          </Container>
        </Box>
      </Box>
    );
  }
  