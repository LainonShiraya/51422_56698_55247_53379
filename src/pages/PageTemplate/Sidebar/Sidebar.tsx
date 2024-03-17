import React from 'react';
import './SidebarStyles.css';
import {
  ContainerNavbarWrapper,
  ButtonSpecial,
  MenuItemUnderlined,
} from '../../../pages/PageTemplate/Navbar/NavbarStyles';
import { AppBar, Button, Toolbar } from '@mui/material';
import logo from '../../../assets/logo.png';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
    <ul>
    <AppBar position='sticky'>
      <ContainerNavbarWrapper>
        <Toolbar sx={{ gap: '2rem' }}>
          <img
            src={logo}
            width='82px'
          />
          <Button  onClick={toggleSidebar} className="MenuItemUnderlined">
            BUY</Button>
          <MenuItemUnderlined>SELL</MenuItemUnderlined>
          <MenuItemUnderlined>PRE SALE</MenuItemUnderlined>
          <ButtonSpecial>PROMOTIONS</ButtonSpecial>
        </Toolbar>
        </ContainerNavbarWrapper>
    </AppBar>
        <li>Sort by Age</li>
        <li>Sort by Price</li>
        <li>Sort by Race</li>
    </ul>
    </div>
  );
};

export default Sidebar;