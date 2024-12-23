
import { 
    AppBar, 
    Toolbar, 
    Typography, 
  } from '@mui/material'
  import StorefrontIcon from '@mui/icons-material/Storefront'
  
  export default function Header() {
    return (
      <AppBar position="static"
      sx={{
        width: "100%",
        left: 0,
        right: 0
      }}
      >
          <Toolbar sx={{ width: '100%' }}>
            <StorefrontIcon 
              sx={{ 
                display: 'flex', 
                mr: 1,
                fontSize: '2rem'
              }} 
            />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none'
              }}
              
            >
              Flea-Market Flipper
            </Typography>
          </Toolbar>
      </AppBar>
    )
  }
  