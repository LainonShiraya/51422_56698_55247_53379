import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LogoutIcon from '@mui/icons-material/Logout';
import { Divider, Typography} from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import logo from '../../../assets/logo.png';
import userIcon from '../../../assets/user-icon.png';
import { ListItemStyles } from './SettingsPageStyles';
import LinkIcon from '@mui/icons-material/Link';
import KeyIcon from '@mui/icons-material/Key';
import NewspaperIcon from '@mui/icons-material/Newspaper';


export default function SettingsPage() {

  const { logout, user } = useAuth0();

  return (
    <div>
      
        <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2rem'
      }}
    >
          <img
            src={logo}
            width='69px'
          />
          </Box>
          <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2rem'
      }}
    >
          <img
            src={userIcon}
            width='130px'
          />
          </Box>
          <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2rem'
      }}
    >
         <Typography variant="h5" textAlign="left" marginBottom="2rem" color={'black'}>
         Witamy {user?.name}!
         </Typography>
         </Box>
         <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
       // height: '100vh', // Ustawienie wysokości na 100% wysokości widoku
      }}
    >
      <nav aria-label="main mailbox folders">
        <List >
          <ListItemStyles>
            <ListItemButton>
              <ListItemIcon>
              <ContactMailIcon />
              </ListItemIcon>
              <ListItemText primary="Moje informacje" />
            </ListItemButton>
          </ListItemStyles>
          <Divider />
          <ListItemStyles>
            <ListItemButton>
              <ListItemIcon>
                <LinkIcon />
              </ListItemIcon>
              <ListItemText primary="Powiązane" />
            </ListItemButton>
          </ListItemStyles>
          <Divider />
          <ListItemStyles>
            <ListItemButton>
              <ListItemIcon>
                <KeyIcon />
              </ListItemIcon>
              <ListItemText primary="Zabezpieczenia" />
            </ListItemButton>
          </ListItemStyles>
          <Divider />
          <ListItemStyles>
            <ListItemButton>
              <ListItemIcon>
                <NewspaperIcon />
              </ListItemIcon>
              <ListItemText primary="Marketing i nweslettery" />
            </ListItemButton>
          </ListItemStyles>
          <Divider />
          <ListItemStyles>
            <ListItemButton onClick={() => logout()}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Wyloguj" />
            </ListItemButton>
          </ListItemStyles>
        </List>
      </nav>
    </Box>
  </div>
  );
}