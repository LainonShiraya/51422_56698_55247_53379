import { AppBar, Button, Toolbar } from '@mui/material';
import Container from '@mui/material/Container';

export const ContainerUpperNavbarWrapper = ({
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
      boxShadow: 'none',
      margin: 'auto',
    }}
  >
    {children}
  </Container>
);

export const AppBarUpperNavbarWrapper = ({
  children,
}: {
  children?: React.ReactNode;
}) => (
  <AppBar
    position='sticky'
    sx={{
      backgroundColor: '#F5F5F5',
      boxShadow: 'none',
      height: '48px',
      display: 'flex',
      zIndex: 0,
    }}
  >
    {children}
  </AppBar>
);

export const ToolbarUpperNavbar = ({
  children,
}: {
  children?: React.ReactNode;
}) => (
  <Toolbar sx={{ minHeight: '32px !important', gap: '1rem' }}>
    {children}
  </Toolbar>
);

export const ButtonNoStyles = ({
  children,
  onClick,
}: {
  children?: React.ReactNode;
  onClick?: () => void;
}) => (
  <Button
    disableRipple
    onClick={onClick}
    sx={{
      minHeight: '0',
      padding: '0',
      '&:hover': {
        backgroundColor: 'transparent',
      },
    }}
  >
    {children}
  </Button>
);
