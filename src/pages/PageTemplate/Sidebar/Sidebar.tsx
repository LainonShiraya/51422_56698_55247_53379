import React from 'react';
import { Drawer, Toolbar } from '@mui/material';
import logo from '../../../assets/logo.png';
import { ContainerSidebarWrapper, TabPanelStyle, TabStyle } from './SidebarStyles';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;  
  value: string;
  changeValue: (newValue: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar, value, changeValue }) => {
  
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {  
    changeValue(newValue);
  };

  return (
    <Drawer
      open={isOpen}
      PaperProps={{
        sx: { width: '50vw' },
      }}
      onClose={() => {
        toggleSidebar();
      }}
    >
      <ContainerSidebarWrapper>
        <Toolbar sx={{ gap: '2rem', alignItems: 'flex-start' }}>
          <img
            src={logo}
            width='82px'
          />
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box sx={{ borderColor: 'divider' }}>
                <TabList onChange={handleChange} centered aria-label="Sidebar Tab" indicatorColor="secondary">
                  <Tab label="BUY" value="1" sx={TabStyle} disableRipple />
                  <Tab label="SELL" value="2" sx={TabStyle} disableRipple />
                  <Tab label="PRE SALE" value="3" sx={TabStyle} disableRipple />
                </TabList>  
              </Box>
              <TabPanel value="1" sx={TabPanelStyle}>
                <li>Sort by Age</li>
                <li>Sort by Price</li>
                <li>Sort by Race</li>
              </TabPanel>
              <TabPanel value="2" sx={TabPanelStyle}>
                <li>LEGO Sets</li>
                <li>LEGO Bricks</li>
                <li>LEGO Accessories</li>
              </TabPanel>
              <TabPanel value="3" sx={TabPanelStyle}>
                <li>LEGO New Releases:</li>
                <li>LEGO Sets on Pre-order</li>
              </TabPanel>
            </TabContext>
          </Box>
        </Toolbar>
      </ContainerSidebarWrapper>
    </Drawer>
  );
};

export default Sidebar;