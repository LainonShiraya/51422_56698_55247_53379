import { Box } from '@mui/material';
import Button from '@mui/material/Button';

export const BoxOptionPickerOption = ({
  icon,
  title,
}: {
  children?: React.ReactNode;
  icon: string;
  title: string;
}) => (
  <Button
    disableRipple
    variant='text'
    sx={{
      display: 'flex',
      flexDirection: 'column',
      '&:focus': {
        outline: 'none',
      },
      '&:active': {
        outline: 'none',
      },
      '&:hover': {
        backgroundColor: 'transparent',
      },
    }}
  >
    <Box>
      <img src={icon} />
    </Box>
    {title}
  </Button>
);
