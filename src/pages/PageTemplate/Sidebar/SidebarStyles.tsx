import Container from '@mui/material/Container';

export const ContainerSidebarWrapper = ({
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
      marginTop: '3rem',
      width: 'auto',
    }}
  >
    {children}
  </Container>
);
