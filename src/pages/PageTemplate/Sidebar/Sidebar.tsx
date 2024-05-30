import React from 'react';
import { Button, Drawer, Toolbar } from '@mui/material';
import logo from '../../../assets/logo.png';
import {
  ContainerSidebarWrapper,
  TabPanelStyle,
  TabStyle,
} from './SidebarStyles';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useQuery } from 'convex/react';
import { api } from '../../../../convex/_generated/api';
import { useNavigate } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  value: string;
  changeValue: (newValue: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  toggleSidebar,
  value,
  changeValue,
}) => {
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    changeValue(newValue);
  };
  const categories = useQuery(api.category.getCategories);
  const navigate = useNavigate();
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
                <TabList
                  onChange={handleChange}
                  centered
                  aria-label='Sidebar Tab'
                  indicatorColor='secondary'
                >
                  <Tab
                    label='BUY'
                    value='1'
                    sx={TabStyle}
                    disableRipple
                  />
                  <Button
                    disableRipple
                    onClick={() => {
                      navigate(`../shop/sortCategory/presale`);
                    }}
                  >
                    {' '}
                    Pre-Sale
                  </Button>
                </TabList>
              </Box>
              <TabPanel
                value='1'
                sx={TabPanelStyle}
              >
                {categories?.map((category) => (
                  <Button
                    sx={{ marginLeft: '0' }}
                    onClick={() => {
                      navigate(`../shop/sortCategory/${category.tag}`);
                    }}
                  >
                    {category.name}
                  </Button>
                ))}
              </TabPanel>
            </TabContext>
          </Box>
        </Toolbar>
      </ContainerSidebarWrapper>
    </Drawer>
  );
};

export default Sidebar;
