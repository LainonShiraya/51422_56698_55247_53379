import Container from '@mui/material/Container';
//import Tab from '@mui/material/Tab';
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
      marginTop: '4rem',
      width: 'auto',
    }}
  >
    {children}
  </Container>
);

// export const TabSidebar = ({
//   label,
//   value,
// }: {
//   label: string;
//   value: string;
// }) => (
//   <Tab
//     disableRipple
//     sx={{
//       fontWeight: 'bold',
//       color: 'black',
//       borderBottom: 'white',
//     }}
//     label={label + ' - ' + value}
//     value={value}
//   />
// );

// eslint-disable-next-line react-refresh/only-export-components
export const TabStyle = {
  fontWeight: 'bold',
  color: 'black',
  marginRight: '16px',
};
// eslint-disable-next-line react-refresh/only-export-components
export const TabPanelStyle = {
  color: 'black',
  listStyleType: 'none',
  lineHeight: '3',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  gap: '1rem',
};
