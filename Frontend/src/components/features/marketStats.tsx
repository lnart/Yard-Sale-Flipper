import {
    Box,
    Paper,
    Typography,
    Grid,
    styled,
    Tooltip,
    Fade,
    useTheme
  } from '@mui/material';
  import TrendingUpIcon from '@mui/icons-material/TrendingUp';
  import TrendingDownIcon from '@mui/icons-material/TrendingDown';
  import EqualizerIcon from '@mui/icons-material/Equalizer';
  import CloudUploadIcon from '@mui/icons-material/CloudUpload';
  import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
  
  const StatsCard = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    borderRadius: 12,
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    },
  }));
  
  const IconWrapper = styled(Box)(({ theme }) => ({
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.primary.light,
    opacity: 0.8,
  }));
  
  interface MarketStatsProps {
    averagePrice: number;
    highestPrice: number;
    lowestPrice: number;
    uploadsLast90Days: number;
    salesLast90Days: number;
  }
  
  export default function MarketStats({
    averagePrice,
    highestPrice,
    lowestPrice,
    uploadsLast90Days,
    salesLast90Days,
  }: MarketStatsProps) {
    const theme = useTheme();
  
    const formatCurrency = (amount: number) => {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'EUR',
        maximumFractionDigits: 0,
      }).format(amount);
    };
  
    const formatNumber = (num: number) => {
      return new Intl.NumberFormat('en-US').format(num);
    };
  
    const stats = [
      {
        label: 'Average Price',
        value: formatCurrency(averagePrice),
        icon: <EqualizerIcon />,
        color: theme.palette.primary.main,
        tooltip: 'Average selling price in the last 90 days'
      },
      {
        label: 'Highest Price',
        value: formatCurrency(highestPrice),
        icon: <TrendingUpIcon />,
        color: theme.palette.success.main,
        tooltip: 'Highest recorded selling price'
      },
      {
        label: 'Lowest Price',
        value: formatCurrency(lowestPrice),
        icon: <TrendingDownIcon />,
        color: theme.palette.error.main,
        tooltip: 'Lowest recorded selling price'
      },
      {
        label: 'Uploads in the last 90 days',
        value: formatNumber(uploadsLast90Days),
        icon: <CloudUploadIcon />,
        color: theme.palette.info.main,
        tooltip: 'Number of new listings in the last 90 days'
      },
      {
        label: 'Sales sales in the last 90 days',
        value: formatNumber(salesLast90Days),
        icon: <ShoppingCartIcon />,
        color: theme.palette.warning.main,
        tooltip: 'Total sales in the last 90 days'
      }
    ];
  
    return (
      <Fade in={true} timeout={800}>
        <Box sx={{ width: '100%', p: { xs: 1, sm: 2 } }}>
          <Grid container spacing={2}>
            {stats.map((stat, index) => (
              <Grid item xs={6} sm={4} md={2.4} key={index}>
                <Tooltip title={stat.tooltip} arrow placement="top">
                  <StatsCard>
                    <IconWrapper sx={{ backgroundColor: `${stat.color}15` }}>
                      <Box sx={{ 
                        color: stat.color,
                        display: 'flex',
                        '& > svg': {
                          fontSize: { xs: '1.5rem', sm: '2rem' }
                        }
                      }}>
                        {stat.icon}
                      </Box>
                    </IconWrapper>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: { xs: '1rem', sm: '1.25rem' },
                        fontWeight: 600,
                        color: stat.color,
                        mb: 0.5,
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        fontSize: { xs: '0.75rem', sm: '0.875rem' },
                        fontWeight: 500,
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </StatsCard>
                </Tooltip>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Fade>
    );
  }
  