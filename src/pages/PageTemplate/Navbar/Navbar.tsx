import { AppBar, Button, Toolbar } from '@mui/material';
import logo from '../../../assets/logo.png';
import {
  ContainerNavbarWrapper,
  ButtonSpecial,
  MenuItemUnderlined,
} from './NavbarStyles';
import UpperNavbar from './UpperNavbar/UpperNavbar';
import Sidebar from '../../../pages/PageTemplate/Sidebar/Sidebar';
import { useState } from 'react';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [sidebarValue, setSidebarValue] = useState('0');

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

    const changeSidebarValue = (newValue: string )=> {
      setSidebarValue(newValue);
    };


  return (
    <AppBar position='sticky'>
      <UpperNavbar />
      <ContainerNavbarWrapper>
        <Toolbar sx={{ gap: '2rem' }}>
          <img
            src={logo}
            width='82px'
          />
          <MenuItemUnderlined onClick={() => { changeSidebarValue('1'); toggleSidebar(); }}>BUY</MenuItemUnderlined>
          <MenuItemUnderlined onClick={() => { changeSidebarValue('2'); toggleSidebar(); }}>SELL</MenuItemUnderlined>
          <MenuItemUnderlined onClick={() => { changeSidebarValue('3'); toggleSidebar(); }}>PRE SALE</MenuItemUnderlined>
          <Sidebar
            isOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
            value={sidebarValue} 
            changeValue={changeSidebarValue} 
          />
          <ButtonSpecial>PROMOTIONS</ButtonSpecial>
        </Toolbar>
        <Toolbar>
          <Button>Search</Button>
          <Button>Like</Button>
          <Button>Cart</Button>
        </Toolbar>
      </ContainerNavbarWrapper>
    </AppBar>
  );
};
export default Navbar;
