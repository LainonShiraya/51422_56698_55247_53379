import Container from '@mui/material/Container';
import Tab from '@mui/material/Tab';
import React from 'react';


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

export const TabSidebar = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => (
  <Tab
    disableRipple
    sx={{
      fontWeight: 'bold',
      color: 'black',
      borderBottom: 'white',
    }}
    label={label + ' - ' + value}
    value={value}
  />
);
