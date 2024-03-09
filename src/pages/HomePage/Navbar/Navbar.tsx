import { AppBar, Button, Toolbar } from '@mui/material';
import logo from '../../../assets/logo.png';
import {
  ContainerNavbarWrapper,
  ButtonSpecial,
  MenuItemUnderlined,
} from './NavbarStyles';
import UpperNavbar from './UpperNavbar/UpperNavbar';

const Navbar = () => {
  return (
    <AppBar position='sticky'>
      <UpperNavbar />
      <ContainerNavbarWrapper>
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
