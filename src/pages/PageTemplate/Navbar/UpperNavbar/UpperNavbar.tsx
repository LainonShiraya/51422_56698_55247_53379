import { Avatar, Button } from '@mui/material';
import {
  AppBarUpperNavbarWrapper,
  ButtonNoStyles,
  ContainerUpperNavbarWrapper,
  ToolbarUpperNavbar,
} from './UpperNavbarStyles';
import { useAuth0 } from '@auth0/auth0-react';
import userIcon from '../../../../assets/user-icon.png';
const UpperNavbar = () => {
  const icon = 'icon';
  const points = 100;
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

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
            <ButtonNoStyles onClick={() => logout()}>
              <Avatar
                alt={user?.name}
                src={userIcon}
                sx={{ width: 24, height: 24, marginInline: '0.5rem' }}
              />
              {user?.name}
            </ButtonNoStyles>
          ) : (
            <ButtonNoStyles onClick={() => loginWithRedirect()}>
              Login
            </ButtonNoStyles>
          )}
          |
          <ButtonNoStyles>
            {icon} {points} pkt.
          </ButtonNoStyles>
        </ToolbarUpperNavbar>
      </ContainerUpperNavbarWrapper>
    </AppBarUpperNavbarWrapper>
  );
};

export default UpperNavbar;
