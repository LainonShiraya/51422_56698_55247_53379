import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';

export const ButtonAddToFavoriteStyles = () => (
  <Button
    disableRipple
    sx={{
      minHeight: '0',
      padding: '0',
      marginLeft: '0',
      alignSelf: 'flex-start',
      '&:hover': {
        backgroundColor: 'transparent',
      },
    }}
  >
    <FavoriteBorderIcon
      sx={{
        border: '2px solid #e0e0e0',
        borderRadius: '50%',
        backgroundColor: '#e0e0e0',
        padding: '0.10rem',
      }}
    />{' '}
    <Typography
      sx={{ marginLeft: '1rem' }}
      variant='subtitle2'
      fontWeight='700'
    >
      {' '}
      Dodaj do listy życzeń{' '}
    </Typography>
  </Button>
);

export const BoxTagStyles = ({ children }: { children?: React.ReactNode }) => (
  <Box
    sx={{
      backgroundColor: '#FFD100',
      width: 'fit-content',
      paddingInline: '0.5rem',
    }}
  >
    <Typography variant='caption'>{children}</Typography>
  </Box>
);
