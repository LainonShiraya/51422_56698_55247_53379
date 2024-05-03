import { Avatar, Button } from '@mui/material';
import {
  AppBarUpperNavbarWrapper,
  ButtonNoStyles,
  ContainerUpperNavbarWrapper,
  ToolbarUpperNavbar,
} from './UpperNavbarStyles';
import { useAuth0 } from '@auth0/auth0-react';
import userIcon from '../../../../assets/user-icon.png';
import pointsIcon from '../../../../assets/points-icon.svg';
import { Link as RouterLink } from 'react-router-dom';

const UpperNavbar = () => {
  const points = 100;
  const { loginWithRedirect, isAuthenticated, user} = useAuth0();

  return (
    <AppBarUpperNavbarWrapper>
      <ContainerUpperNavbarWrapper>
        <ToolbarUpperNavbar>
          <Button>{`<-`} Strefa Zabawy </Button>
        </ToolbarUpperNavbar>
        <ToolbarUpperNavbar>
          <ButtonNoStyles>{`<`}</ButtonNoStyles>BEZPŁATNA dostawa zamówień o
          wartości powyżej 200 zł!*Więcej
          <ButtonNoStyles>{`>`}</ButtonNoStyles>
        </ToolbarUpperNavbar>
        <ToolbarUpperNavbar>
          {isAuthenticated ? (
            <>
                <Button component={RouterLink} to="/account" disableRipple sx={{minHeight: '0',padding: '0','&:hover': {backgroundColor: 'transparent',}, }}>
                <Avatar
                  alt={user?.name}
                  src={userIcon}
                  sx={{ width: 24, height: 24, marginInline: '0.5rem' }}
                />
                {user?.name}
              </Button>
              |
              <ButtonNoStyles>
                <Avatar
                  alt={'points'}
                  src={pointsIcon}
                  sx={{ width: 24, height: 24, marginInline: '0.5rem' }}
                />
                {points} pkt.
              </ButtonNoStyles>
            </>
          ) : (
            <ButtonNoStyles onClick={() => loginWithRedirect()}>
              Login
            </ButtonNoStyles>
          )}
        </ToolbarUpperNavbar>
      </ContainerUpperNavbarWrapper>
    </AppBarUpperNavbarWrapper>
  );
};

export default UpperNavbar;
