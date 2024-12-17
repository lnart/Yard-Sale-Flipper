import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Paper,
  Typography,
  Fade,
  CircularProgress,
  Alert,
  styled,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import api from '../../services/api';
import MarketStats from './marketStats';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  maxWidth: 400,
  margin: '0 auto',
  boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}));

const FormContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
}));

interface FormData {
  text: string;
}

export default function TextSearchForm() {
  const [formData, setFormData] = useState<FormData>({ text: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.text.trim()) {
      setError('Please enter some text');
      return;
    }

    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      // const res = await api.post("/text", {
      //   formData
      // })
      // if(res.status === 200){
        setSuccess(true);
        setFormData({ text: '' });
      // }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Fade in={true} timeout={800}>
      <StyledPaper elevation={3}>
        <FormContainer component="form" onSubmit={handleSubmit}>
          <Typography 
            variant="h5" 
            align="center" 
            gutterBottom
            sx={{ 
              fontWeight: 500,
              color: theme => theme.palette.primary.main,
              letterSpacing: '0.5px'
            }}
          >
            Title Of Your Product
          </Typography>

          <TextField
            label="Enter Title"
            variant="outlined"
            fullWidth
            value={formData.text}
            onChange={(e) => {
              setFormData({ ...formData, text: e.target.value });
              setError(null);
              setSuccess(false);
            }}
            error={!!error}
            helperText={error}
            disabled={isLoading}
            InputProps={{
              sx: {
                borderRadius: '8px',
                '&:hover': {
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: theme => theme.palette.primary.main,
                  },
                },
              },
            }}
            sx={{
              '& label.Mui-focused': {
                color: theme => theme.palette.primary.main,
              },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            disabled={isLoading}
            sx={{
              borderRadius: '8px',
              padding: '12px',
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: 500,
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              '&:hover': {
                boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
              },
            }}
            endIcon={
              isLoading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                <SendIcon />
              )
            }
          >
            {isLoading ? 'Submitting...' : 'Submit'}
          </Button>

          {success && (
            <Fade in={success}>
              <Alert 
                severity="success"
                sx={{ 
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}
              >
              <MarketStats
              averagePrice={100}
              highestPrice={130}
              lowestPrice={70}
              uploadsLast90Days={322}
              salesLast90Days={90}
              ></MarketStats>
                
              </Alert>
            </Fade>
          )}
        </FormContainer>
      </StyledPaper>
    </Fade>
  );
}
