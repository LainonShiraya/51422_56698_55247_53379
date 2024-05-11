import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { ListItemStyles } from './AccountMenuStyles';
import { Button, Dialog, DialogActions, DialogTitle, Divider} from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';


export default function AccountMenu() {

  const { logout } = useAuth0();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
    <Box sx={{ width: '100%', maxWidth: 360, color: 'black' }}>
      <nav aria-label="main mailbox folders">
        <List >
          <ListItemStyles>
            <ListItemButton component={RouterLink} to="/account">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Ogólne informacje o koncie" />
            </ListItemButton>
          </ListItemStyles>
          <Divider />
          <ListItemStyles>
            <ListItemButton component={RouterLink} to="/account/orders">
              <ListItemIcon>
                <LocalShippingIcon />
              </ListItemIcon>
              <ListItemText primary="Moje zamówienia" />
            </ListItemButton>
          </ListItemStyles>
          <Divider />
          <ListItemStyles>
            <ListItemButton component={RouterLink} to="/account/address">
              <ListItemIcon>
                <ContactMailIcon />
              </ListItemIcon>
              <ListItemText primary="Dane adresowe" />
            </ListItemButton>
          </ListItemStyles>
          <Divider />
          <ListItemStyles>
            <ListItemButton component={RouterLink} to="/account/wishlist">
              <ListItemIcon>
                <FavoriteIcon />
              </ListItemIcon>
              <ListItemText primary="Lista życzeń" />
            </ListItemButton>
          </ListItemStyles>
          <Divider />
          <ListItemStyles>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Ustawienia konta" />
            </ListItemButton>
          </ListItemStyles>
          <Divider />
          <ListItemStyles>
            <ListItemButton onClick={handleClickOpen}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Wyloguj" />
            </ListItemButton>
          </ListItemStyles>
        </List>
      </nav>
    </Box>

    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Arr ju siur?"}
      </DialogTitle>
      <DialogActions>
      <Button onClick={() => logout()}>
          Yo
        </Button>
        <Button onClick={handleClose}>Nein</Button>
      </DialogActions>
    </Dialog>
  </React.Fragment>
  );
}