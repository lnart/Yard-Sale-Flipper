import { Box, Typography, styled } from '@mui/material';

const HeadlineContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(4),
  margin: '20px auto',
  maxWidth: '800px',
  position: 'relative',
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    height: '3px',
    width: '60%',
    background: `linear-gradient(
      90deg, 
      transparent 0%, 
      ${theme.palette.primary.main} 50%, 
      transparent 100%
    )`,
  },
  '&::before': {
    top: 0,
  },
  '&::after': {
    bottom: 0,
  },
}));

const StyledHeadline = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 600,
  color: theme.palette.primary.main,
  textAlign: 'center',
  letterSpacing: '0.5px',
  textTransform: 'uppercase',
  margin: theme.spacing(2, 0),
  padding: theme.spacing(0, 2),
  position: 'relative',
  '& span': {
    color: theme.palette.text.primary,
    fontWeight: 400,
  },
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textAlign: 'center',
  fontSize: '1.1rem',
  maxWidth: '600px',
  marginTop: theme.spacing(1),
}));

export default function PageHeadline() {
  return (
    <HeadlineContainer>
      <StyledHeadline variant="h1">
        Yard Sale <span>Flipper</span>
      </StyledHeadline>
      <Subtitle variant="subtitle1">
        Transform your finds into profitable treasures
      </Subtitle>
    </HeadlineContainer>
  );
}
