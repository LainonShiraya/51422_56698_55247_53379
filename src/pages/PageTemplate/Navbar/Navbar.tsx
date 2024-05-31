import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Menu,
  Toolbar,
} from '@mui/material';
import logo from '../../../assets/logo.png';
import {
  ContainerNavbarWrapper,
  ButtonSpecial,
  MenuItemUnderlined,
} from './NavbarStyles';
import UpperNavbar from './UpperNavbar/UpperNavbar';
import Sidebar from '../../../pages/PageTemplate/Sidebar/Sidebar';
import { useState } from 'react';
import { useConvexAuth, useQuery } from 'convex/react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ConvexButtonShopIcon from './ConvexButtonShopIcon';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import MiniProduct from './MiniProduct';
import { api } from '../../../../convex/_generated/api';

import { Link as RouterLink } from 'react-router-dom';
const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sidebarValue, setSidebarValue] = useState('0');
  const { isAuthenticated } = useConvexAuth();
  const { loginWithRedirect } = useAuth0();
  const getFavoriteProducts = useQuery(api.products.getUserFavorites);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const changeSidebarValue = (newValue: string) => {
    setSidebarValue(newValue);
  };
  const navigate = useNavigate();
  return (
    <AppBar position='sticky'>
      <UpperNavbar />
      <ContainerNavbarWrapper>
        <Toolbar sx={{ gap: '2rem' }}>
          <RouterLink to='/'>
            <img
              src={logo}
              width='82px'
            />
          </RouterLink>
          <MenuItemUnderlined
            onClick={() => {
              changeSidebarValue('1');
              toggleSidebar();
            }}
          >
            BUY
          </MenuItemUnderlined>
          <MenuItemUnderlined
            onClick={() => {
              navigate(`../shop/sortCategory/Presale`);
            }}
          >
            PRE SALE
          </MenuItemUnderlined>
          <Sidebar
            isOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
            value={sidebarValue}
            changeValue={changeSidebarValue}
          />
          <ButtonSpecial
            onClick={() => {
              navigate(`../shop/sortCategory/Sale`);
            }}
          >
            PROMOTIONS
          </ButtonSpecial>
        </Toolbar>
        <Toolbar sx={{ gap: '1rem' }}>
          {getFavoriteProducts && getFavoriteProducts?.length > 0 ? (
            <PopupState
              variant='popover'
              popupId='demo-popup-menu'
            >
              {(popupState) => (
                <Badge
                  badgeContent={getFavoriteProducts.length}
                  color='secondary'
                  showZero
                >
                  <Button
                    variant='text'
                    {...bindTrigger(popupState)}
                    sx={{ padding: '0 !important' }}
                  >
                    Favorites
                  </Button>
                  <Menu {...bindMenu(popupState)}>
                    {getFavoriteProducts?.map((product) => (
                      <MiniProduct
                        product={product}
                        key={product.id}
                      />
                    ))}
                  </Menu>
                </Badge>
              )}
            </PopupState>
          ) : (
            <Badge
              badgeContent={0}
              color='secondary'
              showZero
            >
              <Button
                variant='text'
                sx={{ padding: '0 !important' }}
              >
                Favorites{' '}
              </Button>
            </Badge>
          )}
          {isAuthenticated ? (
            <ConvexButtonShopIcon />
          ) : (
            <IconButton
              onClick={() => {
                loginWithRedirect();
              }}
              size='large'
            >
              <Badge
                badgeContent={0}
                color='secondary'
              >
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          )}
        </Toolbar>
      </ContainerNavbarWrapper>
    </AppBar>
  );
};

export default Navbar;
