import React, { useState } from 'react';
import {
  ButtonSpecial,
  MenuItemUnderlined,
} from '../../../pages/PageTemplate/Navbar/NavbarStyles';
import { AppBar, Button, Drawer, Toolbar } from '@mui/material';
import logo from '../../../assets/logo.png';
import { ContainerSidebarWrapper } from './SidebarStyles';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
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
        <Toolbar sx={{ gap: '2rem' }}>
          <img
            src={logo}
            width='82px'
          />
          <MenuItemUnderlined>BUY</MenuItemUnderlined>
          <MenuItemUnderlined>SELL</MenuItemUnderlined>
          <MenuItemUnderlined>PRE SALE</MenuItemUnderlined>
          <ButtonSpecial>PROMOTIONS</ButtonSpecial>
        </Toolbar>
      </ContainerSidebarWrapper>
    </Drawer>
  );
};

export default Sidebar;

//    <ul>
{
  /* <AppBar position='sticky'>
<ContainerNavbarWrapper>
  <Toolbar sx={{ gap: '2rem' }}>
    <img
      src={logo}
      width='82px'
    />
    <Button
      onClick={() => {
        setOpen(!open);
      }}
      className='MenuItemUnderlined'
    >
      BUY
    </Button>
    <MenuItemUnderlined>SELL</MenuItemUnderlined>
    <MenuItemUnderlined>PRE SALE</MenuItemUnderlined>
    <ButtonSpecial>PROMOTIONS</ButtonSpecial>
  </Toolbar>
</ContainerNavbarWrapper>
</AppBar>
<li>Sort by Age</li>
<li>Sort by Price</li>
<li>Sort by Race</li>
</ul> */
}
