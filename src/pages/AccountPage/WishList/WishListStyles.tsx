import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
export const ButtonAddToFavoriteStyles = ({
  onClick,
  isFavorite,
}: {
  onClick: () => void;
  isFavorite: boolean | undefined;
}) => (
  <Button
    disableRipple
    onClick={onClick}
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
    {isFavorite ? (
      <FavoriteIcon
        sx={{
          border: '2px solid #e0e0e0',
          borderRadius: '50%',
          backgroundColor: '#e0e0e0',
          padding: '0.10rem',
        }}
      />
    ) : (
      <FavoriteBorderIcon
        sx={{
          border: '2px solid #e0e0e0',
          borderRadius: '50%',
          backgroundColor: '#e0e0e0',
          padding: '0.10rem',
        }}
      />
    )}
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
