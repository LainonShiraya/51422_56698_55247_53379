import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';

export const ContainerNavbarWrapper = ({
  children,
}: {
  children?: React.ReactNode;
}) => (
  <Container
    maxWidth='xl'
    sx={{
      justifyContent: 'space-between',
      display: 'flex',
      flexDirection: 'row',
      marginBlock: '0.5rem',
    }}
  >
    {children}
  </Container>
);

export const ButtonSpecial = ({
  children,
  hasIcon,
}: {
  children?: React.ReactNode;
  hasIcon?: boolean;
}) => (
  <Button
    variant='contained'
    color='secondary'
    endIcon={hasIcon && <SendIcon />}
    sx={{
      fontWeight: '700',
      margin: '0',
      '&:hover': {
        backgroundColor: '#ED1C24',
        color: '#FFF',
      },
    }}
  >
    {children}
  </Button>
);

export const MenuItemUnderlined = ({
  children,
}: {
  children?: React.ReactNode;
}) => (
  <MenuItem
    disableRipple
    sx={{
      '&:hover': {
        backgroundColor: 'transparent',
      },
    }}
  >
    <Typography
      fontWeight='700'
      sx={{
        '&:hover': {
          borderBottom: '2px solid #7F131B',
        },
      }}
    >
      {children}
    </Typography>
  </MenuItem>
);
