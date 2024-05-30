import { Box } from '@mui/material';
import Button from '@mui/material/Button';

export const BoxOptionPickerOption = ({
  icon,
  title,
  onClick,
}: {
  children?: React.ReactNode;
  icon: string;
  title: string;
  onClick: () => void;
}) => (
  <Button
    disableRipple
    variant='text'
    onClick={onClick}
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
